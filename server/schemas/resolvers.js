const { AuthenticationError } = require('apollo-server-express')
const {
     User,
     Book
} = require('../models');
const { signToken } = require('../utils/auth')


// Should get books to save before relying on population
const resolvers = {
     Query: {
          user: async () => {
               return await User.findOne({
                    username
               }).populate({savedBooks})
          },
     },
     Mutation: {
          createUser: async (parent, {
               username,
               email,
               password
          }) => {
               const user = await User.create({
                    username,
                    email,
                    password
               });
               const token = signToken(user);
               return { token, user};
          },
          login: async (parent, { email, password }) => {
               const user = await User.findOne({email});

               if (!user) {
                    throw new AuthenticationError('No user found with this email address')
               }
               const correctPw = await user.isCorrectPassword(password);

               if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
               }

               const token = signToken(user);

               return { token, user };
          },
          saveBook: async (parent, { bookId }, context) => {
               if (context.user) {
                    const book = await Book.create({
                         bookId: bookId,
                         authors: book.volumeInfo.authors || ['No author to display'],
                         title: book.volumeInfo.title,
                         description: book.volumeInfo.description,
                         image: book.volumeInfo.imageLinks?.thumbnail
                    });

                    await User.findOneAndUpdate(
                         { _id: context.user._id},
                         { $addToSet: { savedBooks: book._id }}
                    );
                    return book;
               }
               throw new AuthenticationError('You need to be logged in!')
          },
          
     }
}

module.exports = resolvers;
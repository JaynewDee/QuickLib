const {
     AuthenticationError
} = require('apollo-server-express')
const {
     User,
     Book
} = require('../models');
const {
     signToken
} = require('../utils/auth')


// Should get books to save before relying on population
const resolvers = {
     Query: {
          user: async (username) => {
               return await User.findOne({
                    username: username
               }).populate('savedBooks')
          },
          users: async () => {
               return await User.find({})
          },
          book: async ({
               bookId
          }) => {
               return await Book.findOne({
                    bookId
               })
          },
          books: async () => {
               return await Book.find({}).populate('user')
          }
     },
     Mutation: {
          login: async (parent, {
               email,
               password
          }, context) => {
               const user = await User.findOne({
                    email
               });
               if (!user) {
                    throw new AuthenticationError('No user found with this email address')
               }
               const correctPw = await user.isCorrectPassword(password);

               if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
               }
               console.log(context.user)
               const token = signToken(user);
               return {
                    token,
                    user
               };
          },
          createUser: async (parent, {
               username,
               email,
               password,
               savedBooks
          }) => {
               const user = await User.create({
                    username,
                    email,
                    password,
                    savedBooks
               });
               console.log(user)
               const token = signToken(user);
               return {
                    token,
                    user
               }
          },
          saveBook: async (parent, {
               bookId,
               authors,
               title,
               description,
               image,
               link
          }, context) => {
               if (context.user) {
                    return await User.findOneAndUpdate({
                         _id: context.user._id
                    }, {
                         $addToSet: {
                              savedBooks: {
                                        bookId,
                                        authors,
                                        title,
                                        description,
                                        image,
                                        link
                              }
                         },
                    },
                    {
                         new: true,
                         rawResult: true
                    });
                    
               }
               throw new AuthenticationError('You need to be logged in!')
          },

     }
}

module.exports = resolvers;
const {
     AuthenticationError, 
} = require('apollo-server-express')
const {
     User,
     Book
} = require('../models');
const {
     signToken
} = require('../utils/auth')


const resolvers = {
     Query: {
          user: async (parent, args, context) => {
               console.log(context.query)
               return await User.findOne({username: context.user.username}).populate('savedBooks')
          },
          users: async () => {
               return await User.find({}).populate('savedBooks')
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
               password
          }) => {
               const user = await User.create({
                    username,
                    email,
                    password
               });
               console.log(user)
               const token = signToken(user);
               return {
                    token,
                    user
               }
          },
          saveBook: async (parent, book, context, info) => {
               if (context.user) {
                    console.log(context.user)
                    console.log(book)
                    const user = await User.findByIdAndUpdate(context.user._id,
                    {
                     //  $push /vs/ $addToSet ?
                         $push: {
                              savedBooks: {book}
                         },
                        });
                    return book;
               }
               throw new AuthenticationError('You need to be logged in!')
          },

     }
}

module.exports = resolvers;
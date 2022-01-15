const {
     User,
     Book
} = require('../models');
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {

     Query: {
          user: async () => {
               return await User.findOne({
                    username
               }).populate('books')
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

          saveBook: async (parent, {

          }) => {
               return await User.find({
                    username
               })
          },

          deleteBook: async (parent, {

          }) => {

          }

     }
}

module.exports = resolvers;
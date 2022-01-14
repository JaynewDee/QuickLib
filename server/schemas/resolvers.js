const { User, Book } = require('../models');

const resolvers = {
     Query: {
          user: async () => {
               const user = await User.find({})
               return user;
          },
          book: async () => {
               return Book.find({})
          }
     },
     Mutation: {
          addUser: async (parent, { username, email, password }) => {
               return await User.create({username, email, password});
          },

     }
}

module.exports = resolvers;
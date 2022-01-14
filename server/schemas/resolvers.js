const { User, Book } = require('../models');

const resolvers = {
     Query: {
          user: async () => {
               return User.find({})
          },
          book: async () => {
               return Book.find({})
          }
     },
     Mutation: {}
}

module.exports = resolvers;
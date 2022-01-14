const { User, Book } = require('../models');

const resolvers = {
     
     Query: {
          user: async () => {
               const user = await User.find({email, password})
               return user;
          },
          },
     Mutation: {
          createUser: async (parent, { username, email, password }) => {
               return await User.create({username, email, password});
          },
          saveBook: {}
          deleteBook: {}

     }
}

module.exports = resolvers;
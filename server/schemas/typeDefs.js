const { gql } = require('apollo-server-express');

const typeDefs = gql`
     type User {
          _id: ID
          username: String
          email: String
          password: String
          savedBooks: [Book]!
     }
     # Not sure about bookId here, may need to change to key defined by auto-increment
     type Book {
          authors: [String]
          description: String
          bookId: String
          image: String
          link: String
          title: String
     }
     type Query {
          _dummy: String
     }
`;

module.exports = typeDefs;
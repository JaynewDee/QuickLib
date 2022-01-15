const express = require('express');
const path = require('path');
const db = require('./config/connection');
// Configure apollo
const {
  ApolloServer
} = require('apollo-server-express');
const {
  typeDefs,
  resolvers
} = require('./schemas')
const {
  authMiddleware
} = require('./utils/auth')

const PORT = process.env.PORT || 3001;
const app = express();

// Use promise chain to await apollo connection before applying middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

server.applyMiddleware({ app });

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Initialize mongodb through moongoose config
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});
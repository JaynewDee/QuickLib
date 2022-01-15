const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

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
// Use promise chain to await apollo connection before applying middleware
const serverStart = new Promise(() => {
  try {
    new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    })
  } catch (err) {
    console.log(err)
  }
})
serverStart.then(() => {
  try {
    this.applyMiddleware({
      app
    })
  } catch (err) {
    console.log(err)
  }
})

// Configure express
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build/index.html')));
}

// Wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Initialize mongodb through moongoose config
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
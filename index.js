const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

mongoose
  .connect(
    "mongodb+srv://Shadq:FILOnumero1uno@cluster0.90imy.mongodb.net/poster?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`);
});

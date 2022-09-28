const { gql } = require("apollo-server");

const typeDefs = gql`
  # Queries
  type Query {
    test: String
  }

  # Mutations
  type Mutation {
    # User
    createUser(input: createUserInput): User!
    loginUser(input: loginUserInput): User!

    # Posts
    createPost(input: createPostInput): Post!
    deletePost(input: deletePostInput): Post!
    updatePost(input: updatePostInput): Post!
  }

  # Types
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    user: ID
  }

  # Inputs
  input createUserInput {
    name: String!
    email: String!
    password: String!
  }

  input loginUserInput {
    name: String!
    email: String!
    password: String!
  }

  input createPostInput {
    title: String!
    content: String!
  }

  input deletePostInput {
    id: ID!
  }

  input updatePostInput {
    id: ID!
  }
`;

module.exports = { typeDefs };

const { gql } = require('apollo-server-express');
// typeDefs.js: Define the necessary Query and Mutation types:
const typeDefs = gql`
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(): User
    removeBook(bookId: ID!): User
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId
    author: [String]
    description: String
    title: String
    image:
    link:
}

type Auth {
    token: ID!
    user: User
  }
`

// Mutation type:

// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)


// Book type:

// bookId (Not the _id, but the book's id value returned from Google's Book API.)


// description

// title

// image

// link

module.exports = typeDefs;
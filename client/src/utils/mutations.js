import {
     gql
} from '@apollo/client';

export const CREATE_USER = gql `
   mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
             token
             user {
                  _id
                  username
             }
        }
   }
`

export const LOGIN_USER = gql `
   mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
             token
             user {
               _id
               username
             }
        }
   }
`

export const SAVE_BOOK = gql`
   mutation saveBook($bookId: String!, $title: String!, $description: String!, $link: String!, $image: String!, $authors: [String!]) {
      saveBook(bookId: $bookId, title: $title, description: $description, link: $link, image: $image, authors: $authors) {
                    bookId
                    link
                    image
                    authors
                    title
                    description
     }
}
`

export const DELETE_BOOK = gql`
     mutation deleteBook($bookId: ID!) {
          deleteBook(bookId: $bookId) {
                    savedBooks {
                         bookId
                         title
                         authors
                         description
                         image
                         link
               }
          }
     }
`
export const UPDATE_USER = gql`
     mutation updateUser($username: String!) {
          updateUser(username: $username) {
               token
          }
     }
`

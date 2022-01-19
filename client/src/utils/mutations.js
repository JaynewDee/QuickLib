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
   mutation saveBook {
      saveBook {
               _id
               username
               savedBooks {
                    title
                    description
               }
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

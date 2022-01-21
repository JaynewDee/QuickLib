import { gql } from '@apollo/client';


export const QUERY_USER = gql`
query user($username: String!) {
   user(username: $username) {
      _id
      username
      email
      savedBooks {
         bookId
         title
         description
         authors
         link
         image
      }
      }
  }
`

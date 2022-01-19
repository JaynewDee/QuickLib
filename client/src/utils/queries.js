import { gql } from '@apollo/client';


export const QUERY_USER = gql`
query auth ($username: String!){   
  auth (username: $username) {
        savedBooks {
          title
          description
          bookId
          image
          link
      }
    }
  }
`

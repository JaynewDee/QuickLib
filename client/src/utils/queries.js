import { gql } from '@apollo/client';


export const QUERY_USER = gql`
query user ($username: String!){   
  user (username: $username) {
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

import { gql } from '@apollo/client';


export const QUERY_USER = gql`
query user {   
  user {
        _id
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

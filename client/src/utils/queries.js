import { gql } from '@apollo/client';

export const getMe = (token) => {
     return fetch('/api/users/me', {
       headers: {
         'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
       },
     });
   };

export const GET_ME = gql`
   query user {
        user {
             username
             email
             password
        }
   }
`


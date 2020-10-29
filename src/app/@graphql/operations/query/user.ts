import gql from 'graphql-tag';
import { USER_FRAGMENT } from '@graphql/operations/fragment/user';


//**************************************************************************************************
//    Forma de hacer las querys a graphql                                                           
//**************************************************************************************************

export const LOGIN_QUERY = gql`
 query getLogin($email:String!, $password:String!){

    login(email: $email, password: $password) {
      status
      message
      token
    }
  }
  `;


//Sería ponerlo igual que lo haríamos en apollo server
export const USERS_LIST_QUERY = gql`
    query usersList ($include: Boolean!){
        users {
            status
            message
            users {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const ME_DATA_QUERY = gql`
    query meData($include: Boolean!){
        me {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;





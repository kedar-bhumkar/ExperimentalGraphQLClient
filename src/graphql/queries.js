import gql from 'graphql-tag';


export const accountsQuery = gql`
  query accountsQuery{
  accounts {
    id
    name
  }
}  
`;


export const addAccountMutation = gql`
  mutation CreateAccount($input: CreateAccountInput){
  Account:createAccount(input:$input){
   id
    name
  }
}
`;


export const accountAddedSubscription = gql`
subscription subAccountAdded{
  accountAdded{
    id
    name
  }
}`


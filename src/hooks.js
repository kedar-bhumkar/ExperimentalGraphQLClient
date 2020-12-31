import {useQuery, useSubscription, useMutation} from '@apollo/react-hooks'
import {accountsQuery, accountAddedSubscription, addAccountMutation} from './graphql/queries'


export default function useGraphQLHook() {
    console.log('Inside useGraphQLHook...')
    const {loading, error, data} = useQuery(accountsQuery)
    console.log('loading, error, data', loading, error, data)

    const accounts = data? data.accounts : []

    useSubscription(accountAddedSubscription, {
      onSubscriptionData:({client,subscriptionData})=>{
        client.writeData({
          data:{
            accounts : accounts.concat(subscriptionData.data.accountAdded) 
           }
         })
        }
      }
    )
   
    const [addAccount] = useMutation(addAccountMutation)   
  

     return {
         accounts,
         addAccount         
     } 

}
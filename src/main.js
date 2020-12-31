import React from 'react';
import AccountList from './accountList'
import useGraphQLHook from './hooks'

  const MainComponent = ()=>{
    console.log('Inside MainComponent ....')
    const {accounts, addAccount} = useGraphQLHook()

    const handleAdd = async (text)=> {
      console.log('Inside handleAdd - ' + JSON.stringify(text))
      await addAccount({variables: {input: text}})
      
   }


    return (
        <div>
          <h1 className="title">Accounts</h1>
          {accounts.length > 0   &&  <AccountList accounts={accounts} onAddAccount={handleAdd}/>}
        </div>      
    );
} 

export default MainComponent;

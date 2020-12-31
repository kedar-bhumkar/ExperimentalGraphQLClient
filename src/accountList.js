import React from 'react';
import Account from './account'
import { withRouter } from 'react-router-dom';




const AccountList =  (props)=>{

    function handleClick(event) {
        event.preventDefault();               

        props.history.push({
            pathname: '/accounts/new',
            payload: { detail: props }
          })        
    }

    return (
        <React.Fragment>
            <section className="card-list">
                {props.accounts.map((account)=>(
                    <Account account={account} key={account.name}></Account>
            
                ))}            
            </section>
            <div className="buttons">
                <button onClick={e=>handleClick(e)}>New Account</button> 
            </div>
            
        </React.Fragment>
    )
}

export default withRouter(AccountList);

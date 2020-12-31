import React, {useState} from 'react';

const AccountNew = (props)=>{
    console.log('Inside AccountNew ....')
    const onAccountAdded = props.location.payload.detail.onAddAccount;

    const [formState, setFormState] = useState({})

    function handleChange(event) {
        event.preventDefault();        
        setFormState({[event.target.name]:event.target.value})   
    }

    async function  handleSubmit(event) {
        event.preventDefault();        
        await onAccountAdded({name:formState.Name})
        console.log('redirecting')
        props.history.push({
            pathname: '/',            
          })   
    }


    return (
           <section className="card-list">
                <article className="card">
                    <header className="card-header">
                        <form>
                            <p>New Account</p>
                            <input type="text" title="Name" name ="Name" onChange = {e=>handleChange(e)}/>       
                            <button type="button" onClick={e=>handleSubmit(e)}>Submit</button>                 
                        </form>
                    </header>

                </article>            
           </section>

              
    );
} 

export default AccountNew;

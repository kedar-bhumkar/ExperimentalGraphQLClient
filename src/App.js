import {ApolloProvider} from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import client from './graphql/client'
import React, { Component } from 'react';
import MainComponent from './main';
import AccountNew from './accountNew'

  const App = ()=>{
   return (
      <ApolloProvider client={client}>  
      <Router>
        <div>
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={MainComponent} />
                <Route exact path="/accounts/new" component={AccountNew} />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    </ApolloProvider>
    );  
}
export default App;

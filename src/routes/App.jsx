import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../components/Layout'

import {Home, Checkout, Information, Payment, Success, NotFound} from '../containers'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Layout>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/checkout/information" component={Information}/>
                    <Route exact path="/checkout/payment" component={Payment}/>
                    <Route exact path="/checkout/success" component={Success}/>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default App
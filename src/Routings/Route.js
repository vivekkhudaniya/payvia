import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Product from '../Pages/Product'
import Index from '../Pages/Index'
import Error from '../Components/error'
import Description from '../Pages/ProductDescription'
 export default class Routings extends React.Component{
     render(){
         return(
             <Router>
                 <Switch>
                 <Route exact path='/' component={Index} />
              <Route path='/Product' component={Product} />
              <Route path='/Description' component={Description} />
              <Route component={Error} />
                 </Switch>
             </Router>
         )
     }
 }
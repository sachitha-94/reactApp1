import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import DefProps from './DefPropTute';
import DefPropTute from './DefPropTute';
import StateTute from './StateTute';
import ComponentApi from './ComponentApi';
import RefTute from './Ref';
import keyTute from './Key';
import Counter from './Counter';



class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>React Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Profile</Link></li>
                  <li><Link to={'/DefPropTute'}>Default Props</Link></li>
                  <li><Link to={'/StateTute'}>State Tute</Link></li>
                  <li><Link to={'/ComponentApi'}>Component Api</Link></li>
                  <li><Link to={'/Ref'}>Ref Tute</Link></li>
                  <li><Link to={'/Key'}>Key Tute</Link></li>
                  <li><Link to={'/Counter'}>Counter</Link></li>
                  
               </ul>
               <hr/>
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/DefPropTute' component={DefPropTute} />
                  <Route exact path='/StateTute' component={StateTute} />
                  <Route exact path='/ComponentApi' component={ComponentApi}/>
                  <Route exact path='/Ref'component={RefTute}/>
                  <Route exact path='/Key'component={keyTute}/>
                  {/* <Route exact path='/Counter' component={Counter}/> */}
            
                  
                  
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;
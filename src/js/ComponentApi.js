import React from 'react';
import ReactDOM from 'react-dom';

class ComponentApi extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: [],
         i:0
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
      this.resetState=this.resetState.bind(this);
      this.forceUpdateHandler=this.forceUpdateHandler.bind(this);
      this.findDomHandler=this.findDomHandler.bind(this);
 
    };
   setStateHandler() {
    var icur=this.state.i+1;
      var item = "setState..." +this.state.i;
      var myArray = this.state.data.slice();
      myArray.push(item);
      this.setState({data: myArray,i:icur})
   };
   resetState(){
       //var emptyArr=[];
       this.setState({data:[],i:0})
   }
   forceUpdateHandler(){
        this.forceUpdate();
   }
   findDomHandler(){
       var  div1=document.getElementById('div1');
       ReactDOM.findDOMNode(div1).style.color='green';
   }
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>Set State</button>
            <button onClick = {this.resetState}>Reset</button>
            <h4>State Array: {this.state.data}</h4>
            <h4>State Array: {this.state.i}</h4>
            <button onClick ={this.forceUpdateHandler}>Force Update</button>
            <h4>Random number: {Math.random()}</h4>
            <button onClick ={this.findDomHandler}>Find Dom Node</button>
            <div id='div1'>Div one</div>
         </div>
      );
   }
}
export default ComponentApi;
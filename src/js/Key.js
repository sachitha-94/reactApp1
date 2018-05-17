import React from 'react';

class KeyTute extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:[{id:1,content:'amal'},{id:2,content:'kamal'},{id:3,content:'nimal'}]
        }
    };

    render() {
        return (
           <div>
              <div>
                 {this.state.data.map((dynamicComponent, i) => <Content 
                    key = {i} componentData = {dynamicComponent}/>)}
              </div>
           </div>
        );
     }
  }
  class Content extends React.Component {
     render() {
        return (
           <div>
              <div>{this.props.componentData.content}</div>
              <div>{this.props.componentData.id}</div>
           </div>
        );
     }
  }
export default KeyTute;


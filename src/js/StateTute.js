import React from 'react';

class StateTute extends React.Component{
    constructor(Props){
        super(Props);

        this.state={
            header: "Header from state..",
            content:"content from state"
        }
    }
    render(){
        return(
            <div>
                 <h1>{this.state.header}</h1>
                 <h1>{this.state.content}</h1>
            </div>
        );
    }
}
export default StateTute;
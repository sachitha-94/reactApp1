import React from 'react';
import ReactDOM from 'react-dom'

class RefTute extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:''
        }
        this.updateText=this.updateText.bind(this);
        this.clearText=this.clearText.bind(this);
    };

    updateText(e){
        this.setState({data:e.target.value});
    }
    clearText(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render(){
        return(
            <div>
                <input value={this.state.data} onChange={this.updateText} ref="myInput"></input>
                <button onClick={this.clearText}>Clear Text</button>
                <h4> {this.state.data}</h4>
            </div>
        );
    }
}
export default RefTute;
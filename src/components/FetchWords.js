import React from "react";

export default class FetchWords extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e){
        this.props.onSubmit();

    }
    handleChange(e){
        const input = e.target.value;
        this.props.onChange(input)
    }
    
    //{this.props.words.map(word => <div>{word}</div>)}
    render(){
        return (<div>
            <input type="text" placeholder='Search letters here' maxlength="12" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Submit</button>
            <h3>Solutions:</h3>
            
            {Array.from(this.props.words).map(word => {
                if (word.length > 12) return <h3>{word}</h3>
                else{
                    return <div>
                    <li>{word}</li>
                    </div>
                }  
            })}
            
        </div>
        );
    }
}
import React from "react";

export default class FetchWords extends React.Component{
    state = {
        loading: true,
        words: [],
    };
    
    async componentDidMount(){ // after first render
        const url = "https://api.datamuse.com/words?ml=spoon&sp=*a&max=10";
        const response = await fetch(url);
        const data = await response.json();
        let w = []
        for(let i=0;i<data.length;i++){
            w[i] = data[i]['word'];
            console.log(i + data[i]['word']);
        }
        this.setState({words: w});

    }
    render(){
        return (<div>
            <h3>Potential Solutions:</h3>
            {this.state.words.map(word => <div>{word}</div>)}
        </div>
        );
    }
}
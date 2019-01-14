import React from 'react';
import './style.css';


class Header extends React.Component{
    state = {
        valorQnt: '',
        minhasFrases: ["Frase testando react 123.","Frase testando react 123.","Frase testando react 123.","Frase testando react 123.","Frase testando react 123.","Frase testando react 123."],
        frasesGeradas: []
    };

    handleQnt(event){
        this.setState({
            valorQnt: event.target.value
        })
    }

    randomFrases = () =>{
        this.setState({
            frasesGeradas: this.state.minhasFrases
        })
    }

    render(){
        return (
            <div>
                <label>Digite a quantidade de frases: </label>
                <input type="text" value={this.state.valorQnt} onChange={this.handleQnt.bind(this)}/>
                <button className="btn btn-primary" onClick={this.randomFrases}>Criar</button>
                {
                   this.state.frasesGeradas.map(frase =><p>{frase}</p>)
                }
            </div>
        )
    }
}

export default Header;
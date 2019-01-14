import React from 'react';
import './style.css';

const Botao = ({value, atualizaState}) =>{
    const clicaBotao = () =>{
        randomFrases(value);
    }

    

    return (<button className="btn btn-primary" onClick={clicaBotao}>
        Criar
    </button>)
}

export default Botao;
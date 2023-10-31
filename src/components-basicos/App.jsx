import React from "react";
import Primeiro from './components-basicos/Primeiro'
import ComParamentro from './components-basicos/ComParamentro'


export default function App(props) {
    return (
        <div id="app">
            <Primeiro></Primeiro>
            <ComParamentro
                titulo="Situação do aluno"
                aluno="Pedro Silva"
                nota={9.3}
                
        />
    );

}
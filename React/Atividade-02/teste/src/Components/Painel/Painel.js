import React from 'react';

import Time from './Time';
import Partida from './Partida'


export default class PlacarContainer extends React.Component {
    
    constructor(){
        super();
        this.state = {
             gols_casa: 0,
             gols_visitante:0,
        };
    }

    marcaGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    marcaGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }

    render() {

        const { partida, casa , visitante } = this.props;

        return (

    <div>
        <div style={{float: "left", "marginRight": "50px"}}>
            <h3>Casa</h3>
            <Time nome={casa.nome} 
                  gols={this.state.gols_casa}
                  marcarGol={this.marcaGolCasa.bind(this)}
                  />
        </div>
        <div style={{float: "left", "marginRight": "50px"}}>
            <Partida {...partida} />
        </div>
        <div style={{float: "left", "marginRight": "50px"}}>
            <h3>Visitante</h3>
            <Time nome={visitante.nome} 
                  gols={this.state.gols_visitante}
                  marcarGol={this.marcaGolVisitante.bind(this)}
            />
        </div>

        <div style={{clear: "both"}}></div>
    </div>

        );
    }
}
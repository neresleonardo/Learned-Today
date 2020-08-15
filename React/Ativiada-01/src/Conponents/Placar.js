import React from 'react';

export default class Placar extends React.Component {

    constructor(){
        super();
        this.state = {
             contador: 0,
             contador2: 0, 
        }
    }

    plus() {
         this.setState({
             contador: this.state.contador + 1,
             
         })
    }
    plus2() {
        this.setState({
            contador2: this.state.contador2 + 1,
            
        })
   }

    render(){

        return (
            <div className="container"> 
            
            <div>
            <div style={{float:"left", "marginRight":"10px"}}>
        <h1 >{this.props.casa.nome}</h1>
            <h3>Casa</h3>
            <h1>{this.state.contador}</h1>
            <button onClick={this.plus.bind(this)} >GOL</button>
            </div>

            <div>
            <div style={{float:"left", "marginRight":"10px"}}>
            <h1>Placar</h1>  
            <h2>{this.props.partida.data} / {this.props.partida.hora}</h2>
            </div> 
            </div>

            <div style={{float:"left", "marginRight":"10px"}}>
            <h1>{this.props.visitante.nome}</h1>
            <h3>Visitante</h3>
            <h1>{this.state.contador2}</h1>
            <button onClick={this.plus2.bind(this)}>GOL</button>
            </div>
            <div></div>
            </div>
            </div>
        )

    }
}
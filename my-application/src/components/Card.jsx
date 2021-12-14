import * as style from './css/X_or_O.module.css';
import { Component } from 'react';

class Card extends Component{
    state={
        card:this.props.card,
        hideCard:"none"
    }


    render(){
        return(<article  >{this.state.card.num}</article>)
    }
}

export default Card

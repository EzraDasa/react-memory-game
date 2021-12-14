import { Component } from "react";
import Card from "./Card";
import * as style from './css/Section_memory.module.css';
class Section_memory extends Component{
    state={
        arrayCards:[],
        time:0
    }
    
    componentDidMount(){

        const timer=setInterval(()=>{
            let num=this.state.time;
            num++;
            this.setState({time:num})
        },1000)

        const cards=[
            {num:1,clicked:false},
            {num:2,clicked:false},
            {num:3,clicked:false},
            {num:1,clicked:false},
            {num:2,clicked:false},
            {num:3,clicked:false}
        ]
        cards.sort(()=> .5-Math.random())
        this.setState({arrayCards:cards})
    }

    
    render(){
        return(
            <section>
                {this.state.arrayCards.map((item)=><Card card={item}></Card>)}
                <p>{this.state.time}</p>
            </section>
        )
    }
}

export default Section_memory
import {Component} from "react";
import Section_memory from "./components/Section_memory";

class App extends Component {
  state={
    hide:"",
    showCards:""
  }

  render(){
    return (
      <div className="App">
        <h1 style={{display:`${this.state.hide}`}}>Memory Game</h1>
        <button style={{display:`${this.state.hide}`}} onClick={()=>{
          this.setState({hide:"none"})
          this.setState({showCards:<Section_memory/>})          
        }}>start game</button>
        {this.state.showCards}
      </div>
    );
  }
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter.js";
import Post from "./posts";
import MemeGenerator from "./memeGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="head">REACT PROJECT</p>
        <Counter name="PROJECT 1 COUNTER"></Counter>
        <Post name="PROJECT 2 POSTS"></Post>
        <MemeGenerator name="PROJECT 3 MEME GENERATOR" ></MemeGenerator>
      </header>
    </div>
  );
}

export default App;

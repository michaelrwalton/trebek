import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="profile">
          <div><b>Team Name:</b> Team Rocket</div>
          <div><b>Round #:</b> 1</div>
          <div><b>Question #:</b> 1</div>
          <div><b>Total points:</b> 0</div>
        </div>
      </header>
      <div>
        <div className="points">
          <div className="point">1</div>
          <div className="point">3</div>
          <div className="point">5</div>
          <div className="point">7</div>
        </div>
        <div className="question">
          <h1>Category: Science!</h1>
          <h2>Question</h2>
          <p>What is the only planet in our solar system that rotates on its side?</p>
        </div>
        <div className="answer">
          <input type="text" name="answer" /><br/><br/>
          <input type="submit" value="Final answer"></input>
        </div>
      </div>
    </div>
  );
}



export default App;

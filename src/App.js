
import './App.css';
import Play from './Play';

let gameArrayitems=[
  "Rock",
  "Paper",
  "Scissors"
]

function App() {
  return (
    <div>
      <Play gameArrayitems={gameArrayitems} />
    </div>
  );
}

export default App;

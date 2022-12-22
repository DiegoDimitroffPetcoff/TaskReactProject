import logo from './logo.svg';
import './App.css';
// import Greeting  from "./COMPONENTS/pure/greeting";
import Greetingf  from "./COMPONENTS/pure/greetingF";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  {/* <Greeting name="Diego"></Greeting> */}
  <Greetingf name="Diego"></Greetingf>

      </header>
    </div>
  );
}

export default App;

import './App.css';
import Routes from "./Routes/Routes";
import {VideoChat} from "./Components/VideoChat/VideoChat"


function App() {
  return (
    <div className="App">
      <Routes />
      <VideoChat/>

    </div>
  );
}

export default App;

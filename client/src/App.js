import './App.css';
import {Navbar} from './Components/Navbar/Navbar.jsx';
import { VideoChat } from './Components/VideoChat/VideoChat';
import {Homepage} from './Pages/Homepage/Homepage.jsx';


function App() {
  return (
    <div className="App">

      {/* <Homepage /> */}
      <VideoChat/>

    </div>
  );
}

export default App;

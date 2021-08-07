import './App.css';
import { ParentsRegForm } from './Components/Forms/ParentsRegForm';
import { SchoolRegForm } from './Components/Forms/SchoolRegForm';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
     <Routes/>
     <ParentsRegForm />
     <SchoolRegForm/>
    </div>
  );
}

export default App;

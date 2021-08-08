import './App.css';
import { ParentsLoginForm } from './Components/Forms/ParentsLoginForm';
import { ParentsRegForm } from './Components/Forms/ParentsRegForm';
import { SchoolLoginForm } from './Components/Forms/SchoolLoginForm';
import { SchoolRegForm } from './Components/Forms/SchoolRegForm';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
     <Routes/>
     <ParentsRegForm />
     <SchoolRegForm/>
     <ParentsLoginForm/>
     <SchoolLoginForm/>
    </div>
  );
}

export default App;

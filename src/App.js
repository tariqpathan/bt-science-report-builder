import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm'
import SubjectForm from './components/SubjectForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <StudentForm/>
        <SubjectForm></SubjectForm>
    </div>
  );
}

export default App;


import './App.css';
import Health from './Components/Health';
import ClassComponent from './Components/FunVsClass';
import EmpDetails from './Components/Props';

function App() {
  return (
    <div className="App">
      <h1>
        welcom to hospital
      </h1>
      <Home/>
      <Health/>
      <ClassComponent/>
      <EmpDetails name="pranay" role="Software Developer"/>
      <EmpDetails name="laksmi" role="Software Tester"/>
      <EmpDetails name="subbu" role="Software Designer"/>
    </div>
    
  );
}

export default App;
function Home(){
  return <p>
    hello
  </p>
}

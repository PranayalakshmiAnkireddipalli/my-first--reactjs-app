
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
      <EmpDetails name="pranay" role="cooking"/>
      <EmpDetails name="laksmi" role="driving"/>
      <EmpDetails name="subbu" role="planing"/>
    </div>
    
  );
}

export default App;
function Home(){
  return <p>
    hello
  </p>
}

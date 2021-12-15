import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge'

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <WarningSign text="This is a danger alert!" />
      <MyBadge text="MY BUDGE" color="info"/>
    </div>
  );
}

export default App;

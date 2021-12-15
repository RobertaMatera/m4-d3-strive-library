import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import WarningSign from './Components/WarningSign';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <WarningSign text="This is a danger alert!" />
    </div>
  );
}

export default App;

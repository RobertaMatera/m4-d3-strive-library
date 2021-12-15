import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import books from './Components/Data/books.json';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <WarningSign text="This is a danger alert!" />
      <MyBadge text="MY BUDGE" color="info"/>
      <SingleBook book={books[1]} />
    </div>
  );
}

export default App;

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav'
import WarningSign from './Components/WarningSign'
import MyBadge from './Components/MyBadge'
import SingleBook from './Components/SingleBook'
import books from './Components/Data/books.json'
import BookList from './Components/BookList'

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <WarningSign text="This is a danger alert!" />
      <MyBadge text="MY BUDGE" color="info"/>
      {/* <SingleBook book={books[10]} /> */}
      <BookList books={books}/>
    </div>
  );
}

export default App;

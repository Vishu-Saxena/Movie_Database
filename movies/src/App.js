import MovieList from './components/MovieList';
import './App.css';
import { useDataContext } from './ContextApi/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const {loading , movies} = useDataContext();

  return (
    <>
    <div className="App">
      <Navbar/>
      {/* <h1>Movie Database</h1> */}
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={movies}/>
      )}

    
    </div>
    <Footer/>
    </>
  );
}

export default App;

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataValue = (props)=>{
    // state to store movies details
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");
    // const [sortedMovies, setSortMovie] = useState([]);
  
    // Fetching movie data from API
    const getMoviesDetails=async()=>{
        try {
            const res = await axios.get('https://dummyapi.online/api/movies');
            if(res?.data){
                setMovies(res.data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching the movie data", error);
            setLoading(false);
        }
        
    }
    // function to sort movies as per ratings and title
    const sortFn = (movies, sortBy) => {
        const sortedMovies = [...movies]; // Create a copy of the movies array
      
        switch (sortBy) {
          case 'rating':
            sortedMovies.sort((a, b) => b.rating - a.rating); // Sort by rating (highest first)
            break;
          case 'title':
            sortedMovies.sort((a, b) => a.movie.localeCompare(b.movie)); // Sort by title (A-Z)
            break;
          default:
            break; // No sorting if the option is not recognized
        }
      
        return sortedMovies; // Return the sorted array
      };
    useEffect(()=>{
       setMovies(sortFn(movies , sort));
    },[sort]);
    useEffect(()=>{
        getMoviesDetails();
    },[]);
    return <DataContext.Provider value={{movies , loading , setSort}}> {props.children} </DataContext.Provider>
}

// custom hook
const useDataContext = ()=> useContext(DataContext);

export default DataValue;
export {useDataContext , DataContext};
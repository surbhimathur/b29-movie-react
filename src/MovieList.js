import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Movie } from './Movie';

export function MovieList({movies,setMovies}) {
  return (
    <div className="outer-box">
     {movies.map((nm,index) => (<Movie deleteButton={<IconButton color="error" size="large" aria-label="delete" onClick={()=>
     {
       console.log("deleting");
       const deleteIndex=index;
       //Remove the movie with deleteindex
       //allow all movie except for movie deleteindex
       const remaining_movies= movies.filter((mv,idx)=>deleteIndex !==idx);

      console.log(movies,remaining_movies);
      setMovies(remaining_movies);
     }
     
     
     }
     ><DeleteIcon fontSize="inherit"/>
</IconButton>}
     name={nm.name} image={nm.image} rating={nm.rating} summary={nm.summary} />))};
    </div>
      );
      
}


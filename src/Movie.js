import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { MdGrade } from "react-icons/md";
import { useState } from "react";

export function Movie({ name, image, rating, summary,deleteButton }) {
  const colour = rating >= 8 ? { color: "green" } : { color: "blue" };

  const [show, setShow] = useState(true);
  const styles = show ? { display: "block" } : { display: "none" };
  
  
  return (

    <div className="box">

      <img src={image} alt={name} />
      <div className="details">
       <div className="first_box">
       <h2>{name}</h2><IconButton aria-label="expand" color="primary"  onClick={() => { setShow(!show);}}>
       {show ? <ExpandLessIcon />:<ExpandMoreIcon />}
       </IconButton> 
       </div> 
        <p className="rating" style={colour}><MdGrade className="star" />  {rating}</p>
      </div>
      
      <p className="summary" style={styles}>{summary}</p>
     <div className="movie_actions"><Counter /><p> {deleteButton}</p></div> 
    
    </div>

  );
}

import './App.css';

import { Link, Route, Switch } from "react-router-dom";

import Button from '@mui/material/Button';
import { MovieList } from './MovieList';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function App() {
  const details=[
    {name:"Big Hero 6",image:"https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg",rating:7.8,summary:"Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro's closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes."},
    {name:"Mr Peabody and Sherman",image:"https://wallpaperaccess.com/full/749909.jpg",rating:6.8,summary:"Peabody, a beloved teacher and baseball coach, finds himself alone on the ball field. He wonders where everybody is until the bat boy, Billy Little, shows up. Billy tells him that another student, Tommy Tittlebottom, saw Mr. Peabody taking apples from the market and spread a rumour he was a thief."},
    {name:"Boss Baby",image:"https://rukminim1.flixcart.com/image/416/416/jq8dgnk0/poster/z/z/b/medium-baby-poster-the-boos-baby-cartoon-12x18-paper-print-be-original-imafc8harrywqghc.jpeg?q=70",rating:6.3,summary:"A new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator -- a wildly imaginative 7-year-old named Tim. The most unusual Boss Baby (Alec Baldwin) arrives at Tim's home in a taxi, wearing a suit and carrying a briefcase. The instant sibling rivalry must soon be put aside when Tim discovers that Boss Baby is actually a spy on a secret mission, and only he can help thwart a dastardly plot that involves an epic battle between puppies and babies."},
    {name:"Jumanji",image:"https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg",rating:6.7,summary:"A magical board game unleashes a world of adventure on siblings Peter (Bradley Pierce) and Judy Shepherd (Kirsten Dunst). While exploring an old mansion, the youngsters find a curious, jungle-themed game called Jumanji in the attic. When they start playing, they free Alan Parrish (Robin Williams), who's been stuck in the game's inner world for decades. If they win Jumanji, the kids can free Alan for good -- but that means braving giant bugs, ill-mannered monkeys and even stampeding rhinos!"},
    {name:"Hera Pheri",image:"https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",rating:8.2,summary:"Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves."},
    {name:"Up",image:"https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg",rating:8.2,summary:"Carl Fredricksen, a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house."}
  ];
  
const [movies,setMovies]=useState(details);
const [name,setName]= useState("");
  const [rating,setRating]= useState("");
  const [image,setImage]= useState("");
  const [summary,setSummary]= useState("");
  return (
    <div className="App">
   <div className="navigation">
   <Link className="link" to="/">Home</Link>
   <Link className="link" to="/movies">Movies</Link>
   <Link  className="link" to="/color-game">Color Game</Link>
   <Link className="link" to="/add-movie">Add Movie</Link>
   </div>
   
   <Switch>
   <Route path="/movies">
  


    <MovieList movies={movies} setMovies={setMovies} />
    </Route>
    <Route path="/color-game">
    <Addcolor />
    </Route>
    <Route path="/add-movie">
    <div className="Add_movie_box">
<TextField id="filled-basic" margin="normal" fullWidth  label="Name" variant="filled" value={name} onChange={(event)=>setName(event.target.value)}/>
 <TextField id="filled-basic" margin="normal"  fullWidth label="Image" variant="filled" value={image} onChange={(event)=>setImage(event.target.value)}/>
 <TextField id="filled-basic"  margin="normal"  fullWidth label="Rating" variant="filled" value={rating} onChange={(event)=>setRating(event.target.value)}/>
 <TextField id="filled-basic" margin="normal"  fullWidth label="Summary" variant="filled" value={summary} onChange={(event)=>setSummary(event.target.value)}/>
 <Button variant="contained" color="success" size="large"  fullWidth onClick={()=>{
   const newMovie={name,rating,image,summary};
    console.log(newMovie);
    setMovies([...movies,newMovie]);
 }}>Add Movie</Button>
</div>
    </Route>
    <Route path="/">
     <Home />
    </Route>
    </Switch>
    </div>
    
  );
}

function Addcolor(){
  const [color,setColor]=useState("pink");
  const styles={background:color};
  const [colorlist,setColorlist]=useState(["teal","orange","green"]);
  return(
<div>
  <input value={color} style={styles} onChange={(event)=>setColor(event.target.value)} placeholder="enter a color"/>
  <button onClick={()=>setColorlist([...colorlist,color])}> Add Color</button>
  {colorlist.map((clr)=>(<ColorBox clr={clr} />))};
</div>

  );
}
function ColorBox({clr})
{
  const styles={
    height:"25px",
    width:"250px",
    background:clr,
    marginTop:"10px"

  };
  return(
<div style={styles}></div>
  )
}
function Home(){
  return(
    
      <div className="home"><img src="https://www.neonsignsuk.com/images/big/Welcome-Friends-Neon-Sign.jpg" alt="welcome"></img></div>
    
  )
}
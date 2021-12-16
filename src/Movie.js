import { Counter } from "./Counter";
import { MdGrade } from "react-icons/md";
import { useState } from "react";

export function Movie({ name, image, rating, summary }) {
  const colour = rating >= 8 ? { color: "green" } : { color: "blue" };

  const [show, setShow] = useState(true);
  const styles = show ? { display: "block" } : { display: "none" };
  return (

    <div className="box">

      <img src={image} alt={name} />
      <div className="details">
        <h1>{name}</h1>
        <p className="rating" style={colour}><MdGrade className="star" />  {rating}</p>
      </div>
      <button onClick={() => { setShow(!show); }}>Toggle</button>
      <p className="summary" style={styles}>{summary}</p>
      <Counter />

    </div>

  );
}

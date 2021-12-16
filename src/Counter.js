import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => { setLike(like + 1); }}>👍<p>{like}</p></button>
      <button onClick={() => { setDislike(dislike + 1); }}>👎<p>{dislike}</p></button>


    </div>
  );
}

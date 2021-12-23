import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
    <IconButton aria-label="delete" color="primary" onClick={() => { setLike(like + 1); }}>
    <Badge badgeContent={like} color="primary">
   👍
</Badge>
</IconButton>
<IconButton aria-label="delete" color="error" onClick={() => { setDislike(dislike + 1); }}>
<Badge badgeContent={dislike} color="error">
   👎
</Badge>
</IconButton>
     


    </div>
  );
}

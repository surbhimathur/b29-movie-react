import { Movie } from './Movie';

export function MovieList({ details }) {
  return (
    <div className="outer-box">
      {details.map(nm => <Movie name={nm.name} image={nm.image} rating={nm.rating} summary={nm.summary} />)};

    </div>
  );
}

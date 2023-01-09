import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`/animals/${props.type}.svg`} />
      <h1>{props.name}</h1>
      <p>{props.says}</p>
    </div>
  );
}

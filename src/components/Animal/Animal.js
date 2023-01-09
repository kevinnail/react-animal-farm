import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <h1>{props.type}</h1>
      <h1>{props.says}</h1>
    </div>
  );
}

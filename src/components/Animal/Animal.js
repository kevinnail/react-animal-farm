import './Animal.css';

export default function Animal(props) {
  let audio = new Audio(`/animals/${props.type}.wav`);
  const start = () => {
    audio.play();
  };
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img onClick={start} src={`/animals/${props.type}.svg`} />
      <h1>{props.name}</h1>
      <p>{props.says}</p>
    </div>
  );
}

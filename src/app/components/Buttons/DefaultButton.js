import "./styles.css";

export default function DefaultButton({buttonText}) {
  return (
    <>
      <button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">{buttonText}</span>
      </button>
    </>
  );
}

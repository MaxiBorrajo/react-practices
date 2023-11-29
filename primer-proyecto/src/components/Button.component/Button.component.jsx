import "./Button.component.css";

export function Button({ action, label }) {
  return (
    <button onClick={action} className="mainButton">
      {label}
    </button>
  );
}

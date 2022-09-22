import { React,useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const [text,setText] = useState("");

  return (
    <>

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick} > Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick} > Convert to Lowercase</button>
      <h2>Your Text Summary</h2>
      <h3>{text.split(" ").length} Words {text.length} Chracters</h3>
      <h4>{0.008 * text.split(" ").length} Minutes Read</h4>
      <p>{text}</p>
    </>
  )
}
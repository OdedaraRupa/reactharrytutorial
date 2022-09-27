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
  const handleClear = () => {
    setText("")
  }
  const handleSelectText = (event) =>{
    let newText = document.getElementById('box');
    newText.select();
    navigator.clipboard.writeText(newText.value)
    
  }
  const removeExtraSpace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "));
  }
  const [text,setText] = useState("");

  return (
    <>

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick} > Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick} > Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear} > Clear All</button>
      <button className="btn btn-primary mx-2" onClick={handleSelectText} > Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpace} > Remove Extra pace</button>

      
      
      <h2 className="my-4">Your Text Summary</h2>
      <h3 className="my-4">{text.split(" ").length} Words {text.length} Chracters</h3>
      <h4>{0.008 * text.split(" ").length} Minutes Read</h4>
      <p>{text}</p>
    </>
  )
}
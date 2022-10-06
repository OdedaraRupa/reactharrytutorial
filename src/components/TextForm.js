import { React,useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase","success");
  }
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert("Converted to LowerCase","success");
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleClear = () => {
    setText("")
    props.showalert("Text Cleared","success");
  }
  const handleSelectText = (event) =>{
    let newText = document.getElementById('box');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showalert("Copied to Clipboard","success");
    
  }
  const removeExtraSpace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "));
  }
  const [text,setText] = useState("");

  return (
    <>
      <div className="container mb-3 py-5" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChange} id="box" rows="8" ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleupClick} > Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleloClick} > Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClear} > Clear All</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleSelectText} > Copy Text</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-2" onClick={removeExtraSpace} > Remove Extra pace</button>

        <h2 className="my-4">Your Text Summary</h2>
        <h3 className="my-4">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words {text.length} Chracters</h3>
        <h4>{0.008 * text.split(" ").length} Minutes Read</h4>
        <p>{text}</p>
      </div>
    </>
  )
}
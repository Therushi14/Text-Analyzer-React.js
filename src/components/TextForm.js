import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = '';
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    .then(() => alert("Text copied to clipboard"))
    .catch((error) => console.error("Unable to copy text: ", error));
  };

  

  const handleOnChange = (event) => {
    //console.log("Handle on change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const containerStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#333' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  };
  return (
    <>
    <div className="container"  style = {containerStyle}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={textareaStyle}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      
    </div>
    <div className="container my-2"  style = {containerStyle}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in above textBox to Preview it"}</p>
    </div>
    </>
  );
}

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

  

  const handleOnChange = (event) => {
    //console.log("Handle on change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      
    </div>
    <div className="container my-2">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

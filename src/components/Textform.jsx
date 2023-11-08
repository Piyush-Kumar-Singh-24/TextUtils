import React, { useState } from 'react';



export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase(); 
    setText(newText)
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState('')
  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === 'dark'?'gray' : 'white' }} >
        <h1 style={{color: props.mode === 'dark'?'white' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light'?'white' : 'gray', 
          color: props.mode === 'dark'?'white' : 'black' }} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white' : 'black' }}>
        <h2>your text summary </h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here" }</p>
      </div>
    </>
  )
}

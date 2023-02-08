import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to Upper Case', 'success');
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to Lower Case', 'success');
  }
  const handleClear = () => {
    let newText = ""
    setText(newText)
    props.showAlert('All Text Deleted', 'danger');
  }
  const handleSnakecase = () => {
    let DnewText = text.split("").join("_");
    let newText = DnewText.replace(/_ _/g, "   ");
    setText(newText)
    props.showAlert('Converted to Snake Case', 'success');
  }
  const handleKababcase = () => {
    let DnewText = text.split("").join("-");
    let newText = DnewText.replace(/- -/g, "   ");
    setText(newText)
    props.showAlert('Converted to Kabab Case', 'success');
  }
  const handleOnChange = (event) => {
    // console.log("Handle on Change")
    setText(event.target.value);
  }


  const [text, setText] = useState("")
  return (
    <>
      <div>
        <div className="form-group" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
          <h1>{props.headings}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} id="textBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-danger mx-2 my-2' onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleSnakecase}>Snakecase</button>
        <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleKababcase}>Kababcase</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h3>Your Text Summary</h3>
        <p> {text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} Minutes to Read </p>
        <h3>Preview</h3>
        <p> {text.length>0 ? text: "Nothing to Preview"} </p>
      </div>
    </>
  )
}

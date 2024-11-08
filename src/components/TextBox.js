import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextBox(props) {

    const [text, setText] = useState('')

    const toUpCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.myAlert('Converted to uppercase', 'success')
    }

    const toLowCase = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.myAlert('Converted to lowercase', 'success')
    }

    const clearText = ()=> {
        setText("");
        props.myAlert('Cleared all text', 'success')
    }

    const copyText = ()=> {
        navigator.clipboard.writeText(text)
        props.myAlert('Text Copied', 'success')
    }

    const copySelection = () => {
        const selection = window.getSelection()
        navigator.clipboard.writeText(selection)
        props.myAlert('Selection Copied', 'success')
    }

    const removeSpaces = ()=>{
        const newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.myAlert('Extra spaces removed', 'success')
    }

    const onChange = (e)=>{
        setText(e.target.value)
        // console.log(Text)
    }
    

    return (
        <div className='container my-3' data-bs-theme={props.mode}>
            <div className="container" data-bs-theme={props.mode}>
                <div className="mb-3" data-bs-theme={props.mode}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChange} rows="12"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={toUpCase}>To Upper</button>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={toLowCase}>To Lower</button>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={clearText}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={copyText}>Copy Text</button>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={copySelection}>Copy Selection</button>
                <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" data-bs-theme={props.mode}>
                <h2 className="summary">Text summary</h2>
                <p>words : {text.trim().length===0 ? 0 : (text.trim().split(/\s+/).length)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Characters: {text.trim().length} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reading Time: {0.008 * (text.trim().length===0 ? 0 : (text.trim().split(/\s+/).length))} </p>
                <h2>Prview</h2>
                <p>{text.length===0 ? 'Nothing to preview':text}</p>
            </div>
        </div>
    )
}

TextBox.protoType={title: PropTypes.string.isRequired}

// TextBox.defaultProps={title: "title here"}

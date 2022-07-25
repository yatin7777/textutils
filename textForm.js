import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
   let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase!", "success");
    } 
    const handleClearClick=()=>{
      let newtext='';
           setText(newtext);
           props.showAlert("text Cleared!", "success");
       }   
       
    const handleLoClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to LowerCase!", "success");
  }
  const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
   }
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
   }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text here');

  return (
    <>
    <div className='container mb-4' style={{color:props.mode==='dark'?'white':'#042743'}}>

        <h1>{props.heading}</h1>

         <div className="mb-3 my-3" >
      
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}id="MyBox" rows="8"></textarea>
        </div>
       <button disabled={text.length===0} type='button' className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to Uppercase</button>
       <button disabled={text.length===0} type='button' className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to Lowercase</button>
       <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
       <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
       <button disabled={text.length===0} type='button' className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2> Your text Summary</h2>
      <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)} words and {text.length} characters</p>
      <p>{0.008*text.split("").filter((element)=>{return element.length!==0}).length}minutes read</p>

      <h3>Preview text</h3>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>

    </div>
    </>
    
 )
    
}

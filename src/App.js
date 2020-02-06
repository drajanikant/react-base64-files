import React, { useState } from 'react';
import './App.css';
import FileBase64 from 'react-file-base64';

function App() {

  const [files, setFiles] = useState([]);

  const setValues = (files) =>{
    setFiles(files)
  }

  const getImages = () =>{
    return files.map(file => (
      <div>
      <img src={file.base64} alt={file.name} />
      <a href="#" onClick={()=>{downloadPDF(file.base64, file.name)}} >download</a>
      </div>
    ));
  }

  return (
    <div >
      <h2>Image to string</h2>
      <hr />
      {/* <input type="file" onChange={imgSelect}></input>
      <img src={`data:text/html; charset=UTF-8;base64,${imageUrl}`}  alt="Some image" /> */}
      <FileBase64
        multiple={ true }
        onDone={ setValues } />
   
   { getImages() }
    </div>


  );
}

/**
 * Creates an anchor element `<a></a>` with
 * the base64 pdf source and a filename with the
 * HTML5 `download` attribute then clicks on it.
 * @param  {string} base64 data
 * @param  {string} file name 
 * @return {void}     
 */
function downloadPDF(pdf, _fileName) {
  const linkSource = pdf;
  const downloadLink = document.createElement("a");
  const fileName = _fileName;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}
export default App;

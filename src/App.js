import React, { useState } from 'react';
import Form from "./components/Form";
import HtmlPage from "./components/HtmlPage";
import './App.css';

function App() {

  const [formdata, setformdata] = useState(
    {
      firstname:"",
      lastname:"",
      

    }
  );

  const [fdata,setfdata] = useState({
    firstname:"",
    lastname:""
  });

  const [Toshow,setToshow]= useState(false);


  return (
    <div>
       <Form formdata={formdata} setformdata={setformdata} setfdata={setfdata} Toshow={Toshow} setToshow={setToshow}/>

       <HtmlPage fdata={fdata} setfdata={setfdata} Toshow={Toshow} setToshow={setToshow}/>

    </div>
  );
}

export default App;

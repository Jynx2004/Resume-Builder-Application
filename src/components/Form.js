import React from "react";

function Form(props){

    let formdata=props.formdata;
    let setformdata=props.setformdata;
    let setfdata=props.setfdata;
    let Toshow=props.Toshow;
    let setToshow=props.setToshow;

    function Chandler(e){

        const {name,value}=e.target;

        setformdata((prevformdata) => {
            return({
                ...prevformdata,
                [name]:value
              }  
            )
        })


        



    }

    function ClHandler(){

        setfdata(formdata);
        setToshow(true);



    }



    console.log(formdata);


    return(
        <div>

            <input type="text" name="firstname" onChange={Chandler}/>

            <br/>
            <br/>
            <br/>

            <input type="text" name="lastname" onChange={Chandler}/>

            <br/>

            <br/>

            <br/>

            <button onClick={ClHandler}>Generate Resume</button>






        </div>






    ) 

}


export default Form;
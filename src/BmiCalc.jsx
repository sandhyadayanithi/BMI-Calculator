import React,{useState,useRef} from 'react';
import './BmiCalc.css';

function BmiCalc(){

  const input1=useRef();
  const input2=useRef();

  const [result,setResult]=useState('');
  const [bmi,setBmi]=useState(0);
  const [status,setstatus]=useState(false);

  function handleClick(){
    const height=input1.current.value/100;
    const weight=input2.current.value;

    if (height===''|| weight===''){
      alert("Enter height and weight to continue!");
      return;
    }

    const calc=(weight/(height*height));
    const bmi=calc.toFixed(2);
    if (bmi<=18.4) {
      setResult('Underweight');
    }
    else if (bmi<=24.9) {
      setResult('Healthy Weight');
    }
    else if (bmi<=29.9){
      setResult('Overweight');
    }
    else{
      setResult('Obese');
    }
    setBmi(bmi);
    setstatus(true);
    input1.current.value='';
    input2.current.value='';
  }

  return(
    <div className='main-box'>
      <h1>BMI Calculator</h1>
      <p>Height (cm)</p>
      <input ref={input1} placeholder='eg. 160'></input>
      <p>Weight (kg)</p>
      <input ref={input2} type='dropdown' placeholder='eg. 55'></input>
      <button className='calc-btn' onClick={()=>handleClick()}>Calculate</button>
      {status?<p className='result'>{`Your BMI is: ${bmi}: You are ${result}!`}</p>:''}
    </div>
  );
}

export default BmiCalc;
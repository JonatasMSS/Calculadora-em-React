
import { Container, MainContainer, Row } from "./styles";
import { Input } from "./components/input";
import { ButtonCont } from "./components/button";
import { useState } from "react";



function App() {

  const [currentNumber,SetNumberToDisplay] = useState("0");
  const [tempNumber, setTempNumber] = useState('0');
  const [operation, setOperation] = useState('none');
  const handleAddNumberToDisplay = (num) =>{
    SetNumberToDisplay(prev => `${prev === '0'? num : `${prev}${num}`}`)
  }
  const handleClearDisplay = () => {
    SetNumberToDisplay('0');
    setTempNumber('0');
  }
  const handleSumNumber = () =>{
    setOperation('+');
    if(tempNumber === '0') {
      setTempNumber(currentNumber);
      SetNumberToDisplay('0');
    }
    else{
      const sum = Number(tempNumber) + Number(currentNumber);
      setTempNumber(String(sum));
      SetNumberToDisplay('0');
    }
  }
  const handleMinusNumber = () => {
    setOperation('-');
    if(tempNumber === '0') {
      setTempNumber(currentNumber);
      SetNumberToDisplay('0');
    }
    else{
      const sum = Number(tempNumber) - Number(currentNumber);
      setTempNumber(String(sum));
      SetNumberToDisplay('0');
    }
  }
  const handleMultiplyNumber = () =>{
    setOperation('*');
    if(tempNumber === '0') {
      setTempNumber(currentNumber);
      SetNumberToDisplay('0');
    }
    else{
      const sum = Number(tempNumber) * Number(currentNumber);
      setTempNumber(String(sum));
      SetNumberToDisplay('0');
    }
  }
  const handleDivideNumber = () => {
    setOperation('/');
    if(tempNumber === '0') {
      setTempNumber(currentNumber);
      SetNumberToDisplay('0');
    }
    else{
      const sum = Number(tempNumber) / Number(currentNumber);
      setTempNumber(String(sum));
      SetNumberToDisplay('0');
    }
  }
  const handleShowResult = () => {
    if(operation === "+"){
      const sum = Number(tempNumber) + Number(currentNumber); 
      SetNumberToDisplay(String(sum));
      setTempNumber('0');
    }
    else if( operation === "-"){
      const sum = Number(tempNumber) - Number(currentNumber); 
      SetNumberToDisplay(String(sum));
      setTempNumber('0');
    }
    else if( operation === "*"){
      const sum = Number(tempNumber) * Number(currentNumber); 
      SetNumberToDisplay(String(sum));
      setTempNumber('0');
    }
    else{
      const sum = Number(tempNumber) / Number(currentNumber); 
      SetNumberToDisplay(String(sum));
      setTempNumber('0');
    }
  }
  console.log(tempNumber);
  return (
  <MainContainer>
    <Container>
      <Row>
        <Input valueToDisplay={currentNumber}/>
      </Row>
      <Row>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('7')} text={"7"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('8')}  text={"8"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('9')}  text={"9"}/>
        <ButtonCont   onClick={() => handleDivideNumber()} flexGrown={1.03} primaryCond={true} text={"/"}/>
      </Row>
      <Row>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('4')}  text={"4"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('5')}  text={"5"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('6')}  text={"6"}/>
        <ButtonCont   onClick={() => handleMultiplyNumber() }flexGrown={0.98}primaryCond={true} text={"*"}/>
      </Row>
      <Row>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('1')}  text={"1"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('2')}  text={"2"}/>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('3')}  text={"3"}/>
        <ButtonCont  onClick={() => handleSumNumber()} flexGrown={0.88}primaryCond={true} text={"+"}/>
      </Row>
      <Row>
        <ButtonCont  onClick={() => handleAddNumberToDisplay('0')} flexGrown={1} text={"0"}/>
        <ButtonCont onClick={() => handleAddNumberToDisplay('.')}flexGrown={1.2} text={"."}/>
        <ButtonCont  onClick={()=> handleClearDisplay()} text={"C"}/>
        
        <ButtonCont  onClick={() => handleMinusNumber()}flexGrown={1.06}primaryCond={true} text={"-"}/>
      </Row>
      <Row>
        <ButtonCont onClick={handleShowResult} primaryCond={true} text={"="}/>
      </Row>

    </Container>
  </MainContainer>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setIsShowParagraph(prevIsShowParagraph => !prevIsShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShowParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;

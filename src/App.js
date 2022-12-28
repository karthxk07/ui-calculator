import React from 'react';
import Header from './components/header';
import Calculator from './components/calculator';
import Background from './components/background';


function App() {
  return (
     <div className=' h-screen w-full grid grid-cols-1 content-center'>
      <Background/>
      <Calculator/>
      </div>
   
  
  );
}

export default App;

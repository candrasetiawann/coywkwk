import { useState } from 'react';

function Modal(){
  const [isCorrect,setIsCorrect] = useState(false);
  const [buttonPosition,setButtonPosition] = useState({top:60,left:50});
  
  const handleYesButtonClick = () =>{
    setIsCorrect(true);
  }
  
  const handleNoButtonClick = () => {
    const posX = Math.floor(Math.random() * (70 - 20 + 1) + 20);
    const posY = Math.floor(Math.random() * (70 - 20 + 1) + 20)
    setButtonPosition({x:posX,y:posY})
  }
  
  return (
    <div className="bg-white flex px-6 py-4 flex justify-center" >
    {isCorrect ? (<p className="text-center">kan udah dibilang :) 💪</p>) : (
    <div className="">
      <button onClick={handleYesButtonClick} className="shadow-lg py-2 px-4 bg-indigo-500 text-white rounded-md text-sm font-semibold py-2 px-4 rounded mr-2">Iyah</button>
      <button className="shadow-lg py-2 px-4 bg-indigo-500 text-white rounded-md text-sm font-semibold py-2 px-4" style={{position:'absolute',left:`${buttonPosition.y}%`,top:`${buttonPosition.x}%`}} onClick={handleNoButtonClick}>Gak</button>
    </div>
    )}
    </div>
  )
}

function App() {
  
  return (
    <main className="bg-sky-400 min-h-screen py-6 sm:py-12 ">
      <div className=" bg-white mx-auto my-auto h-96 w-3/4  rounded-md shadow-lg ">
        <h1 className="text-center font-bold pt-20 pb-16 text-2xl">Candra Ganteng </h1>
        <h1 className="text-center font-bold text-2xl pb-8">Bener kan ?</h1>
       <Modal/>
      </div>
      
    </main>
  )
}

export default App;

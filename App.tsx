import React from 'react';
import './App.css';

function App() {

  const [name,setNmae]=React.useState('react')
  const update=(value:any)=>{
    setNmae(value);
  } 
  
  
  return (
    <div className="App">{name}
      <button onClick={()=> update("js")}>update</button>

    </div>
  );
}

export default App;

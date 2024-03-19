import {useEffect, useState} from 'react'
import './App.css'
export default function App() {

   {/* __________________________________________________Setting Variables________________________________________________________________________ */}
  
  const [lenght,setLenght] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");

   {/* _______________________________________________Password Generator____________________________________________________________ */}

  
  const passwordGenerator = () =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+= "!@#$%^&*()_+";
    for(let i=1;i<=lenght;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char); 
    }
    setPassword(pass);
  }


   {/* _______________________________________________________Calling Password Genreator__________________________________________________________________ */}

  
  useEffect(() => {passwordGenerator()}, [lenght,numberAllowed,characterAllowed]);

   {/* _____________________________________________________________________________________________________________________________ */}

  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 px-4 my-8'>
    <h1 className='text-center text-3xl mb-3 pt-5 text-white'>  Password Generator</h1>
      <div className='flex shadow rounded-lg overflew-hidden mb-4'> 

         {/* _____________________________________________________________________________________________________________________________ */}

        
        <input type = "text" value={password} className='outline-none w-full py-1 px-3 mb-5 rounded'     
 placeholder='Password' readOnly></input>


         {/* _________________________________________________________Button Function_________________________________________________________________ */}

        
          <button className=' py-1 px-3 mb-7 rounded ml-4'style={{background:"#7EEFF3"}} onClick={() => {
              navigator.clipboard.writeText(password).then(() => {
      window.alert('Password copied to clipboard : '+(password)).catched(err => {
        window.alert('Failed to copy password to clipboard : '+(err))
      });
    })}}>Copy</button>

        
      </div>

       {/* _____________________________________________________________________________________________________________________________ */}

      
        <div className='text-sm gap-x-2'>
        <div className='items-center gap-x-1'> 

          
          {/* _________________________________________________________Taking Input Value________________________________________________________________ */}

          
        <input type= "range" min={6} max={50} value={lenght} className='cursor-pointer mb-5' onChange={(e) => {setLenght(e.target.value)}}></input>
        <label className='text-white ml-3 mr-7'>Lenght : {lenght}</label>

          
          <input type="checkbox" className='cursor-pointer' id="numberInput" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev) => !prev)}}></input>
          <label className='text-white ml-1'>Numbers</label>

          
            <input type="checkbox" className='ml-2' defaultChecked={characterAllowed} onChange={()=> {setCharacterAllowed((prev) => !prev)}}></input>            <label className='text-white ml-1'>Character</label>     

          
        </div>    
        </div>
      </div>
    </>

  )
}


 {/* _____________________________________________________________________________________________________________________________ */}
import React, { useState } from 'react';
interface Gndrprops{
    inputValue?: string
    gender?: string
}

enum Gender{
    MALE = "male",
    FEMALE = "female"
}
const objGnder: Gndrprops = {
    inputValue: "",
    gender: "",
   
 }

const App =() => {
   const [data, setData]= useState(objGnder)


const handleSubmit = ()=> {
  


}

return(
    <>
   <div className='form'>
    <h1>Task 5</h1>
    <form>
    <input type='text' name='gender' onChange={(e: any)=> objGnder.inputValue=e.target.value}   placeholder='Enter value'/>
    <input type='radio' name='gender' onChange={(e)=>console.log(e.target.value)}   placeholder='Enter value'/>
    <input type='radio' name='gender' onChange={(e)=>console.log(e.target.value)}   placeholder='Enter value'/>
    
        
       <button onClick={handleSubmit}>Submit</button>
      
    
      </form>
      
   </div>
   {/* {Object.keys(data).map((item)=> (
        <div key={item}>
            {item}: {data[item as keyof Gndrprops]}
        </div>
      ))} */}
   </>
      )}
export default App;
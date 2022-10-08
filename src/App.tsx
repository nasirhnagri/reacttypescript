import React, { useState } from 'react';
// import SmBtn from './components/buttons/smBtn';
// import Input from './components/TypeScriptClass/Input';

interface Gndrprops{
    male?: string
    female?: string
}

enum Gender{
    MALE = "male",
    FEMALE = "female"
}
const objGnder: Gndrprops = {
    // male : "",
    // female:""
 }

const App =() => {
    const[inputVlaue, setInputVlaue]=useState<string>("")
    const[gender, setGender]=useState<Gender>()
    const[data, setData] = useState(objGnder)

const handleSubmit = (e:any)=> {
    e.preventDefault()
    objGnder[inputVlaue as keyof Gndrprops] = gender
    setData(objGnder);
    setInputVlaue("")
// console.log(objGnder)

}

return(
    <>
   <div className='form'>
    <h1>Task 5</h1>
    <form>
    <input value={inputVlaue} onChange={(e) => 
        setInputVlaue(e.target.value)
         } placeholder='Enter value'/>
       <button onClick={(e)=> {
        e.preventDefault()
        setGender(Gender.MALE)} } >MALE</button>
       <button onClick={(e)=> { 
        e.preventDefault()
        setGender(Gender.FEMALE)}} >Female</button>
       <button onClick={handleSubmit}>Submit</button>
      
      {/* {gender} */}
      </form>
      
   </div>
   {Object.keys(data).map((item)=> (
        <div>
            {item}: {data[item as keyof Gndrprops]}
        </div>
      ))}
   </>
      )}
export default App;
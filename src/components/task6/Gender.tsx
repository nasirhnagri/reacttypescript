import React,{ useState} from 'react'
interface Genderprop{
    MALE?: string,
    FEMALE?: string
}
enum Gender {
  MALE = "male",
  FEMALE = "female",
}
const genderOBj: Genderprop ={
// male: "male"
}

 const Gtask=() => {
  const [inputValue, setInputValue]= useState<string>("")
  const [gender, setGender] = useState<string>()
  const [data, setData] = useState(genderOBj)

  const handleChange = (e: any)=> {
    e.preventDefault()
    genderOBj[inputValue as keyof Genderprop] = gender
    setData(genderOBj);
    setInputValue('')
    console.log(genderOBj)
  }

  return (
    <>    
    <div>
      <form>
        <h3>task6</h3>
        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Enter your task'/>
        <button onClick={(e)=> {
          e.preventDefault()
          setGender(Gender.FEMALE)}}>Male</button>
        <button
        onClick={(e)=> {
          e.preventDefault()
          setGender(Gender.FEMALE)}}
        >FeMale</button>
        <button onSubmit={handleChange}>Submit</button>
        </form>
    </div>
    {Object.keys(data).map((item)=>(
  <div>
    {item}: {data [item as keyof Genderprop]}
  </div>
))}
    </>

  )}
export default Gtask;



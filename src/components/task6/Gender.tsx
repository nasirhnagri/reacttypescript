import React from 'react'
interface genderprop{
    name: string
}
const genderOBj ={
male: "male"
}
enum Gender {
    MALE = "male",
    FEMALE = "female"
}
 const Gtask=()=> {

  return (
    <div>
        
        <button>Male</button>
        <button>FeMale</button>
    </div>
  )
}
export default Gtask;
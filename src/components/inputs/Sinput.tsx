interface InputProps {
  placeholder: string,
   text?: string,
   value?: string,
   setMvalue:string,
   setTaskkey:React.Dispatch<React.SetStateAction<string>>
}


const Input = (props: InputProps)=> {
    const {text, value, setTaskkey,setMvalue, placeholder} = props
   
    return(
        <>
        <input
        placeholder={placeholder}
        onChange={(e)=> setTaskkey(e.target.value)}
        type={text} 
         
        />
        </>
    )

}
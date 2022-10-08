// // //enum --> direct --> 0 1 2 3
// // //enum -> values

// // // import { get } from "http";

// // // enum Gander {
// // //     Male = "male",
// // //     Female = "Female",
// // // }

// // // enum Size {
// // //     Small,
// // //     Medium,
// // //     Large,
// // // }

// // // get OBject values and keys
// // import React, { useState } from 'react';
// // import './App.css';
// // import CustomButton from './components/buttons/Button';
// // import Input from './components/inputs/Input';
// // import Tates from './components/useState/UseState';
// // import {Varient, SizeButton,SizeInput} from './interface'

// // // interface persons{
// // //     name: string,
// // //     age: number
// // // }

// // function App() {
// //     const [key, setKey] = useState("")
// //     const [value, setValue] = useState("")
// //     // console.log(key, value, )
// //     const persons = {
// //         name: "nasir",
// //         age: 22
// //     }

// //     // console.log(Object.keys(persons))
// //     // console.log(Object.values(persons))
// //     const handlChange= (event: string)=> {
// //     console.log(event)
// //         return event;
// //     }
    
// //     return (
// //         <>
// //         {/*<h1>Custiom Button</h1>
// //          <CustomButton onclick={()=> console.log("first BUTTON")} size={SizeButton.SMALL}
// //         border='none'text='First'
// //         color={Varient.ERROR} />
        
// //         <CustomButton onclick={()=> console.log("second BUTTON")} size={SizeButton.MEDIUM}
// //         border='none'text='Second'
// //         color={Varient.PRIMARY} />
// //         <label></label>
// //       <CustomButton onclick={()=> console.log("third BUTTON")} size={SizeButton.LAGRE}
// //         border='none'text='Second'
// //         color={Varient.SECONDARY} />
// //         <br /> */}
// //         <div className='task3'>
// //        <h2>Task 4</h2>
// //         <Input 
// //         onChange={(event) => handlChange(event.target.value)}
// //          size={SizeInput.MEDIUM} label="key name "/>
// //         <Input onChange={(event) => handlChange(event.target.value)} size={SizeInput.MEDIUM} label="value  "/>
// //         <br />
// //         <br />
// //         <div className='btnClass'>
// //         <CustomButton onclick={()=> console.log("mkkm") } size={SizeButton.SMALL}
// //         border='none'text='Second'
// //         color={Varient.PRIMARY} />
// //         </div>
// //         </div>
// //         <input onChange={(e) => setKey(e.target.value)}/>
// //         <input onChange={(e) => setValue(e.target.value)}/>
// //         <Tates/>
// //         </>
// //     );
// // }

// // // export default App;
// // ============================================================
// // import { useState } from "react";
// // import Input from "./component/Button";
// // import {
// //   ButtonSize,
// //   Buttontext,
// //   Person,
// //   Persondetails,
// // } from "./component/modules";
// // import { useState } from "react";
// // import Input from "./component/Button";
// // import { ButtonSize, Buttontext, persion, persionObject } from "./component/modules";
// // function App() {
// //   const [inputprop, setInputprop] = useState<string>("");
// //   const [inputdata, setInputdata] = useState<string>("");
// //   const [data, setData] = useState(Persondetails);
// //   const handleSubmitobject = () => {
// //     // console.log(inputprop, inputprop, "");
// //     Persondetails[inputprop] = inputdata;
// //     setData(Persondetails);
// //     setInputprop("");
// //     setInputdata("");
// //   };
// //   return (
// //     <div className="App">
// //       <div style={{ display: "flex" }}>
// //         <Input
// //           inputprop={inputprop}
// //           setInputprop={setInputprop}
// //           placeholder="key  "
// //           label={Buttontext.SamaiSmall}
// //           size={ButtonSize.SMALL}
// //         />
// //         <Input
// //           inputprop={inputdata}
// //           setInputprop={setInputdata}
// //           placeholder="value "
// //           label={Buttontext.SamiLArge}
// //           size={ButtonSize.MEDIUM}
// //         />
// //       </div>
// //       {Object.keys(data).map((item) => {
// //         return (
// //           <div key={item}>
// //             {item as keyof Person} :{data[item]}
// //           </div>
// //         );
// //       })}
// //       <br />
// //       <button onClick={() => handleSubmitobject()}>submit</button>
// //     </div>
// //   );
// // }
// // export default App;
// // ================================================
// const App = () => {
//   const [inputprop , setInputProp] = useState<string>("")
//   const [inputData , setInputData] = useState<string>("")
//   const [data , setData] =  useState(persionObject)
// const handelsubmit =()=>{
//   console.log(inputprop,inputData)
//   persionObject[inputprop]=inputData
//   setData(persionObject)
//   setInputData("")
//   setInputProp("")
// }
//   return (
//     <div className="App">
//       <div style={{ display: "flex" }}>
//         <Input
//         inputprop={inputprop}
//         setInputProp={setInputProp}
//           placeholder="key  "
//           label={Buttontext.SamaiSmall}
//           size={ButtonSize.SMALL}
//         />
//         <Input
//         inputprop={inputData}
//         setInputProp={setInputData}
//           placeholder="value "
//           label={Buttontext.SamiLArge}
//           size={ButtonSize.MEDIUM}
//         />
//       </div>
//       <button onClick={handelsubmit}>submit</button>
//       {Object.keys(data).map((item) =>{
//         return(
//           <div key={item}>
//             {item as keyof persion}: {data[item]}
//           </div>
//         )
//       })}
//     </div>
//   );
// };
// export default App;
// // ============================================================
// import { ButtonSize, ButtonVarient } from "./modules";
// interface Props {
//   label?: string;
//   size: ButtonSize;
//   placeholder: string;
//   inputprop?: string;
//   setInputProp: React.Dispatch<React.SetStateAction<string>>;
// }
// const Input = (props: Props) => {
//   const { label, size, placeholder, inputprop, setInputProp } = props;
//   const buttonVSize = () => {
//     switch (size) {
//       case ButtonSize.SMALL:
//         return "100px";
//       case ButtonSize.MEDIUM:
//         return "200px";
//       case ButtonSize.LARGE:
//         return "300px";
//       default:
//         break;
//     }
//   };
//   const buttonHeight = () => {
//     if (size === ButtonSize.SMALL) return "100px";
//     if (size === ButtonSize.MEDIUM) return "200px";
//     if (size === ButtonSize.LARGE) return "300px";
//   };
//   return (
//     <form>
//       <input
//         onChange={(e) => setInputProp(e.target.value)}
//         value={inputprop}
//         placeholder={placeholder}
//         style={{
//           fontSize: "33px",
//           width: buttonVSize(),
//           height: buttonHeight(),
//           padding: "2px",
//           backgroundColor: "blue",
//         }}
//       />
//       <label>{label}</label>
//     </form>
//   );
// };
// export default Input;





// // 3:52
// // ==================================
// // export enum ButtonSize {
// //   SMALL = "200px",
// //   MEDIUM = "300px",
// //   LARGE = "400px",
// // }
// // export enum ButtonHeight{
// //   SMALL = "200px",
// //   MEDIUM = "300px",
// //   LARGE = "400px",
// // }
// // export enum ButtonVarient {
// //   ERROR = "red",
// //   PRIMEARY = "blue",
// //   SECONDRY = "gray",
// // }
// // export enum Buttontext {
// //   SamaiSmall = "object  key",
// //   SamiLArge = "object value",
// //   SamiSecondry = "large",
// // }
// // export interface persion{
// //   [name:string] :string
// // }
// // export const persionObject:persion ={
// //   name:"musiabe hussain"
// // }

export {}
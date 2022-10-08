// import React from 'react'
// import { SizeButton, Varient} from '../../../interface';


// interface Buttons {
// title: string,
// size?: SizeButton,
// varint?: Varient,
// onClick: ()=> void,
// }


//  const CustomButton = (props: Buttons)=> {
//     const {title,size, varint,onClick} = props
//     // ==========================btnWidth===============================
//     // const btnWidth = ()=> {
//     //     if()
//     // }

//     // ==========================heightButton===============================
//     const heightButton = ()=> {
//     if(size === SizeButton.SMALL){
//         return "40px";
//     }else if(size === SizeButton.MEDIUM){
//         return "60";
//     }else if(size === SizeButton.LAGRE){
//         return "80"
//     }else{
//         return "100"
//     }
//     }
//     const bgColor = ()=> {
//         if(varint === Varient.ERROR){
//             return "green"
//         }else{
//             return "red"
//         }
//     }
//   return (
//     <button style={{
//         width:size && size === SizeButton.MEDIUM? "60px": 
//         size === SizeButton.LAGRE? "70": 60,
//         // width: btnWidth(),
//         height: heightButton(),
//         backgroundColor: bgColor()
//     }} onClick={onClick}>{title}</button>
//   )
// }
// export default CustomButton;
export {}
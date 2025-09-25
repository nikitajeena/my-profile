
import "./component.css"

type ButtonPropsType  = {
    text: string;
    handleOnclick: () => void;
}


export default function Button({text, handleOnclick} : ButtonPropsType){
    return <>
   
    <button className="button" onClick={() =>  handleOnclick()} >{text}</button>
    </>
}
import { useContext } from "react";
import { DataContext } from "../../App";
import './header.css'

export default function Header() {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <div className="headerbody">
      <img src={data.image} height={100}/>
      <h1>{data.headTitle}</h1>
      <div>
        <p>{data.headDes}</p>
      </div>
      
    </div>
  )
}

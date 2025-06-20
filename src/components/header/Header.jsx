import './header.css'
import { data } from "../../data";
export default function Header() {
 
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

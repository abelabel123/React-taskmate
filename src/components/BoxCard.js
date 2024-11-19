import { useState } from "react"
import "./BoxCard.css";
export  const BoxCard = ({result, children}) =>  {
    const [show, setshow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
    <div className={`box ${result}`}>
        {children}
      
    <button onClick={() => setshow(!show)} className="Hide">Hide</button>
    </div>
    </div>
    
  )
}

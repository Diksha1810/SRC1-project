  
import chinese1 from "../json/chinese.json";
import { useState } from "react";

import { Link } from "react-router-dom";
function Chinese() {

const[data,setData] = useState(chinese1)
console.log(data,"data")
  return (
    <>
    {
data.map((item)=>{
  return ( 
<div className="jumbotron jumbotron-fluid d-inline-flex ">

    < div class="card ad  mr-3" style={{width: "20rem",height:"35rem" }} >
<div Key={item.id}>
<img class="card-img-top img2" src={item.img} alt="Card image" />
<div class="card-body ">
<h4 class="card-title">{item.name}</h4>
<p class="card-text">{item.price}</p>




<Link to="#" class="btn btn-primary">Order here</Link>

</div>
</div >

  </div>

  </div>
  )
})
    }


    </>
  )
}
export default Chinese;
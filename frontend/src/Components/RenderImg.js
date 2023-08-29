import React, { useState, useEffect } from "react";
import axios from "axios";
const RenderImg = () => {
  const [fetchImgData,setFetchImgData] = useState([])
  const getData = async ()=>{
    const baseUrl = "http://localhost:5050/ftchImg"
    const resp = await axios.get(baseUrl,{mode:"cors"})
    console.log(resp)
    setFetchImgData(resp.data.data)
  }
useEffect(()=>{
  getData();
},[])
  return (
    <div>
      {
        fetchImgData.length>0?fetchImgData.map(ele=>(
          <img src={ele.imgLink} />
        )):""
      }
      {/* <p>Tessting connection</p> */}
    </div>
  )
}

export default RenderImg
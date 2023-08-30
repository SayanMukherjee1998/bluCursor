import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonCard from "./CommonCard/CommonCard";
const RenderImg = () => {
  /**
   * Main Functional component which will render all the images
   */
  const [fetchImgData, setFetchImgData] = useState([]);
  const getData = async () => {
    /**
     * function to get the data from the api and store it in state variable
     */
    const baseUrl = "http://localhost:5050/ftchImg";
    const resp = await axios.get(baseUrl, { mode: "cors" });
    console.log(resp);
    setFetchImgData(resp.data.data);
  };
  /**
   * useEffect to get the data on firts render
   */
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="imgStyle">
      {fetchImgData.length > 0
        ? fetchImgData.map((ele, index) => (
            <CommonCard key={index} imgLink={ele.imgLink} />
          ))
        : ""}
    </div>
  );
};

export default RenderImg;

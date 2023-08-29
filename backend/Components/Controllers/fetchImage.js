const axios = require("axios");

const getImg = async () => {
  const baseUrl = "https://images-api.nasa.gov/search?q=moon";
  const resp = await axios.get(baseUrl);
  return(resp.data.collection.items);
};
const FilterImg = (fullData) => {
  const arrObj = []
    // console.log(fullData)    
    fullData.map(ele=>{
      if(ele.links){
        arrObj.push({"imgLink" : ele.links[0]?.href})

      }
    })
    return arrObj
};
const FetchImgController = async (req, res) => {
  try {
    const fullData = await getImg();
    const FilteredData =await FilterImg(fullData);

    // console.log(FilteredData)
    res.status(200).json({success:true,message:"Full Data received",data:FilteredData})
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Error Occured" });
  }
};

module.exports = FetchImgController;

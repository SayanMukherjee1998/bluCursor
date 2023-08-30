const axios = require("axios");

const getImg = async () => {
  /**
   * This function will receive the data from the api and return that
   */
  const baseUrl = "https://images-api.nasa.gov/search?q=moon";
  const resp = await axios.get(baseUrl);
  return resp.data.collection.items;
};
const FilterImg = (fullData) => {
  /**
   * This function will filter the image links from the raw data and return the filtered Data
   */
  const objKey = "imgLink";
  const arrObj = [];
  fullData.map((ele) => {
    if (ele.links) {
      arrObj.push({ objKey: ele.links[0]?.href });
    }
  });
  return arrObj;
};
const FetchImgController = async (req, res) => {
  /**
   * Main function that handles the request and response
   */
  try {
    const fullData = await getImg();
    const FilteredData = await FilterImg(fullData);
    const successMsg = "Full Data received";
    const FailureMsg = "Internal Error Occured";
    res
      .status(200)
      .json({ success: true, message: successMsg, data: FilteredData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: FailureMsg });
  }
};

module.exports = FetchImgController;

import React from "react";
import Img from "./Img";
import Video from "./Video";
import Details from "./Details";

const ApodData = (props) => {
  const { apodData } = props;

  return (
    <div className="apod-data">
      {apodData.media_type == "image" ? (
        <Img url={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </div>
  );
};

export default ApodData;

import React from "react";

const Details = (props) => {
  const { title, date, copyright, explanation } = props.apodData;
  return (
    <div>
      <h2>{title}</h2>
      <div className="detail-row">
        <p>{date}</p>
        <p>{copyright}</p>
      </div>
      <p>{explanation}</p>
    </div>
  );
};
export default Details;

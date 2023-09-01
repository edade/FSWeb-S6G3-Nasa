import React from "react";

function Header(props) {
  const { date, changeHandler } = props;
  return (
    <header>
      <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
      <input type="date" name="tarih" value={date} onChange={changeHandler} />
    </header>
  );
}
export default Header;

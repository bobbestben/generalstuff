import React from "react";

function Gif(props) {
  return (
    <div className="gif">
      <img src={props.gifSrc} alt=""></img>
    </div>
  );
}

export default Gif;

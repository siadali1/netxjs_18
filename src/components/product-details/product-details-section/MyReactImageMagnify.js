import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MyReactImageMagnify = (props) => {
  return (
    <div>
      <Zoom>
        <img
          alt="Wristwatch by Ted Baker London"
          src={require("./cover.png")}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
          }}
          {...props}
        />
      </Zoom>
    </div>
  );
};

export default MyReactImageMagnify;


export default MyReactImageMagnify;

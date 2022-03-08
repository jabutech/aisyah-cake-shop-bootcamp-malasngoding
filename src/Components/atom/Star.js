import React from "react";

export default function Star(props) {
  const { starActive } = props;
  return (
    <div>
      {(() => {
        switch (starActive) {
          case 5:
            return (
              <div className="flex">
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
              </div>
            );
          case 4:
            return (
              <div className="flex">
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
              </div>
            );
          case 3:
            return (
              <div className="flex">
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
              </div>
            );
          case 2:
            return (
              <div className="flex">
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
              </div>
            );
          case 1:
            return (
              <div className="flex">
                <img
                  src="images/star-color.png"
                  alt="star-color"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
              </div>
            );
          default:
            return (
              <div className="flex">
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
                <img
                  src="images/star-blank.png"
                  alt="star-blank"
                  className="mr-1"
                />
              </div>
            );
        }
      })()}
    </div>
  );
}

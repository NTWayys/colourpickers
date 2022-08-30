import React, { useState } from "react";

// export default ColorButton = () =>{}
export default function ColorButton(props) {
  const { colorList } = props;
  const [buttonColor, setButtonColor] = useState(colorList[0]);

  //  could be done with e.target.style.backgroundColor as well by passing e within changeColor
  const changeColor = () => {
    setButtonColor((prevState) => {
      const prevIndex = colorList.indexOf(prevState);
      const newColor = colorList[prevIndex + 1];
      if (newColor != null) {
        return newColor;
      } else {
        return colorList[0];
      }
    });
  };

  return (
    <>
      <button
        id="colorChangeButton"
        onClick={changeColor}
        style={{ background: `${buttonColor}` }}
      >
        {buttonColor}
      </button>
    </>
  );
}

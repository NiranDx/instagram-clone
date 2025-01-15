import React, { useEffect, useState } from "react";
import "../css/heartAnimetion.css"; 

const HeartAnimation = ({ isActive = false, toggleLike = () => null }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isShowHeart, setIsShowHeart] = useState(false);

  const handleDoubleClick = (e) => {
    if (!isToggled) {
      toggleLike()
      setIsShowHeart(true)
      setIsToggled(pre => !pre);
    }
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (isShowHeart) {
      setTimeout(() => {
      setIsShowHeart(false)
      }, 2000);
    }
  }, [isShowHeart])

  useEffect(() => {
    if (isToggled) {
      setTimeout(() => {
      setIsToggled(pre => !pre);
      }, 1000);
    }
  }, [isToggled])

  return (
    <div id="container-heart-animation" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} onDoubleClickCapture={handleDoubleClick}>
      <input
        id="toggle-heart"
        type="checkbox"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        style={{ display: "none" }}
      />
      <label htmlFor="toggle-heart"> {isShowHeart||!true ? "❤" : ""}</label>
    </div>
  );
};

export default HeartAnimation;

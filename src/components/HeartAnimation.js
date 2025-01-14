import React, { useEffect, useState } from "react";
import "../css/heartAnimetion.css"; // Import your CSS

const HeartAnimation = ({ isActive = false, toggleLike = () => null }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isShowHeart, setIsShowHeart] = useState(false);

  // Toggle heart animation
  const handleDoubleClick = () => {
    setIsToggled(!isToggled);
    if (!isToggled) {
      setIsShowHeart(true)
      toggleLike()

    }
  };

  useEffect(() => {
    if (isShowHeart) {
      setTimeout(() => {
        setIsShowHeart(false)
      }, 1000);
    }
  }, [isShowHeart])
  // if(!isActive) return null
  return (
    <div id="container-heart-animation" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} onDoubleClick={handleDoubleClick}>
      <input
        id="toggle-heart"
        type="checkbox"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        style={{ display: "none" }}
      />
      {/* <label htmlFor="toggle-heart">❤</label> */}
      <label htmlFor="toggle-heart"> {isShowHeart ? "❤": ""}</label> 
    </div>
  );
};

export default HeartAnimation;

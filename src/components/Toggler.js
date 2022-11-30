import { useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Switch from "react-switch";

const Toggle = ({ theme, toggleTheme }) => {
  const [isChecked, setIsChecked] = useState(true);

  const checkSetter = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    toggleTheme();
  };

  return (
    <Switch
    offColor={'#cbbdff'}
      uncheckedIcon={
        <BsFillSunFill
          size="28px"
          color="yellow"
          width="fit-content"
          height="fit-content"
        />
      }
      checkedIcon={
        <BsMoonStarsFill size="28px" width="fit-content" height="fit-content" />
      }
      onChange={checkSetter}
      checked={isChecked}
    />
  );
};

export default Toggle;

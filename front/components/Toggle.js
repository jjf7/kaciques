import { useEffect, useState } from "react";
import { setTheme } from "../utils/themes";

export default function Toggle() {
  const [checked, setChecked] = useState(true);
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setChecked(false);
    } else {
      setTheme("theme-dark");
      setChecked(true);
    }
  };
  useEffect(() => {
    if(localStorage.getItem("theme")){
      if (localStorage.getItem("theme") === "theme-dark") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }else{
      setChecked(true);
    }
  }, []);
  return ( 
    <a onClick={handleOnClick}><i className="fi-rr-opacity"></i></a>
  );
}
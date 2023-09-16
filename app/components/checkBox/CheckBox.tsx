import { useState } from "react";

export default () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
     {isChecked &&
      <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
    </ul>}
    </>
  );
};

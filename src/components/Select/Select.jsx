import { useState } from "react";
import "./select.css";

export default function Select({ options }) {
  const [isOpen, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(options[0]);

  function handleClick(e) {
    e.preventDefault();
    setOpen(!isOpen);
  }

  function setSelectTitle(e) {
    const labelElement = document.querySelector(
      `label[for="${e.target.id}"]`
    ).innerText;
    setCurrentOption(labelElement);
    setOpen(!isOpen);
  }

  return (
    <div className="select-group" style={{ marginLeft: "50px" }}>
      <button id="button" className="button" onClick={handleClick}>
        <span id="select-label">{currentOption}</span>
        <div id="arrow" className="arrow"></div>
      </button>

      <div className={`dropdown ${!isOpen && "hidden"}`} id="dropdown">
        {options.map((option) => {
          return (
            <>
              <input
                type="radio"
                id={option}
                name="where"
                value={option}
                className="option"
                onClick={setSelectTitle}
              />
              <label htmlFor={option} className="select-item">
                {option}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}

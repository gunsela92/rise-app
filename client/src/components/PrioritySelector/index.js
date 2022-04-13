import React, { useEffect, useRef, useState} from "react";
import priorities from "./priorities";
import {PrioritySelectorWrapper, SelectorIcon, SelectorItems, SelectorPlaceHolder, SelectorWrapper} from "./style";
import PropTypes from "prop-types";

const PrioritySelector = ({ onSelectPriority, selectedPriority, disabled, type }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const handleSelect = (priority) => {
    onSelectPriority(priority);
    setIsActive(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <PrioritySelectorWrapper>
      <SelectorPlaceHolder onClick={() => !disabled && setIsActive(!isActive)} disabled={disabled}>
        {selectedPriority}
        <SelectorIcon active={isActive ? 1 : 0} />
      </SelectorPlaceHolder>
      <SelectorWrapper active={isActive} ref={ref} type={type}>
        {isActive && (
          <>
            {priorities.map((priority, index) => (
              <SelectorItems key={index} onClick={() => handleSelect(priority.name)}>{priority.name}</SelectorItems>
            ))}
          </>
        )}
      </SelectorWrapper>
    </PrioritySelectorWrapper>
  );
};

PrioritySelector.propTypes = {
  onSelectPriority: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

PrioritySelector.defaultProps = {
  disabled: false,
  type: "default"
}

export default PrioritySelector;

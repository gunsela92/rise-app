import React, { useEffect, useRef, useState} from "react";
import priorities from "./priorities";
import {PrioritySelectorWrapper, SelectorIcon, SelectorItems, SelectorPlaceHolder, SelectorWrapper} from "./style";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const PrioritySelector = ({ onSelectPriority, selectedPriority, disabled }) => {
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
        <SelectorIcon icon={faAngleDown} active={isActive ? 1 : 0} />
      </SelectorPlaceHolder>
      <SelectorWrapper active={isActive} ref={ref}>
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
  disabled: PropTypes.bool
}

PrioritySelector.defaultProps = {
  disabled: false
}

export default PrioritySelector;

import React, {useCallback, useEffect, useRef, useState} from "react";
import priorities from "./priorities";
import {PrioritySelectorWrapper, SelectorIcon, SelectorItems, SelectorPlaceHolder, SelectorWrapper} from "./style";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const PrioritySelector = ({ onSelectPriority, selectedPriority }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const handleSelect = useCallback((priority) => {
    onSelectPriority(priority);
    setIsActive(false);
  }, [onSelectPriority]);

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
      <SelectorPlaceHolder onClick={() => setIsActive(!isActive)} ref={ref}>
        {selectedPriority}
        <SelectorIcon icon={faAngleDown} isActive={isActive} />
      </SelectorPlaceHolder>
      <SelectorWrapper isActive={isActive}>
        {priorities.map((priority, index) => (
          <SelectorItems key={index} onClick={() => handleSelect(priority.name)}>{priority.name}</SelectorItems>
        ))}
      </SelectorWrapper>
    </PrioritySelectorWrapper>
  );
};

PrioritySelector.propTypes = {
  onSelectPriority: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired,
}

export default PrioritySelector;

import React, {useEffect, useRef, useState} from "react";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import priorities from "../../PrioritySelector/priorities";
import PropTypes from "prop-types";
import {
  PriorityFilterIcon,
  PriorityFilterItems,
  PriorityFilterPlaceHolder,
  PriorityFilterSelectorWrapper,
  PriorityFilterWrapper
} from "./style";

const PriorityFiltering = ({ onSelectPriority, selectedPriority }) => {
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
    <PriorityFilterWrapper>
      <PriorityFilterPlaceHolder onClick={() => setIsActive(!isActive)}>
        {selectedPriority}
        <PriorityFilterIcon icon={faAngleDown} active={isActive ? 1 : 0} />
      </PriorityFilterPlaceHolder>
      <PriorityFilterSelectorWrapper active={isActive} ref={ref}>
        <PriorityFilterItems onClick={() => handleSelect("Priority (all)")}>Priority (all)</PriorityFilterItems>
        {isActive && (
          <>
            {priorities.map((priority, index) => (
              <PriorityFilterItems key={index} onClick={() => handleSelect(priority.name)}>{priority.name}</PriorityFilterItems>
            ))}
          </>
        )}
      </PriorityFilterSelectorWrapper>
    </PriorityFilterWrapper>
  );
};

PriorityFiltering.propTypes = {
  onSelectPriority: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired
}

export default PriorityFiltering;
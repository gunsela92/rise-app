import React from "react";
import {BadgeWrapper} from "./style";
import PropTypes from "prop-types";
import Priorities from "../PrioritySelector/priorities";

const PriorityBadge = ({priority}) => {
  const priValue = Priorities.find(p => p?.id === priority);

  return (
    <BadgeWrapper priority={priValue?.id}>
      {priValue?.name}
    </BadgeWrapper>
  );
};

PriorityBadge.propTypes = {
  priority: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default PriorityBadge;

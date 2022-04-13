import React from "react";
import {DataFiltersContainer, InputIcon, JobNameSearchInput} from "./style";
import PriorityFiltering from "../PriorityFiltering";
import PropTypes from "prop-types";

const DataFiltering = ({onSelectPriority, selectedPriority, searchValue, onSearchValue}) => {

  return (
    <DataFiltersContainer>
      <InputIcon />
      <JobNameSearchInput type={"text"} placeholder={"Job Name"} value={searchValue} onChange={(e) => onSearchValue(e.target.value)}/>
      <PriorityFiltering  onSelectPriority={(e) => onSelectPriority(e)} selectedPriority={selectedPriority}/>
    </DataFiltersContainer>
  );
};

DataFiltering.propTypes = {
  onSelectPriority: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchValue: PropTypes.func.isRequired
}

export default DataFiltering;

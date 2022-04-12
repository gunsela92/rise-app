import React, { useMemo, useState} from "react";
import {JobCount, JobListText, JobListTitles} from "./style";
import {useSelector} from "react-redux";
import DataTable from "./DataTable";
import DataFiltering from "./DataFiltering";
import priorities from "../PrioritySelector/priorities";

const MainContainer = () => {
  const {MOCK_DATA} = useSelector(state => state.AppReducer);
  const [selectedPriority, setSelectedPriority] = useState("Priority (all)");
  const [searchValue, setSearchValue] = useState("");

  const filterData = useMemo(() => {
    let newData = MOCK_DATA;
    let priorityValue = priorities.find(priority => priority?.name === selectedPriority)?.id || "Priority (all)";
    if (searchValue.length > 0) {
      newData = newData.filter(item => item?.title?.toLowerCase().includes(searchValue?.toLowerCase()));
      if (priorityValue !== "Priority (all)") {
        newData = newData.filter(item => item?.priority === priorityValue);
      }
    } else {
      if (priorityValue !== "Priority (all)") {
        newData = newData.filter(item => item?.priority === priorityValue);
      }
    }
    return newData;
  }, [selectedPriority, searchValue, MOCK_DATA]);

  return (
    <>
      <JobListTitles>
        <JobListText>Job List</JobListText>
        <JobCount>({filterData.length}/{MOCK_DATA.length})</JobCount>
      </JobListTitles>
      <DataFiltering mainData={filterData} selectedPriority={selectedPriority}
        onSelectPriority={(e) => setSelectedPriority(e)} searchValue={searchValue}
        onSearchValue={(e) => setSearchValue(e)}/>
      <DataTable mainData={filterData}/>
    </>
  );
};

export default MainContainer;

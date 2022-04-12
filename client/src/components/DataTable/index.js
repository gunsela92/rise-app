import React from "react";
import {ActionButtons, DataTableButton, DataTableContainer, DataTableItems} from "./style";
import {useSelector} from "react-redux";
import {faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import PriorityBadge from "../PriorityBadge";

const DataTable = () => {
  const {MOCK_DATA} = useSelector(state => state.AppReducer);

  return (
    <DataTableContainer>
      {MOCK_DATA?.length > 0 && (
        MOCK_DATA.map(item => (
          <DataTableItems key={item.id}>
            <span>{item.title}</span>
            <PriorityBadge priority={item.priority}/>
            <ActionButtons>
              <DataTableButton icon={faPen} />
              <DataTableButton icon={faTrashCan} />
            </ActionButtons>
          </DataTableItems>
        ))
      )}
    </DataTableContainer>
  );
};

export default DataTable;

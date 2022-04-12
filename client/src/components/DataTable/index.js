import React from "react";
import {ActionButtons, DataTableButton, DataTableContainer, DataTableItems} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import PriorityBadge from "../PriorityBadge";
import {deleteTodo} from "../../redux/actions";

const DataTable = () => {
  const {MOCK_DATA} = useSelector(state => state.AppReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <DataTableContainer>
      {MOCK_DATA?.length > 0 && (
        MOCK_DATA.map(item => (
          <DataTableItems key={item.id}>
            <span>{item.title}</span>
            <PriorityBadge priority={item.priority}/>
            <ActionButtons>
              <DataTableButton icon={faPen} />
              <DataTableButton icon={faTrashCan} onClick={() => handleDelete(item.id)}/>
            </ActionButtons>
          </DataTableItems>
        ))
      )}
    </DataTableContainer>
  );
};

export default DataTable;

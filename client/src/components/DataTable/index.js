import React, {useState} from "react";
import {
  ActionButtons, ButtonsWrapper, CancelEditButton,
  DataTableButton,
  DataTableContainer,
  DataTableItems, EditInputLabels, EditJobInput, EditModalContainer,
  EditModalInputs, SaveEditButton
} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import PriorityBadge from "../PriorityBadge";
import {deleteTodo, updateTodo} from "../../redux/DataReducer/actions";
import {sendMessage} from "../../redux/Notifications/actions";
import Modal from "../Modal";
import PrioritySelector from "../PrioritySelector";
import Priorities from "../PrioritySelector/priorities";

const DataTable = () => {
  const {MOCK_DATA} = useSelector(state => state.AppReducer);
  const [editValues, setEditValues] = useState({id: 0, title: "", priority: "Urgent"});
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
    dispatch(sendMessage({type: "success", message: "Job Deleted."}))
  }

  const handlePrioritySelect = (priority) => {
    setEditValues({...editValues, priority: priority})
  };

  const handleJobName = (value) => {
    setEditValues({...editValues, title: value})
  };

  const handleModal = (todo) => {
    setEditValues(todo);
    setShowEdit(true);
  }

  const getPriorityLang = (priority) => {
    return Priorities.find(p => p?.id === priority)?.name || editValues.priority;
  }

  const cancelSave = () => {
    setShowEdit(false);
    setEditValues({id: 0, title: "", priority: "Urgent"});
  }

  const saveEdit = () => {
    dispatch(updateTodo(editValues));
    dispatch(sendMessage({type: "success", message: "Job Edited."}))
    cancelSave()
  }

  return (
    <>
      <DataTableContainer>
        {MOCK_DATA?.length > 0 && (
          MOCK_DATA.map(item => (
            <DataTableItems key={item.id}>
              <span>{item.title}</span>
              <PriorityBadge priority={item.priority}/>
              <ActionButtons>
                <DataTableButton icon={faPen} onClick={() => handleModal(item)} />
                <DataTableButton icon={faTrashCan} onClick={() => handleDelete(item.id)}/>
              </ActionButtons>
            </DataTableItems>
          ))
        )}
      </DataTableContainer>
      <Modal show={showEdit} close={() => setShowEdit(false)} title={"Edit job"}>
        <EditModalContainer>
          <EditModalInputs>
            <EditModalInputs>
              <EditInputLabels>Job Name</EditInputLabels>
              <EditJobInput type="text" onChange={(e) => handleJobName(e.target.value)} value={editValues?.title}/>
            </EditModalInputs>
            <EditModalInputs>
              <EditInputLabels>Job Priority</EditInputLabels>
              <PrioritySelector onSelectPriority={handlePrioritySelect} selectedPriority={getPriorityLang(editValues?.priority)} disabled/>
            </EditModalInputs>
          </EditModalInputs>
        </EditModalContainer>
        <ButtonsWrapper>
          <CancelEditButton onClick={cancelSave}>Cancel</CancelEditButton>
          <SaveEditButton onClick={saveEdit}>Save</SaveEditButton>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};

export default DataTable;

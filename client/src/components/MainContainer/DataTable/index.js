import React, {useState} from "react";
import {
  ActionButtons,
  ButtonsWrapper,
  CancelEditButton,
  DataTableButton,
  DataTableContainer,
  DataTableItems,
  DataTableTitles,
  DeleteButtonsWrapper,
  DeleteModalIcon,
  EditInputLabels,
  EditJobInput,
  EditModalContainer,
  EditModalInputs,
  SaveEditButton
} from "./style";
import {useDispatch} from "react-redux";
import {faPen, faTrashCan, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import PriorityBadge from "../../PriorityBadge";
import {deleteTodo, updateTodo} from "../../../redux/DataReducer/actions";
import {sendMessage} from "../../../redux/Notifications/actions";
import Modal from "../../Modal";
import PrioritySelector from "../../PrioritySelector";
import Priorities from "../../PrioritySelector/priorities";
import PropTypes from "prop-types";

const DataTable = ({mainData}) => {
  const [editValues, setEditValues] = useState({id: 0, title: "", priority: "Urgent"});
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(sendMessage({type: "success", message: "Job Deleted."}));
    closeModal();
  }

  const handlePrioritySelect = (priority) => {
    setEditValues({...editValues, priority: priority});
  };

  const handleJobName = (value) => {
    setEditValues({...editValues, title: value});
  };

  const handleModal = (todo, type) => {
    setEditValues(todo);
    if (type === "edit") {
      setShowEdit(true);
    } else if (type === "delete") {
      setShowDeleteModal(true);
    }
  }

  const closeModal = () => {
    setShowEdit(false);
    setShowDeleteModal(false);
    setEditValues({id: 0, title: "", priority: "Urgent"});
  }

  const getPriorityLang = (priority) => {
    return Priorities.find(p => p?.id === priority)?.name || editValues.priority;
  }

  const saveEdit = () => {
    dispatch(updateTodo(editValues));
    dispatch(sendMessage({type: "success", message: "Job Edited."}))
    closeModal()
  }

  return (
    <>
      <DataTableContainer>
        <DataTableTitles>
          <span>Name</span>
          <span>Priority</span>
          <span>Action</span>
        </DataTableTitles>
        {mainData?.length > 0 && (
          mainData.map(item => (
            <DataTableItems key={item.id}>
              <span>{item.title}</span>
              <PriorityBadge priority={item.priority}/>
              <ActionButtons>
                <DataTableButton icon={faPen} onClick={() => handleModal(item, "edit")}/>
                <DataTableButton icon={faTrashCan} onClick={() => handleModal(item, "delete")}/>
              </ActionButtons>
            </DataTableItems>
          ))
        )}
      </DataTableContainer>
      <Modal show={showEdit || showDeleteModal} close={closeModal}
        title={showEdit ? "Edit job" : <><DeleteModalIcon icon={faCircleExclamation}/> Are you sure you want to
               delete it?</>}>
        {showEdit && (
          <>
            <EditModalContainer>
              <EditModalInputs>
                <EditModalInputs>
                  <EditInputLabels>Job Name</EditInputLabels>
                  <EditJobInput type="text" onChange={(e) => handleJobName(e.target.value)} value={editValues?.title}/>
                </EditModalInputs>
                <EditModalInputs>
                  <EditInputLabels>Job Priority</EditInputLabels>
                  <PrioritySelector onSelectPriority={handlePrioritySelect}
                    selectedPriority={getPriorityLang(editValues?.priority)} disabled/>
                </EditModalInputs>
              </EditModalInputs>
            </EditModalContainer>
            <ButtonsWrapper>
              <CancelEditButton onClick={closeModal}>Cancel</CancelEditButton>
              <SaveEditButton onClick={saveEdit}>Save</SaveEditButton>
            </ButtonsWrapper>
          </>
        )}
        {showDeleteModal && (
          <>

            <DeleteButtonsWrapper>
              <CancelEditButton onClick={closeModal}>Cancel</CancelEditButton>
              <SaveEditButton onClick={() => handleDelete(editValues?.id)}>Delete</SaveEditButton>
            </DeleteButtonsWrapper>
          </>
        )}
      </Modal>
    </>
  );
};

DataTable.propTypes = {
  mainData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DataTable;

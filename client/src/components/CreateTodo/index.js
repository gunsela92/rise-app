import React, {useState} from "react";
import {
  CreateButton,
  CreateInput,
  CreateTitle,
  CreateTodoWrapper, ErrorIcon, ErrorMessage, ErrorModalInner,
  InputContainer, InputLabels,
  InputWrapper,
  PlusIcon,
} from "./style";
import {faPlus, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import PrioritySelector from "../PrioritySelector";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/actions";
import Priorities from "../PrioritySelector/priorities";
import Modal from "../Modal";

const CreateTodo = () => {
  const [selectedPriority, setSelectedPriority] = useState("Urgent");
  const [jobName, setJobName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const saveTodo = (e) => {
    e.preventDefault()
    if (jobName.length === 0) {
      setError(true);
      return;
    }
    const priValue = Priorities.find(p => p?.name === selectedPriority);
    const data = {
      title: jobName,
      priority: priValue.id,
    }
    dispatch(addTodo(data));
  }

  return (
    <>
      <CreateTodoWrapper>
        <CreateTitle>Create New Job</CreateTitle>
        <InputContainer onSubmit={saveTodo}>
          <InputWrapper>
            <InputLabels>Job Name</InputLabels>
            <CreateInput type="text" onChange={(e) => setJobName(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
            <InputLabels>Job Priority</InputLabels>
            <PrioritySelector onSelectPriority={handlePrioritySelect} selectedPriority={selectedPriority}/>
          </InputWrapper>
          <CreateButton type="submit">
            <PlusIcon icon={faPlus} />
            Create
          </CreateButton>
        </InputContainer>
      </CreateTodoWrapper>
      <Modal show={error} close={() => setError(false)} type={"error"} title={"Error !"}>
        <ErrorModalInner>
          <ErrorIcon icon={faTriangleExclamation} />
          <ErrorMessage>Please fill job name !</ErrorMessage>
        </ErrorModalInner>
      </Modal>
    </>

  );
};

export default CreateTodo;

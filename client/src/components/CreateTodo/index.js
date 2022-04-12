import React, {useState} from "react";
import {
  CreateButton,
  CreateInput,
  CreateTitle,
  CreateTodoWrapper,
  InputContainer, InputLabels,
  InputWrapper,
  PlusIcon,
} from "./style";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import PrioritySelector from "../PrioritySelector";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/actions";
import Priorities from "../PrioritySelector/priorities";

const CreateTodo = () => {
  const [selectedPriority, setSelectedPriority] = useState("Urgent");
  const [jobName, setJobName] = useState("");
  const dispatch = useDispatch();

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const saveTodo = () => {
    const priValue = Priorities.find(p => p?.name === selectedPriority);
    const data = {
      title: jobName,
      priority: priValue.id,
    }
    dispatch(addTodo(data))
  }

  return (
    <CreateTodoWrapper>
      <CreateTitle>Create New Job</CreateTitle>
      <InputContainer>
        <InputWrapper>
          <InputLabels>Job Name</InputLabels>
          <CreateInput type="text" onChange={(e) => setJobName(e.target.value)}/>
        </InputWrapper>
        <InputWrapper>
          <InputLabels>Job Priority</InputLabels>
          <PrioritySelector onSelectPriority={handlePrioritySelect} selectedPriority={selectedPriority}/>
        </InputWrapper>
        <CreateButton onClick={saveTodo}>
          <PlusIcon icon={faPlus} />
          Create
        </CreateButton>
      </InputContainer>
    </CreateTodoWrapper>
  );
};

export default CreateTodo;

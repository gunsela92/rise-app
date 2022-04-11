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

const CreateTodo = () => {
  const [selectedPriority, setSelectedPriority] = useState("Urgent");

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <CreateTodoWrapper>
      <CreateTitle>Create New Job</CreateTitle>
      <InputContainer>
        <InputWrapper>
          <InputLabels>Job Name</InputLabels>
          <CreateInput type="text" />
        </InputWrapper>
        <InputWrapper>
          <InputLabels>Job Priority</InputLabels>
          <PrioritySelector onSelectPriority={handlePrioritySelect} selectedPriority={selectedPriority}/>
        </InputWrapper>
        <CreateButton>
          <PlusIcon icon={faPlus} />
          Create
        </CreateButton>
      </InputContainer>
    </CreateTodoWrapper>
  );
};

export default CreateTodo;

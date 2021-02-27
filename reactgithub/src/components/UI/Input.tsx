// Import libraries
import React from "react";
import styled from "styled-components";

// Import components
// Styles
const InputWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
`;

const InputElement = styled.input`
  width: ${(props) => props.theme.sizes.elementSize};
  padding: ${(props) => props.theme.paddings.elementPadding};
  margin: 1.5rem;
  border-radius: 1.5rem;
  font-size: ${(props) => props.theme.fontSize.element};
  position: relative;
  top: 0;
  right: 0;
`;

interface IStyledLabel {
  label?: string | null;
}

const LabelElement = styled.label<IStyledLabel>`
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 3rem;
  transform: translateY(-50%);
  opacity: ${(props) => (props.label && props.label ? "1" : "0")};
  transition: all 0.3s ease-in;
  color: ${(props) => props.theme.colors.red};
`;

// Interface
interface IProps extends IStyledLabel {
  placeholder: string;
  onChangeHandler: (value: string) => void;
  value: string;
}

// Component
const Input: React.FC<IProps> = ({
  placeholder,
  onChangeHandler,
  value,
  label,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(event.target.value);
  };

  console.log("Label: ", label ? true : false);

  return (
    <InputWrapper>
      <InputElement
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <LabelElement>{label}</LabelElement>
    </InputWrapper>
  );
};

export default Input;

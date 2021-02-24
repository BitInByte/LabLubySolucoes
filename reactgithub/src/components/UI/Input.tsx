// Import libraries
import React from 'react';
import styled from "styled-components";

// Import components
const InputElement = styled.input`
    width: ${props => props.theme.sizes.elementSize};
    padding: ${props => props.theme.paddings.elementPadding};
    margin: 1.5rem;
    border-radius: 1.5rem;
    font-size: ${props => props.theme.fontSize.element};
`;

// Styles

// Interface
interface IProps {
    placeholder: string;
    onChangeHandler: (value: string) => void;
    value: string;
}

// Component
const Input: React.FC<IProps> = ({placeholder, onChangeHandler, value}) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(event.target.value);
    }
    return <InputElement placeholder={placeholder} value={value} onChange={onChange} />;
}


export default Input;

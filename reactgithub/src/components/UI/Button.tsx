// Import libraries
import React from 'react';
import styled from "styled-components";

// Import components

// Styles
const ButtonElement = styled.button`
    width: ${props => props.theme.sizes.elementSize};
    background-color: ${props => props.theme.colors.yellow};
    font-size: ${props => props.theme.fontSize.element};
    border-radius: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: ${props => props.theme.paddings.elementPadding};
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Interface
interface IProps {
}

// Component
const Button: React.FC<IProps> = ({children}) => (
        <ButtonElement >
            {children}
        </ButtonElement>
    )

export default Button;

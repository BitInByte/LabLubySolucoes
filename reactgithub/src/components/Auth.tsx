// Import libraries
import React, {useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import styled from "styled-components";

// Import components
import Input from "./UI/Input";
import Button from "./UI/Button";

// Styles
const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

// Interface
interface IProps {

}

// Component
const Auth: React.FC<IProps> = () => {
    const [userInput, setUserInput] = useState("");

    const onInputChange = (value: string) => {
        setUserInput(_ => value);
    }
    return (
        <Form>
            <Input placeholder="Usuário" value={userInput} onChangeHandler={onInputChange} />
            <Button>
                Entrar <AiOutlineArrowRight style={{ marginLeft: "1.5rem"  }}/>
            </Button>
        </Form>
    );
};


export default Auth;

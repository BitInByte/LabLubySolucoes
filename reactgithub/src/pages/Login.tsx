// Import libraries
import React from 'react';
import { SiGithub } from "react-icons/si"
import styled from "styled-components";

// Import components
import Auth from "../components/Auth";

// Styles
const LoginSection = styled.section`
    width: 100%;
    height: 100rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const GitHubIcon = styled(SiGithub)`
    font-size: 15rem;
    color: ${props => props.theme.colors.yellow};
    margin: 3.5rem;
`;

// Interface
interface IProps {

}

// Component
const Login: React.FC<IProps> = () => {
    return (
        <LoginSection>
            <GitHubIcon />
            <Auth />
        </LoginSection>
    );
}

export default Login;

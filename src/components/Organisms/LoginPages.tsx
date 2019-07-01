import React from "react";
import styled from "@emotion/styled";

// Atom
import Container from "../Atoms/Container";

// Molecules

// Types

const LoginPages: React.FC<any> = ({ handleLogin, handleLogout }) => {
  return (
    <>
      <Container>
        <Title>ログイン</Title>
        <button onClick={() => handleLogin()}>login</button>
        <button onClick={() => handleLogout()}>logout</button>
        <FormArea></FormArea>
      </Container>
    </>
  );
};

const FormArea = styled.div`
  max-width: 300px;
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
`;

export default LoginPages;

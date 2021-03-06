import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 46px;
  font-family: "Erica One", cursive;
`;

export const Image = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: 18px;
  border: 1px solid #333;
`;

export const Quote = styled.blockquote`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

export const Button = styled.button`
  width: 150px;
  padding: 6px;
  border-radius: 6px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  :hover {
    background-color: #fe3;
  }
`;

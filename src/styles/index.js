import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    outline: none;
    }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  padding: 20px 25px;

  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;

  text-align: center;
  color: #da2535;
`;

export const Input = styled.input`
  width: 224px;
  height: 50px;
  padding: 24px 13px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  border: none;

  color: #da2535;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;

  border: none;
  cursor: pointer;

  background: #da2535;
  border-radius: 10px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  background: ${(props) => (props.checked ? "#da2535" : "#FFFFFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
  
    width:80%;
    overflow-wrap:break-word;
    word-wrap:break-word;
    word-break:break-word;
  }
  button{
    width: 24px;
    background: transparent;
    border:none;
    cursor:pointer;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  }
`;

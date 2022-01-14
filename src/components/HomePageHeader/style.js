import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  img {
    height: 250px;
    width: 100%;
    filter: grayscale(100%) opacity(10%);
    position: absolute;
    z-index: -1;
  }
`;

export const Content = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #aaaaaa;
    text-align: center;
    span {
      color: #49acff;
    }
  }
  h4 {
    color: #7a8288;
    text-align: center;
  }
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #287dca;
  border: 1px solid transparent;
  padding: 10px 15px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 20px;
  border-radius: 10px;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    filter: brightness(0.7);
  }
`;

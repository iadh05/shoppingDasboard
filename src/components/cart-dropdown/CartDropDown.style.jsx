import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;

export const CartItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    border-radius: 10px;
    height: 10px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;

export const EmptyMessageContainer = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

import styled from 'styled-components';

export const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 150px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const StyledGameOverMessage = styled.div`
  margin-bottom: 10px;
`;

export const StyledRestartButton = styled.button`
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #e05245;
  }
`;

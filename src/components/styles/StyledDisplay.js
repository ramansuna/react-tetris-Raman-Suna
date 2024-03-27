import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    padding: 20px;
    border: 6px solid #333;
    min-height: 50px;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
    color: ${props => (props.gameOver ? 'red' : '#fff')};
    background: linear-gradient(135deg, #333, #666);
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

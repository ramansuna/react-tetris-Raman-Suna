import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.height}, 30px);
    grid-template-columns: repeat(${props => props.width}, 30px);
    grid-gap: 1px;
    border: 4px solid #333;
    width: fit-content;
    background: linear-gradient(135deg, #222, #444);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
`;

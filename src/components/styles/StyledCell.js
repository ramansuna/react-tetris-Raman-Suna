import styled from 'styled-components';

export const StyledCell = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(${props => props.color}, 0.9);
    border: 2px solid rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 0.7);
    border-right-color: rgba(${props => props.color}, 1);
    border-bottom-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
`;

import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    aside {
        width: 100%;
        max-width: 200px;
        margin-top: 20px;
    }
`;

import styled from 'styled-components';

const StyledFeedbackOptions = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin-right: 20px;
    }

    button {
        background: #62d0df;
        border: #62d0df;
        border-radius: 50px;
        font-size: 20px;
        line-height: 16px;
        padding: 10px;
        display: flex;
        align-items: center;
        color: #ffffff;
        cursor: pointer;
    }
`;

export default StyledFeedbackOptions;

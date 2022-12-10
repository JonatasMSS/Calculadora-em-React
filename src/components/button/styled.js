import styled from "styled-components";



export const ButtonContainer = styled.button`
    border: none;
    background-color:${props => props.primary ? "white" : "orange"};
    //width: 100%;
    flex-grow:${props => props.flexGrow ? props.flexGrow : 1};
    margin: 0;
    border: 1px solid black;
    font-size: 2.5em;

    :hover{
        background-color: ${props => props.primary ? "grey" : "#EF9C53" };
    }
`
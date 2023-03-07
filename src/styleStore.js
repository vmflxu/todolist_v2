import styled from "styled-components";


// 공통
export const Wrap = styled.div`
    width:100vw;
    max-width: 1100px;
    height: 100vh;
    background-color: lightpink;
    margin : 0px auto;
    display : block;
`
export const Btn = styled.button`
    cursor : pointer;
    padding: 5px;
    
`

// Header 
export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height : fit-content;
    margin-bottom: 10px;
`
export const HeaderSpan = styled.span`
    display : inline-block;
    font-size: normal;
    font-weight: 600;
    color: gray;
    margin : 15px 0px;
`

// Inputbar
export const InputBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const InputSet = styled.div`
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height : fit-content;
    width: fit-content;
    background-color: lightgray;
    overflow: hidden;
    border : 1px solid gray;
    box-shadow: 0px 0px 5px gray;
`
export const InputLabel = styled.label`
    height : 100%;
    font-size: 0.8em;
    padding : 0px 8px;
`
export const TextInput = styled.input`
    border : none;
    margin : 0px;
    height : 15px;
    border-left: none;
`
// Contents
export const ContentsDiv = styled.div`
    display: block;
`
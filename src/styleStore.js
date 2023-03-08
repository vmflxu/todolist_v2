import styled from "styled-components";


// 공통
export const Wrap = styled.div`
    width:100vw;
    max-width: 1100px;
    height: 100vh;
    /* background-color: lightpink; */
    margin : 0px auto;
    display : block;
`
export const Button = styled.button`
    cursor : pointer;
    display: block;
    padding: 0.4rem 12px;
    height : auto;
    border-radius: 5px;
    border: 1px solid lightslategray;
    background-color: lightslategray;
    color : white;
    &:hover{
        border: 1px solid darkslategray;
        background-color: darkslategray;
    }
`
export const BtnDetail = styled.button`
    cursor : pointer;
    font-size : small;
    color: darkslategray;
    background-color: transparent;
    margin-bottom: 3px;
    border : none;
    &:hover{
        color : black;
    }
`

export const BtnForCard = styled.button`
    cursor : pointer;
    font-size: 20px;
    color : grey;
    position: absolute;
    z-index: 5;
    padding: 0px;
    right: 2px;
    top: ${(props)=> props.isTop ? '0px': ''};
    bottom: ${(props)=> props.isTop ? '': '0px'};
    background-color: transparent;
    border : none;
    /* border-radius: 0%; */
    &:hover{
        color : red;
    }
`

// Header 
export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width:1080px;
    height : fit-content;
    margin: 0px auto 10px auto;
    border-bottom : 1px solid darkslategray;
    padding: 0px 0px;

`
export const HeaderSpan = styled.span`
    display : inline-block;
    font-size: normal;
    font-weight: 600;
    color: gray;
    margin : 10px 0px 3px 0px;
`

// Inputbar
export const InputBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: green; */
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0px 10px;
`
export const InputSet = styled.div`
    padding : 0px;
`
export const BaseFlexDiv = styled.div`
    display: inline-block;
    margin-right: 30px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height : fit-content;
    width: fit-content;
    background-color: darkslategray;
    overflow: hidden;
    border : 2px solid darkslategray;
    box-shadow: 0px 0px 8px darkslategray;
`

export const InputLabel = styled.label`
    height : 100%;
    font-weight: 400;
    color: white;
    font-size: 0.9em;
    padding : 0px 12px;
    
    /* border : 1px solid darkslategray; */
`
export const TextInput = styled.input`
    border : none;
    margin : 0px;
    height : 1.5rem;
    border-left: none;
    border-bottom-right-radius: inherit;
    width : ${(props) => props.length};
    max-width: ${(props) => props.maxLength};
    &:focus{
        outline: none;
    }
`
// Contents
export const ContentsDiv = styled.div`
    display: block;
    padding: 0px 10px;
`

export const PartTitle = styled.span`
    display : block;
    font-weight: 900;
    font-size: 24px;
    background-color: darkslategray;
    padding: 10px 20px;
    color:white;
`
export const PartList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    padding: 40px 40px 40px 40px;
    gap: 25px;
    border : 2px solid darkslategray;
    border-top : none;
    margin-bottom : 20px;
`
export const Card = styled.div`
    background-color: ${(props)=>props.colorData};
    position: relative;
    width: fit-content;
    padding : 10px 20px 0px 5px;
    min-width: 50px;
    min-height: 100px;
    height : auto;
    box-shadow: 2px 2px 5px grey;
    &:hover{
        background-color: ${(props) => props.hoverData};
        box-shadow: 2px 2px 10px black;
    }
`
export const CardTitle= styled.div`
    margin : 10px;
    font-size: 20px;
    font-weight: 400;
    &:focus{
        outline: none;
    }
`
export const CardMemo = styled.div`
    display: block;
    margin : auto 10px 10px 10px;
    width : inherit;
    background-color: transparent;
    border : none;
    font-size : 14px;
    font-weight: 300;
    &:focus{
        outline: none;
    }
`

// details page
export const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100vw;
    height:100vh;
`
export const WhiteBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width : 500px;
    height : 500px;
    padding : 20px;
    border : 1px solid lightgray;
`
export const FirstDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const TitleDiv = styled.div`
    display: block;
    width: 100%;
    text-align: left;
    font-weight: 900;
    font-size: 20px;
    margin: 30px 0px;
`
export const MemoDiv = styled.div`
    display: block;
    width: 100%;
`
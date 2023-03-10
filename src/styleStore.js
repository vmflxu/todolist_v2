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
export const HelpDiv = styled.div`
    display: ${(props) => props.open? 'block' : 'none'};
    position: fixed;
    z-index: 3;
    left:20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
`
export const Button = styled.button`
    cursor : pointer;
    display: block;
    padding: 0.4rem 12px;
    height : 2.5rem;
    border-radius: 5px;
    font-weight: bold;
    border: 1px solid lightslategray;
    background-color: lightslategray;
    color : white;
    &:hover{
        border: 1px solid darkslategray;
        background-color: darkslategray;
    }
`
export const BtnForCard = styled.button`
    cursor : pointer;
    display : inline-block;
    font-size: ${(props) => props.isX ? '20px':'14px'};
    color : grey;
    height : fit-content;
    width: fit-content;
    padding : 0px;
    margin : 0px 2px;
    background-color: transparent;
    border : none;
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
    height : 2rem;
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
    margin-bottom: 50px;
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
export const CardDiv= styled.div`
    min-width: 100%;
    ${(props) => props.css}
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

export const BtnDiv = styled.div`
    position: absolute;
    right: 0px;
    ${(props) => props.isTop ? `top:0px;` : `bottom:0px;`}
`
export const Blank = styled.div`
    height:20px;
`
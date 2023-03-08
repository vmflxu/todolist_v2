import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardDiv } from '../../styleStore';
import CardButtons from './CardButtons';
import { addNew } from '../../redux/modules/todoList';

function ListCards({ children }) {

    const isDoneCheck = children === 'Todo List' ? false : true;
    const data = useSelector((state) => state.todolist);
    const dispatch = useDispatch();
    const TITLE = `    
    margin : 10px;
    font-size: 20px;
    font-weight: 400;
    &:focus{
        outline: none;
    }`;
    const MEMO = `
    display: block;
    margin : auto 10px 10px 10px;
    background-color: transparent;
    border : none;
    font-size : 14px;
    font-weight: 300;
    &:focus{
        outline: none;
    }`

    const styleData = {
        color: (isDoneCheck ? 'rgb(216, 255, 216)' : 'lightyellow'),
        colorHover: (isDoneCheck ? 'rgb(161, 255, 176)' : 'rgb(255, 255, 128)'),
    };

    const updateCard = (e, id, targetKey) => {
        if(e.target.innerText.length > 0){
            const newData = data.map((elem) => {
                if (elem.id === id) {
                    elem[targetKey] = e.target.innerText;
                    return elem;
                } else {
                    return elem;
                }
            });
            console.log(newData);
    
            dispatch(addNew(newData));
        }
    }



    return data.filter((element) => element.isDone === isDoneCheck)
        .map((element) => <Card
            key={`${children}_Card_` + Math.floor(Math.random() * 1000000000000)}
            colorData={styleData.color}
            hoverData={styleData.colorHover}>
            <CardDiv
                css={TITLE}
                contentEditable={true}
                onBlur={(e) => updateCard(e, element.id, 'title')}
                suppressContentEditableWarning
            >{element.title}</CardDiv>
            <CardDiv
                css={MEMO}
                contentEditable={true}
                onBlur={(e) => updateCard(e, element.id, 'memo')}
                suppressContentEditableWarning
            >{element.memo}</CardDiv>
            <CardButtons id={element.id}>{isDoneCheck}</CardButtons>
        </Card>
        );
}

export default ListCards
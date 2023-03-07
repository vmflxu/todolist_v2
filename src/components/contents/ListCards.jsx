import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardMemo, CardTitle } from '../../styleStore';
import CardButtons from './CardButtons';

function ListCards({ children }) {

    const isDoneCheck = children === 'Todo List' ? false : true;
    const data = useSelector((state) => state.todolist);

    const styleData = {
        color: (isDoneCheck ? 'rgb(216, 255, 216)' : 'lightyellow'),
        colorHover: (isDoneCheck ? 'rgb(161, 255, 176)' : 'rgb(255, 255, 128)'),
    };

    return (
        data.filter((element) => element.isDone === isDoneCheck)
            .map((element) =>
                <Card
                    key={`${children}_Card_` + Math.floor(Math.random() * 1000000000000)}
                    colorData={styleData.color}
                    hoverData={styleData.colorHover}>
                    <CardTitle>{element.title}</CardTitle>
                    <CardMemo>{element.memo}</CardMemo>
                    <CardButtons id={element.id}>{isDoneCheck}</CardButtons>
                </Card>
            )
    );
    // return 1;
}

export default ListCards
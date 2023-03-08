import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardTitle, CardMemo } from '../../styleStore';
import CardButtons from './CardButtons';
import { addNew } from '../../redux/modules/todoList';

function ListCards({ children }) {

    const isDoneCheck = children === 'Todo List' ? false : true;
    const data = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const styleData = {
        color: (isDoneCheck ? 'rgb(216, 255, 216)' : 'lightyellow'),
        colorHover: (isDoneCheck ? 'rgb(161, 255, 176)' : 'rgb(255, 255, 128)'),
    };

    const updateCard = (e, id, target) => {
        
        const newData = data.map((elem) => {
            if (elem.id === id) {
                elem[target] = e.target.innerText;
                return elem;
            } else {
                return elem;
            }
        });
        console.log(newData);

        dispatch(addNew(...newData));    
    }



return data.filter((element) => element.isDone === isDoneCheck)
    .map((element) => {
        return <Card
            key={`${children}_Card_` + Math.floor(Math.random() * 1000000000000)}
            colorData={styleData.color}
            hoverData={styleData.colorHover}>
            <CardTitle
                contentEditable={true}
                onInput={(e) => updateCard(e, element.id, 'title')}
            >{element.title}</CardTitle>
            <CardMemo
                contentEditable={true}
                onInput={(e) => updateCard(e, element.id, 'memo')}
            >{element.memo}</CardMemo>
            <CardButtons id={element.id}>{isDoneCheck}</CardButtons>
        </Card>
    })
}

export default ListCards
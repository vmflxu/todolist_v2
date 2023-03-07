import React from 'react'
import { BiArrowFromBottom, BiX, BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { BtnForCard, BtnDetail } from '../../styleStore';
import { eraseCard, toggleIsDone } from '../../redux/modules/todoList';
import { useNavigate } from 'react-router-dom';

function CardButtons({id,children}) {

    const icon = children ? <BiArrowFromBottom /> : <BiCheck />;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todolist);
    const navigate = useNavigate();

    const deleteElement = () => {
        const tempArray = data.filter((element) => element.id !== id);
        console.log(tempArray);
        dispatch(eraseCard(tempArray));
    }

    const toggleElement = () => {
        const tempArray = data.map((element)=> {
            if(element.id === id){
                element.isDone = !element.isDone;
                return element;
            } else {
                return element;
            }
        });
        console.log(tempArray);
        dispatch(toggleIsDone(tempArray));
    }

    return (
        <>
            <BtnForCard isTop={true} onClick={deleteElement}><BiX /></BtnForCard>
            <BtnForCard isTop={false} onClick={toggleElement}>{icon}</BtnForCard>
            <BtnDetail onClick={() => navigate(`/details/${id}`)}>상세보기</BtnDetail>
        </>
    )
}

export default CardButtons
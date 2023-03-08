import React from 'react'
import { BiArrowFromBottom, BiX, BiCheck, BiDetail } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { BtnForCard, BtnDetail, BtnDiv } from '../../styleStore';
import { eraseCard, toggleIsDone } from '../../redux/modules/todoList';
import { useNavigate } from 'react-router-dom';

function CardButtons({ id, children }) {

    const icon = children ? <BiArrowFromBottom /> : <BiCheck />;
    const DELETE = `
        top : 0px;
    `


    const dispatch = useDispatch();
    const data = useSelector((state) => state.todolist);
    const navigate = useNavigate();



    const deleteElement = () => {
        const tempArray = data.filter((element) => element.id !== id);
        console.log(tempArray);
        dispatch(eraseCard(tempArray));
    }

    const toggleElement = () => {
        const tempArray = data.map((element) => {
            if (element.id === id) {
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
            <BtnDiv isTop={true}>
                <BtnForCard isX={true} onClick={deleteElement}><BiX /></BtnForCard>
            </BtnDiv>
            <BtnDiv isTop={false}>
                <BtnForCard isX={false} onClick={() => navigate(`/details/${id}`)}><BiDetail /></BtnForCard>
                <BtnForCard isX={false} onClick={toggleElement}>{icon}</BtnForCard>
            </BtnDiv>

        </>
    )
}

export default CardButtons
import React from 'react'
import { DetailDiv, FirstDiv, TitleDiv, WhiteBox, MemoDiv,Button } from '../../styleStore'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Details() {
    const params = useParams();
    const navigate = useNavigate();
    const data = useSelector((state)=>state.todolist)
    .filter((element)=>element.id == params.id);
    
    return (
        <DetailDiv>
            <WhiteBox>
                <FirstDiv>
                <span>ID : {data[0].id}</span>
                <Button onClick={() => navigate('/')}>이전으로 돌아가기</Button>
                </FirstDiv>
                <TitleDiv>
                    {data[0].title}
                </TitleDiv>
                <MemoDiv>
                    {data[0].memo}
                </MemoDiv>
            </WhiteBox>
        </DetailDiv>
    )
}

export default Details
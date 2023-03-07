import React from 'react'
import { ContentsDiv } from '../../styleStore'
import Board from './Board'

function Contents() {
    return (
        <ContentsDiv>
            <Board>Todo List</Board>
            <Board>Done List</Board>
        </ContentsDiv>
    )
}
export default Contents
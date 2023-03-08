import React, { useRef } from 'react'
import { Button, InputBarDiv, InputSet, TextInput, InputLabel, BaseFlexDiv } from '../../styleStore'
import { useDispatch, useSelector } from 'react-redux';
import { addNew } from '../../redux/modules/todoList';

function Inputbar() {
    const titleRef = useRef('');
    const memoRef = useRef('');
    const data = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const submit = () => {
        if (titleRef.current.value !== '' && memoRef.current.value !== '') {
            const collectedData = {
                id: Math.floor(Math.random() * 100000000000),
                title: titleRef.current.value,
                memo: memoRef.current.value,
                isDone: false,
            };

            const newData = [...data, collectedData];

            dispatch(addNew(newData));
            titleRef.current.value = '';
            memoRef.current.value = '';
        } else;
    }
    return (
        <InputBarDiv>
            <InputSet>
                <BaseFlexDiv>
                    <InputLabel>Title</InputLabel>
                    <TextInput ref={titleRef} maxLength={'200px'} length={'20vw'} />
                </BaseFlexDiv>
                <BaseFlexDiv>
                    <InputLabel>Memo</InputLabel>
                    <TextInput ref={memoRef} maxLength={'500px'} length={'50vw'} />
                </BaseFlexDiv>
            </InputSet>
            <Button onClick={submit}>Submit</Button>
        </InputBarDiv>
    )
}

export default Inputbar
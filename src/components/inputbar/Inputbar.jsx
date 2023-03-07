import React from 'react'
import Button from '../../Button'
import { InputBarDiv, InputSet, TextInput, InputLabel } from '../../styleStore'

function Inputbar() {
    return (
        <InputBarDiv>
            <InputSet>
                <InputLabel>Title</InputLabel>
                <TextInput />
            </InputSet>
            <InputSet>
                <TextInput />
            </InputSet>
            <Button>Add</Button>
        </InputBarDiv>
        dddd
    )
}

export default Inputbar
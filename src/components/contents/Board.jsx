import React from 'react'
import { PartTitle,PartList } from '../../styleStore'
import ListCards from './ListCards'

function Board({children}) {

    return (
        <>
            <PartTitle>{children}</PartTitle>
            <PartList>
                <ListCards>{children}</ListCards>
            </PartList>
        </>
    )
}

export default Board
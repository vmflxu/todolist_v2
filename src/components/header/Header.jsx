import React from 'react'
import { HeaderDiv,HeaderSpan } from '../../styleStore'


function Header() {
    return (
        <HeaderDiv>
            <HeaderSpan>My Todo List</HeaderSpan>
            <HeaderSpan>13기 김용민</HeaderSpan>
        </HeaderDiv>
    )
}

export default Header
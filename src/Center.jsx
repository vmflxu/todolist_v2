import React from 'react'
import Header from './components/header/Header'
import Inputbar from './components/inputbar/Inputbar'
import Contents from './components/contents/Contents'
import Help from './Help'
import { Wrap, Blank } from './styleStore'

function Center() {
    return (
        <Wrap>
            <Help />
            <Header />
            <Inputbar />
            <Contents />
            <Blank />
        </Wrap>
    )
}

export default Center
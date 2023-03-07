import React from 'react'
import Header from './components/header/Header'
import Inputbar from './components/inputbar/Inputbar'
import Contents from './components/contents/Contents'
import { Wrap } from './styleStore'

function Center() {
    return (
        <Wrap>
            <Header />
            <Inputbar />
            <Contents />
        </Wrap>
    )
}

export default Center
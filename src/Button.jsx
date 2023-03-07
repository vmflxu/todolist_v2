import React from 'react'
import { Btn } from './styleStore'

function Button({children}) {
    return (
        <Btn>{children}</Btn>
    )
}

export default Button
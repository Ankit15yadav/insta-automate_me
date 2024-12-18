import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { Sign } from 'crypto'

type Props = {}

const Signin = (props: Props) => {
    return (
        <SignIn />
    )
}

export default Signin
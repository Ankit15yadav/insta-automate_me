'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons'
import { useCreateAutomation } from '@/hooks/use-automations'

type Props = {}

const CreateAutomation = (props: Props) => {

    // create automation in the database using mutate
    const { isPending, mutate } = useCreateAutomation()

    return <Button
        onClick={() => mutate()}
        className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white
    rounded-full from-[#3352cc] font-medium to-[#1C2d70]'>
        <Loader state={isPending}>
            <AutomationDuoToneWhite />
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
}

export default CreateAutomation
import { PencilDuoToneBlack } from '@/icons'
import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'

type Props = {
    id: string
}

const AutomationBreadCrumb = ({ id }: Props) => {
    // get the automation data
    return (
        <div className='rounded-full w-full p-5 bg-[#18181b1a]
        flex  items-center'>
            <div className='flex items-center gap-x-1 min-w-0'>
                <p className='text-[#9b9ca0] truncate'>
                    Automations
                </p>
                <ChevronRight color='#9b9ca0' size={20}
                    className='flex-shrink-0'
                />
                <span className='flex gap-x-3 items-center min-w-0'>
                    {/* show editing data  */}
                    <p className='text-[#9b9ca0] truncate'>This is the automation  data</p>
                    <span className='cursor-pointer hover:opacity-75 duration-100 transition mr-4 flex-shrink-0'>
                        <PencilIcon size={13} />
                    </span>
                </span>
            </div>
            <div className='flex items-center ml-auto gap-x-5 '>
                <p className='hidden md:block text-text-secondary/60 text-sm truncate min-w-0'>
                    All pastes are automatically saved
                </p>
                <div className='flex gap-x-5 flex-shrink-0'>
                    <p className='text-text-secondary text-sm truncate min-w-0'>Changes saved</p>
                    <p className='text-text-secondary text-sm truncate min-w-0'>Undo | Redo</p>
                </div>
            </div>
            <div>
                <ActivateAutomationButton />
            </div>
        </div>
    )
}

export default AutomationBreadCrumb
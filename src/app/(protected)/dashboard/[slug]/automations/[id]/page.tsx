import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-cumbs/automations'
import { Warning } from '@/icons'
import React from 'react'

type Props = {
    params: { id: string }
}

// wip set some metadata stuff

const Page = ({ params }: Props) => {

    // wip : prefetch user automatio n data 
    return (
        <div className='flex flex-col'>
            <AutomationBreadCrumb id={params.id} />
            <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3'>
                <div className='flex gap-x-2'>
                    <Warning /> when...
                </div>
                <Trigger id={params.id} />
            </div>
        </div>
    )
}

export default Page
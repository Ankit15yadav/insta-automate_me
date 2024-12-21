import AutomationBreadCrumb from '@/components/global/bread-cumbs/automations'
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
        </div>
    )
}

export default Page
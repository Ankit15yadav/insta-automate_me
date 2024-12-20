import { Button } from '@/components/ui/button'
import { defineDmmfProperty } from '@prisma/client/runtime/library'
import { icons } from 'lucide-react'
import React from 'react'

type Props = {
    title: string,
    description: string,
    icon: React.ReactNode,
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ icon, title, description, strategy }: Props) => {

    //wip : wire up fetching data and get the integration from the database

    return (
        <div className='border-2 border-[#3352cc] rounded-2xl 
        gap-x-5 p-5 flex items-center justify-between'>
            {icon}
            <div className='flex flex-col flex-1'>
                <h3 className='text-xl'>{title}</h3>
                <p className='text-[#9D9D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12'>
                    {description}
                </p>
            </div>
            <Button
                // onClick={onInstaA}
                className='bg-gradient-to-br text-white rounded-full 
                text-lg from-[#3352cc] font-medium to-[#1c2d70]
                 hover:opacity-70 transition duration-100'
            >
                Connect
            </Button>
        </div>
    )
}

export default IntegrationCard
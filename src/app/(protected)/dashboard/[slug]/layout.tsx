import Navbar from '@/components/global/Navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { prefetchUserAutomations, prefetchUserProfile } from '@/react-query/pretech'

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

const Layout = async ({ children, params }: Props) => {

    //Query client

    const query = new QueryClient()

    await prefetchUserProfile(query);

    await prefetchUserAutomations(query);


    return (

        <HydrationBoundary state={dehydrate(query)}>
            <div className='p-3'>
                {/* side bar */}
                <Sidebar slug={params.slug} />
                {/* navbar */}

                <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
                    <Navbar slug={params.slug} />
                    {children}
                </div>
            </div>
        </HydrationBoundary>


    )
}

export default Layout
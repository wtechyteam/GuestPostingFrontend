import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Image from 'next/image';
import { Button } from './../common/Button'; 
import Link from 'next/link';

const TabsSection = ({ isReversed = false }) => {
    return (
        <div className='py-12 bg-white container-xs flex justify-center items-center'>
            <div className={`flex ${isReversed ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} justify-center items-center`}>
                <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                    className='w-full md:flex justify-center items-center'
                >
                    <div className={`flex flex-col md:w-1/2 space-y-4 pr-4 ${isReversed ? 'order-2' : 'order-1'} justify-center items-center`}>
                        <h2 className={`text-2xl font-bold mb-6 ${isReversed ? 'text-left' : 'text-center'} md:text-left`}>
                            Streamline Team Collaboration
                        </h2>
                        <TabList className="space-y-4">
                            <Tab
                                className="flex items-start p-4 bg-white text-black hover:bg-blue-100 rounded-lg transition-all"
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#ebf8ff', // Custom light blue color when active
                                        color: '#000', // Active tab text color
                                    },
                                }}
                            >
                                <div className="mr-4">
                                    <Image width={40} height={40} src="/images/tabIcon.png" alt='icon' title='tobeChanged' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Lorem Ipsum</h2>
                                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Tab>
                            <Tab
                                className="flex items-start p-4 bg-white text-black hover:bg-blue-100 rounded-lg transition-all"
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#ebf8ff', // Custom light blue color when active
                                        color: '#000', // Active tab text color
                                    },
                                }}
                            >
                                <div className="mr-4">
                                    <Image width={40} height={40} src="/images/tabIcon.png" alt='icon' title='tobeChanged' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Lorem Ipsum</h2>
                                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Tab>
                            <Tab
                                className="flex items-start p-4 bg-white text-black hover:bg-blue-100 rounded-lg transition-all"
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#ebf8ff', // Custom light blue color when active
                                        color: '#000', // Active tab text color
                                    },
                                }}
                            >
                                <div className="mr-4">
                                    <Image width={40} height={40} src="/images/tabIcon.png" alt='icon' title='tobeChanged' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Lorem Ipsum</h2>
                                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Tab>
                            <Tab
                                className="flex items-start p-4 bg-white text-black hover:bg-blue-100 rounded-lg transition-all"
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#ebf8ff', // Custom light blue color when active
                                        color: '#000', // Active tab text color
                                    },
                                }}
                            >
                                <div className="mr-4">
                                    <Image width={40} height={40} src="/images/tabIcon.png" alt='icon' title='tobeChanged' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Lorem Ipsum</h2>
                                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Tab>
                        </TabList>
                    </div>
                    <div className={`md:w-1/2 mt-6 md:mt-0 flex justify-center ${isReversed ? 'order-1' : 'order-2'}`}>
                        <TabPanel className='text-center' value={0}>
                            <Image className='mx-auto' width={400} height={500} src="/images/image 6.png" alt='Personal Branding' />
                            <div className="mt-6 ml-36">
                                <Link href="/signup">
                                    <Button
                                        size="md"
                                        className="rounded-[24px] min-w-[92px] font-medium bg-blue-500 text-white transition-colors duration-300"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </TabPanel>
                        <TabPanel className='text-center' value={1}>
                            <Image className='mx-auto' width={400} height={500} src="/images/image 7.png" alt='Personal Branding' />
                            <div className="mt-6 ml-36">
                                <Link href="/signup">
                                    <Button
                                        size="md"
                                        className="rounded-[24px] min-w-[92px] font-medium bg-blue-500 text-white transition-colors duration-300"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </TabPanel>
                        <TabPanel className='text-center' value={2}>
                            <Image className='mx-auto' width={400} height={500} src="/images/image 6.png" alt='Personal Branding' />
                            <div className="mt-6 ml-36">
                                <Link href="/signup">
                                    <Button
                                        size="md"
                                        className="rounded-[24px] min-w-[92px] font-medium bg-blue-500 text-white transition-colors duration-300"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </TabPanel>
                        <TabPanel className='text-center' value={3}>
                            <Image className='mx-auto' width={400} height={500} src="/images/image 7.png" alt='Personal Branding' />
                            <div className="mt-6 ml-36">
                                <Link href="/signup">
                                    <Button
                                        size="md"
                                        className="rounded-[24px] min-w-[92px] font-medium bg-blue-500 text-white transition-colors duration-300"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default TabsSection;

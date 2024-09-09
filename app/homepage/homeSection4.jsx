import Image from 'next/image';
import React from 'react';
import { Button } from './../common/Button'; 
import Link from 'next/link';

const HomeSection4 = () => {
    return (
        <section className='bg-dark py-16'>
            <div className='w-full py-6 px-4 bg-[url("/images/guestPost.png")] bg-cover bg-center min-h-[400px]'>
               
                {/* <p className='text-lg text-adsy_com-black'>
                            <Link href="/signup">
                                <Button
                                    size="md"
                                    className="rounded-[24px] min-w-[92px] font-medium bg-blue-500 text-white transition-colors duration-300"
                                >
                                    Sign up
                                </Button>
                            </Link>
                        </p> */}
            </div>
            
        </section>
    );
};

export default HomeSection4;

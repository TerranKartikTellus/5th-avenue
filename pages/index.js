import Image from 'next/image'
import { useState } from 'react';

import Headd from '@/components/head';
export default function Home() {
  
  const [modal, setModel] = useState(false);
  function toggle(){setModel(!modal)}
  return (
    <main
      className={`bg-gray-100 flex flex-col p-10 items-center justify-center text-gray-900 pt-  min-h-screen `}
    >
      <Headd title="Home | 5th Avenue"></Headd>
      { modal && <Modal toggle={toggle} text={'Thank you for your interest in our company!'}></Modal>}
     <div className="font-light text-5xl  ">Welcome to New York 5th Avenue</div>
     <div className="my-6  ">Iconic architecture in the heart of the city</div>
     <div className="w-full flex flex-row items-center justify-between lg:justify-center lg:space-x-4">
      <button onClick={toggle} className='w-1/2 lg:w-[200px] font-light                         lg:text-sm text-xl bg-gray-100 hover:shadow-2xl duration-200 ease-in-out shadow-xl p-2 m-2 rounded-lg text-gray-800 hidden lg:block '>Read</button>
      <button onClick={toggle} className=' mx-auto w-1/2 lg:w-[200px] font-light lg:text-sm text-lg bg-gray-700 hover:shadow-2xl duration-200 ease-in-out tracking-widest shadow-xl p-2 my-4 rounded-lg text-gray-200'>Visit</button>
     </div>
    </main>
  )
}

function Modal({text, toggle}){

  return(
    <main className='bg-gray-900 text-gray-400 fixed top-0 left-0 w-full min-h-screen flex text-center flex-col items-center justify-center text-lg tracking-widest'>
      <button onClick={toggle} className='fixed top-5 right-5'>X</button>
      {text}
    </main>
  );
}
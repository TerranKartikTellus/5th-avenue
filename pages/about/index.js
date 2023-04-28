import Headd from '@/components/head'
import Image from 'next/image'


export default function About() {
  return (
    <main
      className={`bg-gray-100 flex flex-col p-10 items-center justify-center text-gray-900 pt-  min-h-screen `}
    >
      <Headd title="About | 5th Avenue"></Headd>
     <div className="font-light text-5xl  ">About <br className=" lg:hidden "></br>  5th Avenue</div>
     
    </main>
  )
}

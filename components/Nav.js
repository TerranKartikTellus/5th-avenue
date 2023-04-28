import Link from "next/link";
import { useRouter } from 'next/router';







export default function Nav(){

   const router = useRouter();
  const currentPageName = router.pathname=='/' ? '/' : router.pathname.substring(1);
  
  return(
    <main className={`  p-4 bg-transpar fixed top-0 left-0 w-full bg-gray-100 flex flex=row items-center justify-center space-x10 text-gray-900 `}>
      <div className="w-[100px] text-center ">  
        <Link href={`/`}    className={`${currentPageName=='/' ? ' font-normal ' : ' font-extralight '}   hover:font-normal tracking-widest `}>HOME</Link>
      </div>
      <div className="w-[100px] text-center ">  
        <Link href={`/about`}   className={`${currentPageName=='about' ? ' font-normal ' : ' font-extralight '}   hover:font-normal tracking-widest `}>ABOUT</Link>
      </div>
      <div className="w-[100px] text-center ">  
        <Link href={`/contact`} className={`${currentPageName=='contact' ? ' font-normal ' : ' font-extralight '}   hover:font-normal tracking-widest `}>CONTACT</Link>
      </div>

      {/* {currentPageName} */}
    </main>
  )
}
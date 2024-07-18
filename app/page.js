import Navbar from "@/components/Navbar/Navbar";
import Urlarea from "@/components/Urlarea/Urlarea";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <div className="flex flex-col mx-auto items-center text-[#e6e9ec] my-10">
        <h1 className="text-[28px] font-semibold text-center max-w-[100%] lg:max-w-[70%] lg:text-[64px]">
        Transform Long Links into Short, robust URLs with Snippit</h1>
        <p className="max-w-[740px] text-center mt-5 lg:hidden block">Shorten, share, and shine with Snippit.</p>
        <p className="max-w-[740px] text-center mt-5 hidden lg:block">
        Simplify your web links and enhance your digital presence with Snippit, 
        the ultimate URL shortener. Experience the power of efficient link 
        management and detailed analytics to optimize your online interactions. Shorten, share, and shine with Snippit.
        </p>

      </div>
      <Urlarea/>
    </div>
  )
}

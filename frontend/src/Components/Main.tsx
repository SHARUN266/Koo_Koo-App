import React from 'react'
import { BsDot, BsThreeDots, BsChat, BsSearch } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
function Main() {
  return (
  <>
    <main className="ml-[275px]  flex w-[130rem] h-full min-h-screen  flex-col  border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
            Home
          </h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px]  flex items-stretch py-4 space-x-2 border-gray-600   relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full h-full  flex-none"></div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full h-full">
                <input
                  type="text"
                  className="w-full placeholder:text-lg text-xl  placeholder:text-gray-600 h-full bg-transparent   border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
                  placeholder="What's heppening?"
                />
              </div>
              <div className="w-full justify-between items-center  flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-full  text-lg text-center hover:bg-opacity-70  transition duration-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-b-[0.5px]  border-gray-600 p-2 flex space-x-4 w-full"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center space-x-1 w-full">
                      <div className="font-bold">Club of Coders</div>
                      <div className="text-gray-500">@ClubOfCoders</div>
                      <div className="text-gray-500">
                        <BsDot />
                      </div>

                      <div className="text-gray-500">1 hour</div>
                    </div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>

                  <div className="text-white text-base w-full cursor-pointer hover:bg-white/5 transition-all">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni explicabo necessitatibus ad. Voluptatem suscipit
                    nulla, dicta porro cumque itaque minus dolorum quas est
                    labore vel quae, sint voluptatum veritatis tempora?
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                  <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <BsChat />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <AiOutlineRetweet />
                    </div>
                    {/* <LikeButton/> */}
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <IoStatsChart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <IoShareOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  
  </>
  )
}

export default Main
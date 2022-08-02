import React from 'react'
import { FaComment, FaHeart, FaMusic, FaShare } from 'react-icons/fa';

const VideoInfo = () =>{
    return (
        <div className="flex flex-row">
            <img className="w-[50px] h-[50px] rounded-full" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b1d9b1404b254f514a7755a52c0cb2f9~c5_100x100.jpeg?x-expires=1659582000&x-signature=CxkyR6QV%2BPcDtEDlrmLYCEHMeao%3D" alt="avt" />
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a href="#" className="text-xl font-bold hover:underline">vyoanh_2211</a>
                    <a href="#" className="text-xl">Vy Oanh</a>
                </div>
                <div>
                    Chill !!!
                </div>
                <div className="flex flex-row items-center">
                    <FaMusic /> 
                    <span className="ml-3">Nhạc nền - Vy Oanh</span>
                </div>
            </div>
            <div>
                <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
            </div>
        </div>
    )
}

const VideoContent = () =>{
    return (
        <div className="flex flex-row">
            <video className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4" src="https://v16-webapp.tiktok.com/094b135608f7246084ffd533295116f6/62e8fdc9/video/tos/alisg/tos-alisg-pve-0037/d890d5ae6f3944a0978de64c71ccf2ca/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3666&bt=1833&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZB2uKwe2NnyQml7Gb&mime_type=video_mp4&qs=0&rc=OTo3aDk8PGk3ZzxnOTk6OEBpM25oNDk6ZnA2ZDMzODgzNEBiNjQzNTZfNjMxYi0zYDJfYSMvZDVfcjQwa2ZgLS1kLy1zcw%3D%3D&l=2022080204343801024524500304007C04" loop />
            <div className="flex flex-col justify-end ml-7">
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaHeart className="text-xl"/>
                    </div>
                    <span>1246</span>
                </div>
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaComment className="text-xl"/>
                    </div>
                    <span>1246</span>
                </div>
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaShare className="text-xl"/>
                    </div>
                    <span>161</span>
                </div>
            </div>
        </div>
    )
}

const Video = () => {
  return (
    <div className="max-w-[600px]  border-b-2 border-gray-200 pb-10 pt-10">
        <VideoInfo />
        <VideoContent />
    </div>
  )
}

export default Video
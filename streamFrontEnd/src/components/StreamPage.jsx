// cdimport React from 'react'
import ReactPlayer from "react-player";
import movie from "./movie.mp4"
import { useNavigate } from 'react-router-dom';

function StreamPage() {

    const navigate=useNavigate();
    const user=[];



    return (
        <div>
            <div className={"flex-col flex xl:flex-row lg:flex-row md:flex-row justify-center max-h-screen"}>
                <div className={"screenSide lg:w-2/3 m-4 flex flex-col justify-evenly items-start"}>
                    <div className={"m-2 rounded-md w-full"}>
                        <ReactPlayer
                            url={movie}
                            playing={true}
                            controls={true}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className={"bottomBar flex w-full bg-base-300 m-2 rounded-md"}>
                        <div className="avatar m-6">
                            <div className="w-16 h-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" onClick={navigate(`/PreviewProfile?user=${user}`)}/>
                            </div>
                        </div>
                        <div className={"flex flex-col w-1/2"}>
                            <div className={"flex flex-col"}>
                                <h1 className={"text-4xl my-2"}>Title</h1>
                                <h2 className={"text-2xl"}> Streaming: Name</h2>
                            </div>
                            <p className={"text-xl my-4"}>description about the stream blah blah blah</p>
                            <p>subscribers</p>

                        </div>
                        <div className={"flex flex-col"}>
                            <button className="m-4 btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md ">Subscribe
                            </button>
                            <button className="m-4 btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md ">Create Party</button>
                        </div>

                    </div>

                </div>
                <div className={"chatSide lg:w-1/3 m-2"}>
                    <div
                        className={"chatBox bg-base-300 border-2 border-info rounded-md flex flex-col overflow-y-auto h-3/4 max-h-3/4"}>
                        <div className={"chatComponent flex-col"}>
                            <div className="chat chat-start">
                                <div className="chat-header">
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">2 hours ago</time>
                                </div>
                                <div className="chat-bubble">You were the Chosen One!</div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-header">
                                    Anakin
                                    <time className="text-xs opacity-50">2 hours ago</time>
                                </div>
                                <div className="chat-bubble">I hate you</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"bg-base-300 chatInput self-end border-2 border-info rounded-md w-full flex justify-center items-center "}>
                        <input type="text" placeholder="Type here"
                               className="input input-bordered input-info w-full max-w-xs"/>
                        <button className="m-4 btn btn-warning btn-sm sm:btn-sm md:btn-md lg:btn-md ">Send</button>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default StreamPage
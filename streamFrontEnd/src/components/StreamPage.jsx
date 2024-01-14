// cdimport React from 'react'
import ReactPlayer from "react-player";
import {useAuth} from "../provider/authProvider.jsx";
import {useState} from 'react';
import axios from "axios";
import React from "react";

function StreamPage() {

    const playerRef = React.useRef()

    const [isPlaying, setIsPlaying] = useState(false)

    const {token} = useAuth()
    const roomName = 'test'

    const [variable, setVariable] = useState([])


    const partySocket = new WebSocket(
        'ws://'
        + '192.168.125.225:8000'
        + '/ws/party/'
        + 'roomName'
        + '/'
    );

    partySocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log(data)
        if(data.type === 'chat_message'){
            console.log('dw')
            setVariable(() => [...variable, {
                from: data.from,
                message: data.message,
                time: data.time,
            }])
        }
        console.log(data)
        if(data.type === 'video_state'){
            setIsPlaying(data.state)
            // playerRef.current?.seekTo(playerRef?.current.getCurrentTime(), 'seconds')
            // playerRef.current.playing = true;
        }
        if(data.type === 'time_sync'){
            console.log(data.time)
            playerRef.current?.seekTo(data.time, "seconds")
        }


    };



    partySocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };





    return (
        <div>
            <div className={"flex-col flex xl:flex-row lg:flex-row md:flex-row justify-center max-h-screen"}>
                <div className={"screenSide lg:w-2/3 m-4 flex flex-col justify-evenly items-start"}>
                    <div className={"m-2 rounded-md w-full"}>
                        <ReactPlayer
                            url={'https://www.youtube.com/embed/O0Py7S-qLRI?si=myP53u7vZeBvOMJt'}
                            playing={isPlaying}
                            ref={playerRef}
                            onPlay={()=> {
                                partySocket.send(JSON.stringify({
                                    state: true,
                                    type: 'video_state',
                                }));
                            }}
                            onPause={()=> {
                                partySocket.send(JSON.stringify({
                                    state: false,
                                    type: 'video_state',
                                }));
                            }}

                            controls={true}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className={"bottomBar flex w-full bg-base-300 m-2 rounded-md"}>
                        <div className="avatar m-6">
                            <div className="w-16 h-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
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
                            <button className="m-4 btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md ">Share</button>
                        </div>

                    </div>

                </div>
                <div className={"chatSide lg:w-1/3 m-2"}>
                    <div
                        className={"chatBox bg-base-300 border-2 border-info rounded-md flex flex-col overflow-y-auto h-3/4 max-h-3/4"}>
                        <div className={"chatComponent flex-col"} id={'chatBox'}>
                            {variable.map((variable) => {
                                return (
                                    <div className="chat chat-start" key={variable.time}>
                                        <div className="chat-header">
                                            {variable.from}
                                            <time className="text-xs opacity-50">{variable.time}</time>
                                        </div>
                                        <div className="chat-bubble">{variable.message}</div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div
                        className={"bg-base-300 chatInput self-end border-2 border-info rounded-md w-full flex justify-center items-center "}>
                        <input type="text" placeholder="Type here"
                               className="input input-bordered input-info w-full max-w-xs"
                                id={'message_input'}
                        />
                        <button className="m-4 btn btn-warning btn-sm sm:btn-sm md:btn-md lg:btn-md " id={'send_message'}
                            onClick={
                                async function() {
                                    const messageInputDom = document.querySelector('#message_input');
                                    const message = messageInputDom.value;
                                    try{
                                        axios.get('http://192.168.125.225:8000/api/account/check', {
                                            'headers': {
                                                'Authorization': `Bearer ${token}`
                                            }
                                        })
                                            .then(function (response){
                                                partySocket.send(JSON.stringify({

                                                    message: message,
                                                    type: 'chat_message',
                                                    from: response.data.email,
                                                    time:  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}  `,

                                                }));
                                            })

                                    }
                                    catch(error){
                                        console.log(error)

                                    }

                                    messageInputDom.value = '';

                                }
                            }
                        >Send</button>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default StreamPage
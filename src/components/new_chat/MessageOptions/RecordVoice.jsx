import React, { useEffect, useState, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setCreateMessageOptions } from '../../../app/feature/ListChatSlice';
import AudioPlayer from '../../ui/AudioPlayer/AudioPlayer';

const RecordVoice = ({ place, voice, setVoice, recordBlobLink, setRecordBlobLink }) => {
    const dispatch = useDispatch()
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const intervalRef = useRef(null);

    const onStop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setRecordBlobLink(url);
        audioChunksRef.current = [];
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const startHandle = async () => {
        setElapsedTime(0);
        setIsRunning(true);
        setVoice(true);

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = onStop;

        mediaRecorderRef.current.start();

        intervalRef.current = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const stopHandle = () => {
        mediaRecorderRef.current.stop();
        setIsRunning(false);
        setVoice(false);
        clearInterval(intervalRef.current);
    };

    const clearHandle = () => {
        setIsRunning(false);
        setVoice(false);
        setRecordBlobLink(null);
        setElapsedTime(0);
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        return () => {
            // Cleanup interval on component unmount
            clearInterval(intervalRef.current);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="quick-post-record-voice w-full md:w-[600px] mx-auto mt-[1.5rem]">
            {place !== "footer" && (
                <div className="post-option-header">
                    <h3 className="post-option-header-title mb-[15px]">Record A Voice</h3>
                    <button
                        className="post-option-cancel-btn"
                        onClick={() => {
                            setVoice(false);
                            setTimeout(() => {
                                dispatch(setCreateMessageOptions("normal"));
                            }, 50);
                        }}
                    >
                        <MdClose />
                    </button>

                </div>
            )}

            {recordBlobLink && (
                <div className="progress-stat-bar w-full h-[4px] relative mb-[22px] pr-[35px]" >
                    <div className="bar w-full h-full bg-[#ddd]"></div>
                    <div className="colored-bar w-1/2 h-full absolute top-0"
                        style={{ background: "linear-gradient(90deg, #fd6729, orange)" }}
                    ></div>
                    <p className="absolute top-[-5px] right-0 text-[14px]">50%</p>
                </div>
            )}

            <div className="quick-post-record-voice-body max-w-sm border py-4 px-6 mx-auto">

                <div>
                    {recordBlobLink && (
                        <button onClick={clearHandle} className="button small white">
                            Clear
                        </button>
                    )}
                </div>
                <div className="">
                    <div className="timer text-center mb-[10px] text-[20px]">
                        {isRunning && <span>{formatTime(elapsedTime)}</span>}
                    </div>
                    {!voice ? (
                        <button onClick={startHandle} className="button small primary">
                            Start
                        </button>
                    ) : (
                        <button onClick={stopHandle} className="button small primary">
                            Stop
                        </button>
                    )}
                </div>

                <div>
                    {recordBlobLink &&
                        <AudioPlayer src={recordBlobLink} />
                    }
                </div>

            </div>
        </div>
    );
};

export default RecordVoice;

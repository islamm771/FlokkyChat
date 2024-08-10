import React, { useState, useRef, useEffect } from 'react';
import "./AudioPlayer.css";

function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
        style={{
          width: `${progressBarWidth}px`
        }}
      ></div>
      <div
        className='thumb'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}
      ></div>
      <input
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        className='range'
        onChange={onChange}
      />
    </div>
  );
}

const AudioPlayer = ({ src }) => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [IsVolumeOpened,setIsVolumeOpened] = useState(false)


  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.5;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    setPercentage(+percent);
    setCurrentTime(e.currentTarget.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const changeVolume = (e) => {
    const audio = audioRef.current;
    const volume = e.target.value;
    audio.volume = volume;
    setVolume(volume);
  };

  return (
    <div className="audio green-audio-player">
      <div className="play-pause-btn" onClick={play}>
        <svg
          viewBox="0 0 18 24"
          height="24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="playPause"
            className="play-pause-icon"
            d={isPlaying ? "M0 0h6v24H0V0zm12 0h6v24h-6V0z" : "M18 12L0 24V0"}
            fillRule="evenodd"
            fill="#566574"
          ></path>
        </svg>
      </div>

      <div className="controls">
        <span className="current-time">{formatTime(currentTime)}</span>
        <Slider percentage={percentage} onChange={onChange} />
        <span className="total-time">{formatTime(duration)}</span>
      </div>

      <div className="volume">
        <div className="volume-btn" onClick={()=> setIsVolumeOpened( prev => !prev )}>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="speaker"
              d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
              fillRule="evenodd"
              fill="#566574"
            ></path>
          </svg>
        </div>

        {
          IsVolumeOpened &&
          <div className="volume-controls">
            <div data-direction="vertical" class="slider">
              <div class="progress" style={{height:`${volume * 100}%`}}>
                <div data-method="changeVolume" id="volume-pin" class="pin"></div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={changeVolume}
              className="volume-slider"
            />
          </div>
        }
      </div>

      <audio 
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration);
        }}
        src={src ? src : "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"} />
    </div>
  );
};

export default AudioPlayer;

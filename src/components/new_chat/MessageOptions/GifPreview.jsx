import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCreateMessageOptions } from "../../../app/feature/ListChatSlice";
// import axios from "axios";

const GifDisplay = ({ selectedGif, setSelectedGif }) => {
    const dispatch = useDispatch();
  return (
    <div className="images-preview">
      <div className="post-option-header">
        <h3 className="post-option-header-title">Upload Gif</h3>

        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setSelectedGif(null);
            dispatch(setCreateMessageOptions("normal"))
          }}
        >
          <MdClose />
        </button>
      </div>

      {selectedGif && (
        <>
          <div
            className="progress-stat-bar"
            style={{
              width: "100%",
              height: "4px",
              position: "relative",
              marginBottom:22,
              paddingRight:35
            }}
          >
            <div
              className="bar"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ddd",
              }}
            ></div>
            <div
              className="colored-bar"
              style={{
                width: `50%`,
                height: "100%",
                position: "absolute",
                top: 0,
                background: "linear-gradient(90deg, #fd6729, orange)",
              }}
            ></div>

            <p className="absolute top-[-5px] right-0 text-[14px]">50%</p>
          </div>
          <div className="img-preview-container mb-[20px]">
            <div className="img-preview-item">
              <img
                src={selectedGif?.images.fixed_height.url}
                alt={selectedGif?.title}
              />

              <button
                className="img-preview-close"
                onClick={() => {
                  setSelectedGif(null);
                }}
              >
                <MdClose />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const GifPreview = ({
  selectedGif,
  setSelectedGif,
}) => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState(null);

  const searchGifs = async (query) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=2Fe6dvj8EKnZMSPUE8vqnjxvBAXj2oHz&q=${query}&limit=10`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue); // Update query state with input value
    searchGifs(inputValue); // Call searchGifs with the updated query
  };
  return (
    <div className="w-full md:w-[700px] mx-auto mt-[1.5rem]">
      <GifDisplay
        selectedGif={selectedGif}
        setSelectedGif={setSelectedGif}
      />
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for GIFs"
          className="mb-[20px]"
        />
        <div
          className="grid !grid-cols-4 !gap-0"
          //   style={
          //     gifs.length > 12 ? {height:400 , overflowY:"scroll"} : {}
          //   }
        >
          {gifs?.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
              onClick={() => setSelectedGif(gif)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GifPreview;

import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseSellProducts,
  toggleSellProducts,
} from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";
import { BsCameraFill } from "react-icons/bs";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid'; // Import uuid library
import { FaTimes } from "react-icons/fa";
import FormInput from "../ui/formInput/FormInput";
import Select from "../ui/select/Select";
import { useSwipeable } from "react-swipeable";



const countries = [
  { value: "Afghanistan" },
  { value: "Albania" },
  { value: "Algeria" },
  { value: "Andorra" },
  { value: "Angola" },
];

const cities = [
  { value: "Kabul" },
  { value: "Tirana" },
  { value: "Algiers" },
  { value: "Andorra la Vella" },
  { value: "Luanda" },
];

const categories = [
  { value: "Category 1" },
  { value: "Category 2" },
  { value: "Category 3" },
];

const conditions = [
  { value: "Condition 1" },
  { value: "Condition 2" },
  { value: "Condition 3" },
];

const currencies = [
  { value: "USD" },
  { value: "EUR" },
  { value: "EGP" },
  { value: "SAR" },
  { value: "AED" },
];

const SellProducts = () => {
  const dispatch = useDispatch();
  const { isSellProductsModel } = useSelector(selectGlobal);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const chatRoomRef = useRef(null);

  const handleToggleSellProducts = () => {
    dispatch(toggleSellProducts());
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => ({
      id: uuidv4(), // Generate unique ID
      url: URL.createObjectURL(file)
    }));
    setSelectedImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (id) => {
    setSelectedImages(prevImages => prevImages.filter(image => image.id !== id));
  };

  // const handleOnDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const items = Array.from(selectedImages);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   setSelectedImages(items);
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   const files = Array.from(event.dataTransfer.files);
  //   const newImages = files.map(file => ({
  //     id: uuidv4(),
  //     url: URL.createObjectURL(file)
  //   }));
  //   setSelectedImages(prevImages => [...prevImages, ...newImages]);
  //   setIsDragOver(false);
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  //   setIsDragOver(true);
  // };

  // const handleDragLeave = () =>{
  //   setIsDragOver(false);
  // }

  const [position, setPosition] = useState(0);
  const [startY, setStartY] = useState(0);

  const [isSliding,setIsSliding] = useState(false)

  const disableScroll = () => {
    document.body.style.overscrollBehavior = 'none';
  };

  const enableScroll = () => {
    document.body.style.overscrollBehavior = 'auto';
  };

  const handlers = useSwipeable({
    onSwiping: ({ dir, deltaY }) => {
      if (dir === 'Up') {
        setPosition((prev) => Math.max(prev - deltaY, -window.innerHeight));
      } else if (dir === 'Down') {
        setPosition((prev) => Math.min(prev + deltaY, 0));
      }
    },
    // onSwipedUp: () => dispatch(toggleContacts()),
    // onSwipedDown: () => dispatch(FalseContacts()),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsSliding(true)
    disableScroll();
  };

  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const diffY = touchY - startY;
    if(diffY < 0){
      setPosition(0)
    }else{
      setPosition(diffY);
    }
  };

  const handleTouchEnd = () => {
    if (position > 100) {
      setPosition(800);
      dispatch(FalseSellProducts());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isSellProductsModel){
      setPosition(0)
    }
  } ,[isSellProductsModel])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && chatRoomRef.current == event.target) {
        dispatch(FalseSellProducts());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  


  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(0)
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener('scroll', handleScroll);

    return () => {
      scrollDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      ref={chatRoomRef}
      className={`overlay overflow-hidden ${
        isSellProductsModel ? "active-chat" : "disactive-chat"
      } `}
    >
      <div className={`new-chat ${
        isSellProductsModel ? "new-chat-active" : ""
        }`}
        {...handlers}
        style={ screen.width <= 768 ? { transform: `translateY(${position}px)`,
        transition: isSliding ? "none" : "" } : {} }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        <div className='drawer-heading block md:hidden'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block mb-[15px] mx-auto rounded-3xl'></span>
        </div>
        <div className="sell-product-container">
          <div className="flex items-center justify-between mb-8 px-[15px] md:px-0">
              <h2 className="sell-product-title !mb-0">Add a Listing to Classifieds</h2>
              <button className="hidden md:block w-fit p-2 text-[#adafca]" onClick={handleToggleSellProducts}><FaTimes /></button>
            </div>

          <form action="">
            <div className="wrap-new-chat" ref={scrollDivRef}>
              <div className="sell-product-form py-[15px]">
                <label
                  className={`sell-upload-product-img ${isDragOver ? "scale-125 !text-[#fd6729] !border-[#fd6729]" : ""}`}
                  htmlFor="upload-product-img"
                  // onDrop={handleDrop}
                  // onDragOver={handleDragOver}
                  // onDragLeave={handleDragLeave}
                >
                  <input
                    type="file"
                    id="upload-product-img"
                    style={{ display: "none" }}
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <BsCameraFill />
                  <p>Product image</p>
                </label>

                { selectedImages.length > 0 && (
                  <div
                  className="progress-stat-bar"
                  style={{
                    width: "100%",
                    height: "4px",
                    position: "relative",
                    marginBottom: 22,
                    paddingRight: 35,
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
                ) }

                { selectedImages.length > 0 && (
                  <div className="grid !grid-cols-2 md:!grid-cols-4">
                    {selectedImages.map((image, index) => (
                      <div className="thumbnail relative" key={index}>
                        <img
                          className="w-full h-full object-cover"
                          src={image.url}
                          alt={`Thumbnail ${index}`}
                        />
                        <button
                          type="button"
                          className="absolute top-[5px] right-[5px] bg-[#00000040] text-white w-[25px] h-[25px] flex items-center justify-center rounded-[50%]"
                          onClick={() => handleRemoveImage(image.id)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                ) }

                <FormInput label="Product name" name="product-name" type="text" />

                <div className="sell-product-form-item">
                  <Select defaultValue={"Country"} optionsArray={countries} />
                  <Select defaultValue={"City"} optionsArray={cities} />
                </div>

                <div className="sell-product-form-item">
                  <Select defaultValue={"Category"} optionsArray={categories} />
                  <Select defaultValue={"Condition"} optionsArray={conditions} />
                </div>

                <div className="sell-product-form-item">
                  <Select defaultValue={"Currency"} optionsArray={currencies} />
                  <FormInput label="Price" name="price" type="number" />
                </div>

                <FormInput
                  label="Description"
                  name="desc"
                  type="text"
                  className="sell-product-textarea"
                />
              </div>
            </div>
            <div className="flex gap-[15px] mt-[3rem] px-[15px] md:px-0">
              <button className="button white">Cancel</button>
              <button className="button primary">Sell product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;

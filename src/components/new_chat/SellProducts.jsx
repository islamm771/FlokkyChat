import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseSellProducts,
  toggleSellProducts,
} from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";

const SellProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { isSellProductsModel } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null);

  const handleToggleSellProducts = () => {
    dispatch(toggleSellProducts());
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch(FalseSellProducts());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      className={`overlay overflow-hidden ${
        isSellProductsModel ? "active-chat" : "disactive-chat"
      } `}
    >
      <div ref={chatRoomRef} className={`new-chat ${
        isSellProductsModel ? "new-chat-active" : ""
        }`}>
        <div className="tab-new-chat">
          {/* <ul>
            <li className="active tabs-enter">
              <MdProductionQuantityLimits /> New Product
            </li>
          </ul> */}
          <div className="header-Report">
              <h5>Create New Product</h5>
          </div>
        </div>
        <form>
          <div className="wrap-new-chat">
            {/* <div className="header-Report">
              <h5>Create New Product</h5>
            </div> */}
            {/* <hr /> */}
            <div className="wrap-inputs-Report">
              <div className="inpt-newchat">
                <p>Product Name</p>
                <input type="text" placeholder="Product Name" />
              </div>
              <div className="inpt-newchat">
                <p>Country</p>
                <select name="" id="">
                  <option value="">Select Country</option>
                  <option value="">Country1</option>
                  <option value="">Country2</option>
                  <option value="">Country3</option>
                </select>
              </div>
              <div className="inpt-newchat">
                <p>City</p>
                <select name="" id="">
                  <option value="">Select City</option>
                  <option value="">City1</option>
                  <option value="">City2</option>
                  <option value="">City3</option>
                </select>
              </div>
              <div className="inpt-newchat">
                <p>Category</p>
                <select name="" id="">
                  <option value="">Select Category</option>
                  <option value="">Category1</option>
                  <option value="">Category2</option>
                  <option value="">Category3</option>
                </select>
              </div>
              <div className="inpt-newchat">
                <p>Currency</p>
                <select name="" id="">
                  <option value="">Select Currency</option>
                  <option value="">Currency1</option>
                  <option value="">Currency2</option>
                  <option value="">Currency3</option>
                </select>
              </div>
              <div className="inpt-newchat">
                <p>Price</p>
                <input type="text" placeholder="Price" />
              </div>
              <div className="inpt-newchat">
                <p>Condition</p>
                <select name="" id="">
                  <option value="">Select Condition</option>
                  <option value="">New</option>
                  <option value="">Used</option>
                </select>
              </div>
              <div className="inpt-newchat">
                <p>Stock</p>
                <input type="number" placeholder="Stock" />
              </div>
              <div className="inpt-newchat">
                <p>Description</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Room Description"
                ></textarea>
              </div>
              <div className="inpt-newchat">
                <p>Images</p>
                <div className="wrap-images-sell-product">
                  {selectedImage ? (
                    <div className="selected-image">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                      />
                      <p onClick={()=>setSelectedImage(null)} className="Clear-Selected-Image">X</p>
                    </div>
                  ) : (
                    <>
                      <IoCloudUploadOutline />
                      <p className="txt-image-input">Upload Image</p>
                      <input
                        type="file"
                        name=""
                        id=""
                        onChange={handleImageChange}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="btn-newChat">
            <button
              type="button"
              onClick={handleToggleSellProducts}
              className="closeReport"
            >
              Close
            </button>
            <button className="SubmitReport">Save Product</button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default SellProducts;

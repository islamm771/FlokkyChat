import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal, FalseContacts, toggleContacts } from "../../app/feature/ListChatSlice";
import { FaCircle, FaPaperPlane, FaTimes } from "react-icons/fa";
import FormInputwithIcon from "../ui/formInputWithSearchIcon/FormInputwithIcon";
import { HiDotsVertical } from "react-icons/hi";
import { useSwipeable } from 'react-swipeable';


const contacts = [
  { id: 1, name: 'Snow', email: 'Jon', contact: 35, avatar: '/img/avatar/01.jpg' },
  { id: 2, name: 'Lannister', email: 'Cersei', contact: 42, avatar: '/img/avatar/02.jpg' },
  { id: 3, name: 'Lannister', email: 'Jaime', contact: 45, avatar: '/img/avatar/05.jpg' },
  { id: 4, name: 'Stark', email: 'Arya', contact: 16, avatar: '/img/avatar/06.jpg' },
  { id: 5, name: 'Targaryen', email: 'Daenerys', contact: null, avatar: '/img/avatar/07.jpg' },
  { id: 6, name: 'Melisandre', email: null, contact: 150, avatar: '/img/avatar/09.jpg' },
  { id: 7, name: 'Clifford', email: 'Ferrara', contact: 44, avatar: '/img/avatar/10.jpg' },
  { id: 8, name: 'Frances', email: 'Rossini', contact: 36, avatar: '/img/avatar/11.jpg' },
  { id: 9, name: 'Roxie', email: 'Harvey', contact: 65, avatar: '/img/avatar/12.jpg' },
  { id: 11, name: 'Snow', email: 'Jon', contact: 35, avatar: '/img/avatar/14.jpg' },
  { id: 12, name: 'Lannister', email: 'Cersei', contact: 42, avatar: '/img/avatar/15.jpg' },
];

const sortedContacts = contacts.reduce((groupedRows, row) => {
  const firstLetter = row.name.slice(0, 1).toUpperCase();
  return {
    ...groupedRows,
    [firstLetter]: [...(groupedRows[firstLetter] || []), row],
  };
}, {});

const Contacts = () => {
  const [selected, setSelected] = useState(false);
  const [activeList , setActiveList] = useState(-1)
  const dispatch = useDispatch();
  const SendCodeRef = useRef(null);
  const { isContactsModel } = useSelector(selectGlobal);

  const contactListRef = useRef(null)

  const handleActiveList = (id) => {
    setActiveList( prev => prev == id ? -1 : id )
  }

  let chars = Object.keys(sortedContacts).sort();
  const renderContacts = chars.map((char) => (
    <React.Fragment key={char}>
      <div className="contact-char flex items-center gap-[25px] px-[10px]">
        <p className="text-xl font-semibold">{char}</p>
        <hr className="flex-1" />
      </div>
      {sortedContacts[char].map((contact) => (
        <div className="content-info-forw" key={contact.id}>
          {/* <input type="checkbox" onChange={() => setSelected(!selected)} /> */}
          <div className="info">
            <img src={contact.avatar} alt="" className="people-img" />
            <div className="info-forw">
              <div className="admin-for">
                <p>{contact.name}</p>
              </div>
              <p className="online">
                <FaCircle /> Online
              </p>
            </div>
          </div>
          <div className="relative">
            <span className="cursor-pointer" onClick={ () => handleActiveList(contact.id) }>
              <HiDotsVertical />
            </span>
            <ul 
            className="simple-dropdown absolute z-[9999] top-[25px] right-[0]"
            style={{
              opacity: `${activeList == contact.id ? "1" : "0"}`,
              visibility: `${activeList == contact.id ? "visible" : "hidden"}`,
              transform: `translate(0px, ${activeList == contact.id ? "0px" : "-40px"})`,
              transition:
                "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            ref={contactListRef}
            >
              <li className="simple-dropdown-link">Block</li>
              <li className="simple-dropdown-link">Share</li>
            </ul>
          </div>
        </div>
      ))}
    </React.Fragment>
  ));


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
      dispatch(FalseContacts());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isContactsModel){
      setPosition(0)
    }
  } ,[isContactsModel])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SendCodeRef.current && SendCodeRef.current == event.target) {
        dispatch(FalseContacts());
      }
      if (contactListRef.current && !contactListRef.current.contains(event.target)) {
        setActiveList(-1)
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
    <div ref={SendCodeRef} className={`overlay-forward overflow-hidden ${isContactsModel ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div 
      className={`ForwardMessage-Model ${isContactsModel ? "active" : ""}`} 
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
        <div className="header-forward">
          <h5>Contacts</h5>
          <button className="w-fit p-2 text-[#adafca] hidden md:block"
            onClick={() => dispatch(FalseContacts())}>
            <FaTimes />
          </button>
        </div>
        <div className="Search-people-chat">
          <FormInputwithIcon
            name="Search-People"
            id="Search-People"
            label="Search Contacts"
          />
          <div style={{ marginBottom: "5px" }}></div>
        </div>
        <div className="wrap-new-chat pb-[15px] md:pb-0 !pr-[20px]" ref={scrollDivRef}>
          {renderContacts}
        </div>
        {selected && (
          <div className="send-forward">
            <div className="name-send-to-forward">
              <p>Tony Stark</p>
            </div>
            <div className="icon-send-froward">
              <FaPaperPlane />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;

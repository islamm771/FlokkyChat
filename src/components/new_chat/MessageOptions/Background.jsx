import React from 'react'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setCreateMessageOptions } from '../../../app/feature/ListChatSlice'
import { BsEmojiSmile } from 'react-icons/bs'

const Background = ({ activeBg, setActiveBg, val, setValue }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="quick-post-body">
                <form className="form">
                    <div className={`form-textarea with-bg bg-gradient-option-${activeBg}`}
                    >
                        <textarea
                            id="quick-post-text"
                            name="quick-post-text"
                            placeholder="What's going on? #Hashtag.. @Mention.. Link.."
                            value={val}
                            onChange={(e) => setValue(e.target.value)}
                        // onFocus={() => handleQuickPost(true)}
                        ></textarea>

                        <div className="post-form-textarea-footer relative">
                            <p
                                className={`form-textarea-limit-text ${val.length > 4000 ? "text-danger" : ""
                                    }`}
                            >
                                {val.length > 4000
                                    ? 4000 - val.length
                                    : val.length}
                                /4000
                            </p>

                            <button type="button" className="post-emoji-btn" onClick={() => setIsEmojiListOpen(prev => !prev)}>
                                <BsEmojiSmile />
                            </button>

                            {/* { isEmojiListOpen && (
                                        <div className="emojii absolute right-[0px] top-[30px] z-[99999]">
                                            <EmojiPickerr onSelect={handleEmojiSelect} />
                                        </div>
                                    )} */}
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-colors-container">
                <div className="bg-colors-content">
                    {new Array(12).fill(0).map((_, i) => (
                        <button
                            className={`bg-color-btn bg-gradient-option-${i + 1} ${activeBg === i + 1 ? "active" : ""}`}
                            onClick={() => setActiveBg(i + 1)}
                            key={i}
                        ></button>
                    ))}
                </div>

                <button className="bg-colors-close-btn"
                    onClick={() => dispatch(setCreateMessageOptions("normal"))}
                >
                    <MdClose />
                </button>
            </div>
        </div>
    )
}

export default Background
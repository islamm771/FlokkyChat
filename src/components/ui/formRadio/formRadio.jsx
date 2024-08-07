import React from 'react';
import { GoDotFill } from 'react-icons/go';
import "./formRadio.css"

const FormRadio = ({ label, name, id }) => {
    return (
        <div className="form-item">
            {/* <!-- Radio WRAP --> */}
            <div className="radio-wrap">
                <input
                    type="radio"
                    id={id}
                    name={name}
                />
                {/* <!-- Radio BOX --> */}
                <div className="radio-box">
                    <GoDotFill />
                </div>
                {/* <!-- /Radio BOX --> */}
                {label && <label htmlFor={id}>{label}</label>}
            </div>
            {/* <!-- /Radio WRAP --> */}
        </div>
    );
};
export default FormRadio;
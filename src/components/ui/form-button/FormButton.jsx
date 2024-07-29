import "./form-button.css";

const FormButton = ({ onClick, style, title, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} form-button`}
        style={{ ...style }}
      >
        {title}
      </button>
    </div>
  );
};

export default FormButton;

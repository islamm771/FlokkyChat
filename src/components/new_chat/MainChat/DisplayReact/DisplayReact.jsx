const DisplayReact = ({ data, handleToggleModelCodeSnipest, like }) => {
  return (
    <>
      {data.liked && (
        <div className="display-react" onClick={handleToggleModelCodeSnipest}>
          <div className="react">
            <img src={like} alt="" />
          </div>
          <div className="count">1</div>
        </div>
      )}
    </>
  );
};

export default DisplayReact;

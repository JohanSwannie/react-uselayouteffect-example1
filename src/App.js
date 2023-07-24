import React, { useState, useRef, useLayoutEffect } from "react";

function App() {
  const [show, setShow] = useState(false);
  const h3Ref = useRef();

  useLayoutEffect(() => {
    if (show) {
      h3Ref.current.style.margin = "1rem 30rem";
    }
  }, [show]);

  const h3Style1 = {
    margin: "1rem 2rem",
    color: "Red",
  };

  const h3Style2 = {
    color: "Red",
  };

  const buttonStyle = {
    position: "absolute",
    top: "10rem",
    left: "2rem",
    color: "#FFF",
    backgroundColor: "navy",
    padding: ".8rem",
  };

  return (
    <div className="App">
      {!show ? (
        <h3 style={h3Style1}>We can now show the code at this position</h3>
      ) : (
        <h3 style={h3Style2} ref={h3Ref}>
          We can now show the code at this position
        </h3>
      )}
      <button onClick={() => setShow(!show)} style={buttonStyle}>
        Toggle
      </button>
    </div>
  );
}

export default App;

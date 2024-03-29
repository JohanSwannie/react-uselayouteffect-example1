import React, { useState, useRef, useLayoutEffect } from "react";

function App() {
  const [show, setShow] = useState(false);
  const h3Ref = useRef();
  const buttonRef = useRef();

  useLayoutEffect(() => {
    if (h3Ref.current == null || buttonRef.current == null) {
      return;
    }
    const { bottom } = buttonRef.current.getBoundingClientRect();
    h3Ref.current.style.top = `${bottom + 400}px`;
  }, [show]);

  const h3Style1 = {
    position: "absolute",
    color: "Red",
  };

  const h3Style2 = {
    position: "absolute",
    top: "7rem",
    color: "navy",
  };

  const buttonStyle = {
    color: "#FFF",
    backgroundColor: "navy",
    padding: ".8rem",
  };

  return (
    <div className="App">
      <button
        ref={buttonRef}
        style={buttonStyle}
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show ? (
        <h3 ref={h3Ref} style={h3Style1}>
          We can show that the code has now moved to this position
        </h3>
      ) : (
        <h3 style={h3Style2}>The code is now in this position</h3>
      )}
    </div>
  );
}

export default App;

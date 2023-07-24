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
    h3Ref.current.style.top = `${bottom + 150}px`;
  }, [show]);

  const h3Style = {
    position: "absolute",
    color: "Red",
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
      {show && (
        <h3 ref={h3Ref} style={h3Style}>
          We can now show the code at this position
        </h3>
      )}
    </div>
  );
}

export default App;

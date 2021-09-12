import React, { useState } from "react";
// import "./mediaQuerry.css";

function FloorsTwo() {
  const [currentFloor, setcurrentFloor] = useState("0");
  const [userInput, setUserInput] = useState("");
  const textInput = React.createRef();

  /**
   * Moving the lift in between the floors
   */
  function moveBetweenFloors(e) {
    const currentBttn = e.target.id;
    setcurrentFloor(+currentBttn);
  }

  /**
   * Adding floors based on user input
   */
  const addFloors = () => {
    setUserInput(textInput.current.value);
  };

  /* Fixed floors statitcs */

  const floors = [
    { upBtton: "UP", downBttton: "Down", floor: "F-3", id: "3" },
    { upBtton: "UP", downBttton: "Down", floor: "F-2", id: "2" },
    { upBtton: "UP", downBttton: "Down", floor: "F-1", id: "1" },
  ];

  return (
    <div>
      <div className="inputDiv">
        <input
          placeholder="Set No. of Floors"
          type="number"
          id="floor"
          ref={textInput}
          max="1"
        />
        <button onClick={(e) => addFloors()}>Add Floors</button>
      </div>

      <section className="floorSection">
        {/* Maping through user input and rendering the floors */}
        {parseInt(userInput) >= 0 ? (
          <>
            {[...new Array(parseInt(userInput))]
              .map((i, index, arr) => (
                <div key={index + 1} className="floor4 floors">
                  {index === arr.length - 1 ? (
                    <div className="buttonsDiv">
                      <button
                        className="bttn"
                        id={index + 4}
                        onClick={(e) => moveBetweenFloors(e)}
                      >
                        Down
                      </button>
                    </div>
                  ) : (
                    <div className="buttonsDiv">
                      <button
                        className="bttn"
                        id={index + 4}
                        onClick={(e) => moveBetweenFloors(e)}
                      >
                        UP
                      </button>

                      <button
                        className="bttn"
                        id={index + 4}
                        onClick={(e) => moveBetweenFloors(e)}
                      >
                        Down
                      </button>
                    </div>
                  )}

                  <div className="room">
                    <div className="balcony"></div>
                  </div>
                  <div className="room">
                    <div className="balcony"></div>
                  </div>
                  <div className="room">
                    <div className="balcony"></div>
                  </div>
                  <h3 className="floorName">F-{index + 4}</h3>
                </div>
              ))
              .reverse()}
          </>
        ) : (
          ""
        )}

        {/* Maping through Fixed floors statitcs rendering the floors */}

        {floors.map((item) => (
          <div key={item.id} className="floor4 floors">
            <div className="buttonsDiv">
              <button
                className="bttn"
                id={item.id}
                onClick={(e) => moveBetweenFloors(e)}
              >
                {item.upBtton}
              </button>

              <button
                className="bttn"
                id={item.id}
                onClick={(e) => moveBetweenFloors(e)}
              >
                {item.downBttton}
              </button>
            </div>
            <div className="room">
              <div className="balcony"></div>
            </div>
            <div className="room">
              <div className="balcony"></div>
            </div>
            <div className="room">
              <div className="balcony"></div>
            </div>
            <h3 className="floorName">{item.floor}</h3>
          </div>
        ))}

        {/* Lift div */}

        <div className="liftDiv ">
          <div className="buttonsDiv">
            <button
              className="bttn"
              id="0"
              onClick={(e) => moveBetweenFloors(e)}
            >
              UP
            </button>
          </div>
          <div
            className="lift"
            style={{ transform: `translateY(-${currentFloor * 160}px)` }}
          >
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FloorsTwo;

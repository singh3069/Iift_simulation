import React, { useState } from "react";

function FloorsTwo() {
  const [currentFloor, setcurrentFloor] = useState("0");
  const [userInput, setUserInput] = useState("");
  const textInput = React.createRef();

  function moveBetweenFloors(e) {
    const currentBttn = e.target.id;
    setcurrentFloor(+currentBttn);
  }

  const addFloors = () => {
    setUserInput(textInput.current.value);
  };

  const floors = [
    { upBtton: "UP", downBttton: "Down", floor: "F-3", id: "3" },
    { upBtton: "UP", downBttton: "Down", floor: "F-2", id: "2" },
    { upBtton: "UP", downBttton: "Down", floor: "F-1", id: "1" },
  ];

  const rowLen = userInput.length;

  return (
    <div>
      <div className="inputDiv">
        <input
          placeholder="Set No. of Floors"
          type="number"
          id="floor"
          ref={textInput}
        />
        <button onClick={(e) => addFloors()}>Add Floors</button>
      </div>

      <section className="floorSection">
        {/* <div className="floor4 floors"> */}
        {/* <div className="buttonsDiv"> */}
        {/* <button
              className="bttn"
              // id="5"
              // onClick={(e) => moveBetweenFloors(e)}
            >
              Down
            </button> */}
        {/* </div> */}
        {/* <h3>Top Floor</h3> */}
        {/* </div> */}
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
            style={{ transform: `translateY(-${currentFloor * "160"}px)` }}
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

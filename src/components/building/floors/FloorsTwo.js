import React, { useState } from "react";

function FloorsTwo() {
  const [floorNum, setFloorNum] = useState();
  const [currentFloor, setcurrentFloor] = useState("0");
  const [userInput, setUserInput] = useState("");
  const textInput = React.createRef();

  var increment = (function (n) {
    return function () {
      n += 1;
      return n;
    };
  })(0);

  function moveBetweenFloors(e) {
    const currentBttn = e.target.id;
    setcurrentFloor(+currentBttn);
  }

  const addFloors = () => {
    setUserInput(textInput.current.value);
  };

  const floors = [
    { upBtton: "UP", downBttton: "Down", floor: "Floor3", id: "3" },
    { upBtton: "UP", downBttton: "Down", floor: "Floor2", id: "2" },
    { upBtton: "UP", downBttton: "Down", floor: "Floor1", id: "1" },
  ];

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
              .map((i, index) => (
                <div key={index + 1} className="floor4 floors">
                  <div className="buttonsDiv">
                    {Math.max() && (
                      <button
                        className="bttn"
                        id={index + 4}
                        onClick={(e) => moveBetweenFloors(e)}
                      >
                        UP
                      </button>
                    )}

                    <button
                      className="bttn"
                      id={index + 4}
                      onClick={(e) => moveBetweenFloors(e)}
                    >
                      Down
                    </button>
                  </div>
                  <div class="room">
                    <div class="balcony"></div>
                  </div>
                  <div class="room">
                    <div class="balcony"></div>
                  </div>
                  <div class="room">
                    <div class="balcony"></div>
                  </div>
                  <h3 class="floorName">Floor{index + 4}</h3>
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
            <div class="room">
              <div class="balcony"></div>
            </div>
            <div class="room">
              <div class="balcony"></div>
            </div>
            <div class="room">
              <div class="balcony"></div>
            </div>
            <h3 class="floorName">{item.floor}</h3>
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
            style={{ transform: `translateY(-${currentFloor * "137.6"}px)` }}
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

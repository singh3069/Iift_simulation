import React, { useState, createRef } from "react";
// import "./mediaQuerry.css";

function FloorsTwo() {
  const [currentFloor, setcurrentFloor] = useState("0");

  /**
   * Moving the lift in between the floors
   */
  function moveBetweenFloors(e) {
    const currentBttn = e.target.id;
    setcurrentFloor(+currentBttn);
  }

  /* Fixed floors statitcs */
  const floors = [
    { downBttton: "Down", floor: "F-10", id: "10" },
    { upBtton: "UP", downBttton: "Down", floor: "F-9", id: "9" },
    { upBtton: "UP", downBttton: "Down", floor: "F-8", id: "8" },
    { upBtton: "UP", downBttton: "Down", floor: "F-7", id: "7" },
    { upBtton: "UP", downBttton: "Down", floor: "F-6", id: "6" },
    { upBtton: "UP", downBttton: "Down", floor: "F-5", id: "5" },
    { upBtton: "UP", downBttton: "Down", floor: "F-4", id: "4" },
    { upBtton: "UP", downBttton: "Down", floor: "F-3", id: "3" },
    { upBtton: "UP", downBttton: "Down", floor: "F-2", id: "2" },
    { upBtton: "UP", downBttton: "Down", floor: "F-1", id: "1" },
  ];

  return (
    <div>
      <h2 className="heading">Lift Simulation</h2>
      <section className="floorSection">
        {/* Maping through Fixed floors statitcs rendering the floors */}

        {floors.map((item) => (
          <div key={item.id} className="floor4 floors">
            {item.id === "10" ? (
              <div className="buttonsDiv">
                <button
                  className="bttn"
                  id={item.id}
                  onClick={(e) => moveBetweenFloors(e)}
                >
                  {item.downBttton}
                </button>
              </div>
            ) : (
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
            )}
            <h3 className="floorName">{item.floor}</h3>
          </div>
        ))}

        {/* Lift div */}

        <div className="floors ">
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
            style={{ transform: `translateY(-${currentFloor * 174}px)` }}
          >
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
          <div
            className="lift_2"
            style={{ transform: `translateY(-${currentFloor * 174}px)` }}
          >
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
          <div
            className="lift_3"
            style={{ transform: `translateY(-${currentFloor * 174}px)` }}
          >
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
          <h3 className="floorName">Ground-Floor</h3>
        </div>
      </section>
    </div>
  );
}

export default FloorsTwo;

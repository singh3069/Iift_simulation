import React, { useState, useEffect, useRef } from "react";
// import "./mediaQuerry.css";

function FloorsTwo() {
  const [currentFloor, setcurrentFloor] = useState("0");
  const [storeFloorNum, setStoreFloorNum] = useState([]);
  // const [newFloor, setNewFloor] = useState();
  const prevFloorNum = useRef();

  useEffect(() => {
    prevFloorNum.current = currentFloor;
  }, [currentFloor]);
  const prevFloorCount = prevFloorNum.current;

  // const nextFloor = storeFloorNum.map((item) => ({
  //   transform: `translateY(-${item * 174}px)`,
  // }));

  const nextFloor = storeFloorNum.map((item) => {
    return `translateY(-${item * 174}px)`;
  });

  console.log(nextFloor);

  const style = {
    transform: `translateY(-${currentFloor * 174}px)`,
    // transform: nextFloor,
    transitionDuration: `${(currentFloor - prevFloorCount) * 2}s`,
  };

  // console.log("current" + currentFloor);
  // console.log("previoua" + prevFloorCount);
  console.log(storeFloorNum);
  // console.log("style " + style);
  // console.log("nextfloor " + nextFloor);
  // console.log(JSON.stringify(nextFloor));
  /**
   * Moving the lift in between the floors
   */
  function moveBetweenFloors(e) {
    const currentBttn = e.target.id;
    setcurrentFloor(+currentBttn);
    setStoreFloorNum([...storeFloorNum, currentBttn]);
  }

  /* Fixed floors statitcs */
  const floors = [
    { downBttton: "Down", floor: "F-10", id: 10 },
    { upBtton: "UP", downBttton: "Down", floor: "F-9", id: 9 },
    { upBtton: "UP", downBttton: "Down", floor: "F-8", id: 8 },
    { upBtton: "UP", downBttton: "Down", floor: "F-7", id: 7 },
    { upBtton: "UP", downBttton: "Down", floor: "F-6", id: 6 },
    { upBtton: "UP", downBttton: "Down", floor: "F-5", id: 5 },
    { upBtton: "UP", downBttton: "Down", floor: "F-4", id: 4 },
    { upBtton: "UP", downBttton: "Down", floor: "F-3", id: 3 },
    { upBtton: "UP", downBttton: "Down", floor: "F-2", id: 2 },
    { upBtton: "UP", downBttton: "Down", floor: "F-1", id: 1 },
  ];

  return (
    <div>
      <h2 className="heading">Lift Simulation</h2>
      <h3 className="link">
        <a href="https://github.com/singh3069/Iift_simulation">Code</a>
      </h3>
      <section className="floorSection">
        {/* Maping through Fixed floors statitcs rendering the floors */}

        {floors.map((item) => (
          <div key={item.id} className="floor4 floors">
            {item.id === 10 ? (
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

          <div className="lift" style={style}>
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
          {/* <div className="lift_2" style={trans}>
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div>
          <div className="lift_3" style={trans}>
            <div className="liftLeftDoor"></div>
            <div className="liftRightDoor"></div>
          </div> */}
          <h3 className="floorName">Ground-Floor</h3>
        </div>
      </section>
    </div>
  );
}

export default FloorsTwo;

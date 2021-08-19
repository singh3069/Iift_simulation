import { React, useState } from "react";

function Floors() {
  const [currentFloor, setcurrentFloor] = useState(0);

  function moveBetweenFloors(e) {
    // console.log(e.target.id)
    const currentBttn = e.target.id;
    
    setcurrentFloor(+currentBttn);
  }

  return (
    <div>
      <section className="floorSection">
        <div className="floor4 floors">
          <div className="buttonsDiv">
            <button
              className="bttn"
              id="4"
              onClick={(e) => moveBetweenFloors(e)}
            >
              UP
            </button>
            {/* <button>Down</button> */}
          </div>
          <h3>floor4</h3>
        </div>

        <div className="floor3 floors">
          <div className="buttonsDiv">
            <button
              className="bttn"
              id="3"
              onClick={(e) => moveBetweenFloors(e)}
            >
              UP
            </button>
            <br />
            <button
              className="bttn"
              id="3"
              onClick={(e) => moveBetweenFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>floor3</h3>
        </div>

        <div className="floor2 floors">
          <div className="buttonsDiv">
            <button
              className="bttn"
              id="2"
              onClick={(e) => moveBetweenFloors(e)}
            >
              UP
            </button>
            <br />
            <button
              className="bttn"
              id="2"
              onClick={(e) => moveBetweenFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>floor2</h3>
        </div>

        <div className="floor1 floors">
          <div className="buttonsDiv">
            <button
              className="bttn"
              id="1"
              onClick={(e) => moveBetweenFloors(e)}
            >
              UP
            </button>
            <br />
            <button
              className="bttn"
              id="1"
              onClick={(e) => moveBetweenFloors(e)}
            >
              Down
            </button>
          </div>
          <h3>floor1</h3>
        </div>

        <div className="liftDiv">
          <div className="buttonsDiv">
            {/* <button className="bttn">UP</button> */}
            {/* <br /> */}
            <button
              className="bttn"
              id="0"
              onClick={(e) => moveBetweenFloors(e)}
            >
              Down
            </button>
          </div>
          <div
            className="lift"
            style={{ transform: `translateY(-${currentFloor * 127}px)` }}
          ></div>
        </div>
      </section>
    </div>
  );
}

export default Floors;

import React from "react";

function Floors() {
  return (
    <div>
      <section className="floorSection">
        <div className="floor4 floors">
          <div className="buttonsDiv">
            <button className="bttn">UP</button>
            {/* <button>Down</button> */}
          </div>
          <h3>floor4</h3>
        </div>

        <div className="floor3 floors">
          <div className="buttonsDiv">
            <button className="bttn">UP</button>
            <br />
            <button className="bttn">Down</button>
          </div>
          <h3>floor3</h3>
        </div>

        <div className="floor2 floors">
          <div className="buttonsDiv">
            <button className="bttn">UP</button>
            <br />
            <button className="bttn">Down</button>
          </div>
          <h3>floor2</h3>
        </div>

        <div className="floor1 floors">
          <div className="buttonsDiv">
            <button className="bttn">UP</button>
            <br />
            <button className="bttn">Down</button>
          </div>
          <h3>floor1</h3>
        </div>

        <div className="liftDiv">
          <div className="buttonsDiv">
            {/* <button className="bttn">UP</button> */}
            {/* <br /> */}
            <button className="bttn">Down</button>
          </div>
          <div className="lift"></div>
        </div>
      </section>
    </div>
  );
}

export default Floors;

import React from "react";
import LineInput from "../../../../components/lineInput/lineInput";
import "./plans.scss";

const hours = [
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 PM",
];

export default function Plans({}) {
  const onChangeInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <form className="timeForm">
          <h4 style={{ marginLeft: "30px", marginBottom: "0px" }}>
            Plans & Schedules
          </h4>
          <br></br>
          <div>
            {hours.map((hour, index) => (
              <div key={hour + index} style={{ marginBottom: "5px" }}>
                <label style={{ margin: "10px" }}>{hour}</label>
                {/* <input className="timeInput"></input> */}
                <LineInput
                  withCheckbox={false}
                  className="timeInput"
                  onChange={onChangeInput(event)}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

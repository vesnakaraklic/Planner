import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LineInput from "../../../../components/lineInput/lineInput";
import { plansActions } from "../../../../store/actions/plans.actions";
import { plansInitialState } from "../../../../store/reducers/plans.reducer";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import { cloneDeep } from "lodash";
import "./plans.scss";

const hours = {
  AM_06: "06:00 AM",
  AM_07: "07:00 AM",
  AM_08: "08:00 AM",
  AM_09: "09:00 AM",
  AM_10: "10:00 AM",
  AM_11: "11:00 AM",
  PM_12: "12:00 PM",
  PM_01: "01:00 PM",
  PM_02: "02:00 PM",
  PM_03: "03:00 PM",
  PM_04: "04:00 PM",
  PM_05: "05:00 PM",
  PM_06: "06:00 PM",
  PM_07: "07:00 PM",
  PM_08: "08:00 PM",
  PM_09: "09:00 PM",
  PM_10: "10:00 PM",
  PM_11: "11:00 PM",
  AM_12: "12:00 AM",
};

const Plans = ({ plans, date }) => {
  // const user = useSelector((state) => state.user.user);
  // const dateRedux = useSelector((state) => state.datePicker.date);
  // const [plansKeys, setPlansKeys] = useState([]);
  const dispatch = useDispatch();

  const onChangeInput = (value, key) => {
    dispatch(plansActions.updatePlan({ ...plans, [key]: value }));
  };

  // useEffect(() => {
  //   const fetch = async () => {
  //     const date = getDateWithoutHours(dateRedux);
  //     let idUser = user.uid + date;
  //     await dispatch(plansActions.getPlansById(idUser));
  //   };
  //   fetch();
  // }, [dateRedux]);

  // useEffect(() => {
  //   console.warn(plans);
  //   if (Object.keys(plans).length > 0) setPlansKeys(Object.keys(plans));
  // }, [plans]);

  return (
    <>
      <div>
        <p className="title">Plans & Schedules</p>
        <div>
          {Object.keys(plans).length > 0 &&
            Object.keys(plans).map((planKey, index) => (
              <div key={planKey + index + date} style={{ marginBottom: "7px" }}>
                <label className="hourStyle">{hours[planKey]}</label>
                <LineInput
                  withCheckbox={false}
                  className="timeInput"
                  type="text"
                  value={plans[planKey] ?? ""}
                  onChange={(e) => onChangeInput(e.target.value, planKey)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Plans;

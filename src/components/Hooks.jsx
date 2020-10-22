import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action } from "../store/actions/action";

const Hooks = () => {
  const mapSatate = useSelector((state) => state);
  console.log(mapSatate.corona);
  const dispatchAction = useDispatch();
  return (
    <>
      <h1>My name is {mapSatate.User_Data.user_name}</h1>
      <button onClick={() => dispatchAction(Action("Muhammad ALi"))}>
        Change Name using Hooks
      </button>
    </>
  );
};

export default Hooks;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiAction } from "../store/actions/action";

const Corona = () => {
  const mapState = useSelector((state) => state);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(apiAction());
  }, []);

  return (
    <>
      <h2>My Country is {mapState.corona.data.Country}</h2>
    </>
  );
};

export default Corona;

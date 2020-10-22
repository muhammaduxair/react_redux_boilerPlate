import React from "react";
import { connect } from "react-redux";
import { Action } from "../store/actions/action";

const First = (props) => {
  return (
    <>
      <h1>Hello World</h1>
      <h2>My name is {props.myName}</h2>
      <button onClick={() => props.changeName("Muhammad Khan")}>
        Change Name
      </button>
    </>
  );
};

const mapSatateToProps = (state) => {
  return {
    myName: state.User_Data.user_name,
    myEmail: state.User_Data.user_email,
    appName: state.App_Data.app_name,
    appModel: state.App_Data.app_model,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => dispatch(Action(name)),
  };
};

export default connect(mapSatateToProps, mapDispatchToProps)(First);

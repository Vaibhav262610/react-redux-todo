import React from "react";
import { useDispatch } from "react-redux";
import { fakeData } from "../api";
import userSlice from "../store/slices/userSlices";
import { addUsers } from "../store/slices/userSlices";
import DisplayUsers from "./DisplayUsers";

const ReduxTodo = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUsers(name));
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-4/12 bg-gray-700 p-12 rounded-lg">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold">List of User Details</h1>
            <button
              className="btn btn-add"
              onClick={() => addNewUser(fakeData())}
            >
              Add New User
            </button>
          </div>
          <div className="flex flex-col items-center p-8">
            <DisplayUsers />
          </div>
          <hr />
          <div className="flex pt-8  justify-end">
            <button className="btn btn-clear">Clear All Data</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReduxTodo;
export const { addUser } = userSlice.action;

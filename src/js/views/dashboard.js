import React from "react";
import Calendar from "react-calendar";
// import { signOut } from "../component/signOut";
import { useHistory } from "react-router-dom";
import { signOut } from "../utilities/signOut";
import { calendar } from "react-calendar";

export const Dashboard = () => {
	const history = useHistory();
	return (
		<>
			<button
				className="col-3 bg-success"
				onClick={() => {
					history.push("/contacts");
				}}>
				Profile
			</button>
			<i className="far fa-plus-square far-7x" onClick={() => history.push("/newEvent")} />
			<Calendar style={{ width: "250px" }} />
			<div />{" "}
			<button
				className="col-3 bg-danger"
				onClick={() => {
					signOut();
					history.push("/");
				}}>
				LogOut
			</button>
		</>
	);
};

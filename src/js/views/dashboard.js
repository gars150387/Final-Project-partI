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
			<div className="row d-inline">
				<button className="col-md-4 ml-auto bg-success">
					<i className="far fa-plus-square far-9x" onClick={() => history.push("/newEvent")} />
					Create Event
				</button>
				<button
					className="col-md-4 ml-auto bg-secondary"
					onClick={() => {
						history.push("/contacts");
					}}>
					Profile
				</button>
				<button
					className="col-3 bg-danger"
					onClick={() => {
						signOut();
						history.push("/");
					}}>
					LogOut
				</button>
			</div>
			<Calendar style={{ width: "250px" }} />
			<div />{" "}
		</>
	);
};

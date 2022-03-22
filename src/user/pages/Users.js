import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [{
		id: 'u1', 
		name: "everson", 
		image: "https://i.pinimg.com/originals/e1/55/07/e155078c2fd1890340745b1fcd697a0d.jpg", 
		places: 3
	}];
	return <UsersList items={USERS} />
}

export default Users;
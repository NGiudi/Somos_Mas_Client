// import from react.
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import local files.
import MessagePage from "../WebPages/MessagePage/MessagePage";

// import constants.
import { BACKOFFICE_NO_PERMITION } from "../../constants/messagesPages";
import { ROLE_ID_ADMIN } from "../../constants/numbers";

function Backoffice() {
	const [loading, setLoading] = useState(true);
  
	const { roleId } = useSelector(state => state.user);
  
	useEffect(() => {
		// waiting for roleId to update.
		setTimeout(() => setLoading(false), 1);
	}, []);

	if(loading)
		return null;

	if (roleId !== ROLE_ID_ADMIN)
		return ( <MessagePage data={BACKOFFICE_NO_PERMITION}/> );
  
	return (
		<p>estoy dentro</p>
	);
}

export default Backoffice;
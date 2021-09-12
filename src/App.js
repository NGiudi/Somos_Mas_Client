// import from react.
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

// import local files.
import ActivitiesScreen from "./screens/WebPages/ActivitiesScreen/ActivitiesScreen";
import AboutUsScreen from "./screens/WebPages/AboutUsScreen/AboutUs";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ContactScreen from "./screens/WebPages/ContactPage/Contact";
import BackofficeScreen from "./screens/BackOffice/Backoffice";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/WebPages/HomeScreen/Home";
import NewsScreen from "./screens/WebPages/NewsScreen/News";
import NewScreen from "./screens/WebPages/NewScreen/New";

// import services.
import { getOrganizationData } from "./services/axios/queries/organization";
import { setOrganization } from "./store/OrganizationStore/organization";

// import constants.
import { ORGANIZATION_QUERY } from "./constants/queries";

function App() {
	const { isSuccess, data } = useQuery(ORGANIZATION_QUERY, getOrganizationData);
	const dispatch = useDispatch();

	useEffect(() => { 
		if (isSuccess)
			dispatch(setOrganization(data.data));
		//eslint-disable-next-line.
	}, [isSuccess]);

	return (
		<BrowserRouter>
			<Switch>
				{/* Web Pages  */}
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/news" component={NewsScreen} />
				<Route exact path="/news/:id" component={NewScreen} />
				<Route exact path="/contact" component={ContactScreen} />
				<Route exact path="/about-us" component={AboutUsScreen} />
				<Route exact path="/activities" component={ActivitiesScreen} />
				
				{/* Login Pages  */}
				<Route exact path="/login" component={LoginScreen} />
				<Route exact path="/register" component={RegisterScreen} />
				
				{/* Backoffice Pages */}
				<Route exact path="/backoffice" component={BackofficeScreen} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
// import from react.
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

// import from external libraries.
import { ChakraProvider } from "@chakra-ui/react";

// import from local files.
import { AppProvider } from "./contexts/appContext";
import store from "./store/Store";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus: false
		}
	}
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AppProvider>
					<ChakraProvider>
						<App/>
					</ChakraProvider>
				</AppProvider>
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
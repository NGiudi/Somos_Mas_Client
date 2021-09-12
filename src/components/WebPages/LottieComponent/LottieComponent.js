// import from react.
import React from "react";
import PropTypes from "prop-types";

// import from external libraries.
import Lottie from "react-lottie";

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice"
	}
};

function LottieComponent (props) {
	const { animation } = props;

	return <Lottie options={{animationData: animation, ...defaultOptions}} />;
}

LottieComponent.propTypes = {
	animation: PropTypes.any
};

LottieComponent.propTypes = {
	animation: null
};

export default LottieComponent;

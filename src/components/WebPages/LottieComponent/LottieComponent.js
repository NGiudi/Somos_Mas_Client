// import from react.
import React from 'react';

// import from external libraries.
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function LottieComponent (props) {
  const { animation } = props;

  return <Lottie options={{animationData: animation, ...defaultOptions}} />;
}

export default LottieComponent;

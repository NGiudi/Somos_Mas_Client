// import from react.
import React from 'react';
import { Link } from 'react-router-dom';

// import from external libraries.
import { Button } from '@chakra-ui/react';

// import from local files.
import LottieComponent from '../../../components/WebPages/LottieComponent/LottieComponent';
import { Content, Message, Title, Image, TextBox } from './MessagePageStyles';
import PageLayout from '../PageLayout';

function MessagePage({data}) {
  return (
    <PageLayout>
      <Content>
        <Image>
          <LottieComponent animation={data.lottie} w="10px"/>
        </Image>

        <TextBox>
          <Title>{data.title}</Title> 
          <Message>{data.text}</Message>
          <Link to={data.buttonLink}>
            <Button>{data.buttonName}</Button>
          </Link>
        </TextBox>
      </Content>
    </PageLayout>
  );
}

export default MessagePage;

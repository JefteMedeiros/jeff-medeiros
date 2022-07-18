import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

import { About, Container, Description, ProfilePic, Social, Title } from './styles';

const Headline: React.FC = () => {
  return (
    <Container>
      <ProfilePic src="./PP.png" />
      <About>
        <Title>
          {`<!-- Hi! I'm Jefté Medeiros -->`}
        </Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.    Cras placerat nunc arcu, ac suscipit massa tincidunt at. In maximus aliquam eleifend. Curabitur eget nisl fringilla, finibus leo a, aliquam ante.</Description>
        <Social>
          <AiFillGithub />
          <BsLinkedin />
          <FaDiscord />
        </Social>
      </About>
    </Container>
  );
}

export default Headline;
import { useEffect, useState } from 'react';
import HomeDescription from './HomeDescription';
import HomeLogo from './HomeLogo';
import HomeSlides from './HomeSlides';

interface ContainerProps {
  logo: string
  description: string
  slides: any
}

const Home: React.FC<ContainerProps> = ({logo, description, slides}) => {
  return (
    <>
      <HomeLogo logo={logo}/>
      <HomeSlides slides={slides} />
      <HomeDescription description={description}/>
    </>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import HomeDescription from './HomeDescription';
import HomeLogo from './HomeLogo';

interface ContainerProps {
  logo: string
  description: string
}

const Home: React.FC<ContainerProps> = ({logo, description}) => {
  return (
    <>
      <HomeLogo logo={logo}/>
      {/* <HomeSlides slides={slides}/> */}
      <HomeDescription description={description}/>
    </>
  );
};

export default Home;

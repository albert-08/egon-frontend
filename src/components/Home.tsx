import { useEffect, useState } from 'react';
import HomeLogo from './HomeLogo';

interface ContainerProps {
  logo: string
}

const Home: React.FC<ContainerProps> = ({logo}) => {
  return (
    <>
      <HomeLogo logo={logo}/>
      {/* <HomeSlides slides={slides}/>
      <HomeDescription client={client}/> */}
    </>
  );
};

export default Home;

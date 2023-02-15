import { useEffect, useState } from 'react';
import HomeLogo from './HomeLogo';

interface ContainerProps {
  logo: string
  csiid: any
}

const Home: React.FC<ContainerProps> = ({logo, csiid}) => {
  const [info, setInfo] = useState({});
  
  const getInfo = async () => {
    const url = 'http://127.0.0.1:4000/clients/info';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ csiid }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const info = await response.json();
      return info;
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  useEffect(() => {
    const info = getInfo();
    setInfo(info);
  }, [info]);

  return (
    <>
      <HomeLogo logo={logo}/>
      {/* <HomeSlides slides={slides}/>
      <HomeDescription client={client}/> */}
    </>
  );
};

export default Home;

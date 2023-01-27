import { Client } from "../models/client.model";

interface ContainerProps { 
  logo: any
}

const HomeLogo: React.FC<ContainerProps> = ({logo}) => {
  return (
    <div className='logo-condominio'>
      <img
        src={logo.logoURL}
        alt='logo'
        width="100"
        height="100"
      />
    </div>
  );
};

export default HomeLogo;
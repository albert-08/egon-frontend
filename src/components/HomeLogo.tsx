import { Client } from "../models/client.model";

interface ContainerProps { 
  client: Client
}

const HomeLogo: React.FC<ContainerProps> = ({client}) => {
  return (
    <div className='logo-condominio'>
      <img
        src={client.logo2}
        alt={client.name}
        width="100"
        height="100"
      />
    </div>
  );
};

export default HomeLogo;
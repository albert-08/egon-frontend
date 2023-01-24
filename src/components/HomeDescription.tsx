import { useTranslation } from "react-i18next";
import { Client } from "../models/client.model";

interface ContainerProps {
  client: Client
}

const HomeDescription: React.FC<ContainerProps> = ({ client }) => {
  const [t, i18n] = useTranslation("translation");

  return (
    <div className='description'>
      <h1>Bienvenido(a) a {client.name}</h1>
      {
        client?.name?.localeCompare('Misión Concá') === 0
          ? <>
              <h2>
                Si es residente, podrá crear su usuario y contraseña y solicitar ligarlo al predio o los predios correspondientes
              </h2>
              <h2>Consejo Directivo y Administración</h2>
              <h4>No olvide instalar el App Móvil en su teléfono inteligente.</h4>
            </>
          : <></>
      }
      <p>{t("main.powered")} Egon Solutions LLC <a href="https://www.egonsolutions.com">www.egonsolutions.com</a></p>
    </div>
  );
};

export default HomeDescription;
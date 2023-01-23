import { useTranslation } from "react-i18next";

interface ContainerProps { }

const HomeDescription: React.FC<ContainerProps> = () => {
  const [t, i18n] = useTranslation("translation");

  return (
    <div className='description'>
      <h1>Bienvenido(a) a Misión Concá</h1>
      <h2>
        Si es residente, podrá crear su usuario y contraseña y solicitar ligarlo al predio o los predios correspondientes
      </h2>
      <h2>Consejo Directivo y Administración</h2>
      <h4>No olvide instalar el App Móvil en su teléfono inteligente.</h4>
      <p>{t("main.powered")} Egon Solutions LLC <a href="https://www.egonsolutions.com">www.egonsolutions.com</a></p>
    </div>
  );
};

export default HomeDescription;
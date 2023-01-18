import { IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonContent,
  IonPage,
  IonSlides,
  IonSlide 
} from '@ionic/react';
import { logIn } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  const [t, i18n] = useTranslation("translation");
  const slideOpts = {
    autoplay: true
  }
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_426.jpg"
                alt="logo"
                width="40"
                height="40"  
              />
            </IonButton>
            <IonButton>
              {t('main.main')}
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <Link to="/login">
              <IonButton fill="outline">
                <IonIcon slot="start" icon={logIn}></IonIcon>
                Login
              </IonButton>
            </Link>
          </IonButtons>
          <IonButtons>
            <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_mx")}>ES-MX</IonButton>
            <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_col")}>ES-COL</IonButton>
            <IonButton fill="solid" onClick={() => i18n.changeLanguage("en")}>EN</IonButton>
          </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className='logo-condominio'>
            <img
              src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_425.jpg"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <IonSlides
            options={slideOpts}
          >
            <IonSlide>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_427.jpeg"
                alt=""
              />
            </IonSlide>
            <IonSlide>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_428.jpeg"
                alt=""
              />
            </IonSlide>
            <IonSlide>
              <img
                src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_429.jpeg"
                alt=""
              />
            </IonSlide>
          </IonSlides>
          <div className='description'>
            <h1>Bienvenido(a) a Misión Concá</h1>
            <h2>
              Si es residente, podrá crear su usuario y contraseña y solicitar ligarlo al predio o los predios correspondientes
            </h2>
            <h2>Consejo Directivo y Administración</h2>
            <h4>No olvide instalar el App Móvil en su teléfono inteligente.</h4>

            <p>{t("main.powered")} Egon Solutions LLC <a href="https://www.egonsolutions.com">www.egonsolutions.com</a></p>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
};

export default Home;
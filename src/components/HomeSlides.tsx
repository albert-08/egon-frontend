import { IonSlide, IonSlides } from '@ionic/react';
import { Client } from '../models/client.model';

interface ContainerProps { 
  slides: any
}

const HomeSlides: React.FC<ContainerProps> = ({slides}) => {
  
  const slideOpts = {
    autoplay: true
  }
  
  if ((slides?.localeCompare('t') === 0)) {
    return (
      <IonSlides
        options={slideOpts}
      >
        {
          /* slides.map((slide) => <IonSlide><img src={slide} alt="" /></IonSlide>) */
        }  
      </IonSlides>  
    );  
  }

  return <></>
};

export default HomeSlides;
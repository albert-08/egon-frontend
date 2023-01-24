import { IonSlide, IonSlides } from '@ionic/react';
import { Client } from '../models/client.model';

interface ContainerProps { 
  slides: string[]
}

const HomeSlides: React.FC<ContainerProps> = ({slides}) => {
  const slideOpts = {
    autoplay: true
  }
  
  return (
    <IonSlides
      options={slideOpts}
    >
      {
        slides.map((slide) => <IonSlide><img src={slide} alt="" /></IonSlide>)
      }  
    </IonSlides>  
  );
};

export default HomeSlides;
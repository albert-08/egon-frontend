import { IonSlide, IonSlides } from '@ionic/react';

interface ContainerProps { }

const HomeSlides: React.FC<ContainerProps> = () => {
  const slideOpts = {
    autoplay: true
  }

  return (
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
  );
};

export default HomeSlides;
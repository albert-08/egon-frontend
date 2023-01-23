interface ContainerProps { }

const HomeLogo: React.FC<ContainerProps> = () => {
  return (
    <div className='logo-condominio'>
      <img
        src="https://egonsolutionscloudtrailbucket.s3-us-west-2.amazonaws.com/Recursos/cs_28/urp_425.jpg"
        alt=""
        width="100"
        height="100"
      />
    </div>
  );
};

export default HomeLogo;
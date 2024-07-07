import Cover from "../../assets/landing/DSC01155-1280x854.jpg";

const Hero = () => {
  return (
    <section className="half">
      <img src={Cover} alt="Hero" className="rounded-lg w-3/5" />
      <div className="">
        <h1 className="title-sup">
          BEER SO GOOD …<br />
          YOU WON’T MISS THE ALCOHOL
        </h1>
      </div>
    </section>
  );
};

export default Hero;

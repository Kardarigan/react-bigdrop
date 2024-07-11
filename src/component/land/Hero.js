import Cover from "../../assets/landing/DSC01155-1280x854.jpg";

const Hero = () => {
  return (
    <section className="half max-md:flex-col">
      <img src={Cover} alt="Hero" className="rounded-lg md:w-3/5" />
      <div className="py-6">
        <h1 className="title-lg text-indigo-600">
          BEER SO GOOD …<br />
          YOU WON’T MISS THE ALCOHOL
        </h1>
        <p className="para mt-5">
          Live your biggest life. Do as much as you can. Jump in with both feet,
          laughing yourself hoarse and never stop doing more of what you love.
          For us, our passion is brewing the finest, tastiest craft beers we
          possibly can. And because tomorrow is always another day, it’s alcohol
          free.
        </p>
        <p className="label mt-10">
          <i class="far fa-chevron-left me-3" />
          Our award-winning Paradiso IPA. Go on. Go Big.
        </p>
      </div>
    </section>
  );
};

export default Hero;

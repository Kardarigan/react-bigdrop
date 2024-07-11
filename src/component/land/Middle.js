import { Link } from "react-router-dom";
import here_beer from "../../assets/landing/here-for-beer.png";
import poster from "../../assets/landing/Posters-3.png";

const Middle = () => {
  return (
    <section className="half my-24">
      <div className="md:w-1/2">
        <img src={here_beer} alt="Here For Beer" />
        <p className="para mt-5 mb-8">
          <b>
            {" "}
            We make award-winning craft beer. It just so happens to be
            alcohol-free.
          </b>{" "}
          So, whether you’re looking to cut down, cut out or just try something
          new, Big Drop has crafted a great beer for almost any beer lover.
        </p>
        <Link to="/" className="button button-g px-18">
          See the Range
        </Link>
      </div>
      <div
        className="md:w-1/2 center-bg rounded p-8 pe-24"
        style={{ backgroundImage: `url(${poster})` }}
      >
        <h3 className="title">AF, GLUTEN-FREE, VEGAN, 4CALS PER 100ML?</h3>
        <h3 className="title-sup mt-5 mb-12">MO FLUFFIN' WAY!</h3>
        <Link to="/" className="button button-outline button-outline-b">
          Check it Out
        </Link>
      </div>
    </section>
  );
};

export default Middle;

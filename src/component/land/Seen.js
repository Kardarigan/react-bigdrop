import cover from "../../assets/landing/as-seen-in.png";

const Seen = () => {
  return (
    <section className="half md:ps-48 my-52">
      <div className="text-indigo-600 md:text-end">
        <h2 className="title-sup">AS SEEN IN</h2>
      </div>
      <div className="">
        <img src={cover} alt="brands" />
      </div>
    </section>
  );
};

export default Seen;

import "./Start.scss";

const Start = () => {
  return (
    <section className="start">
      <div className="container">
        <form className="start-form">
          <h3 className="start-form__title">به کوییز پلاس خوش اومدی</h3>
          <p className="start-form__subtitle">
            لطفا اسم خودت را بنویس و مسابقه رو شروع کن
          </p>
          <input type="text" placeholder="...." className="start-form__input" />
          <button className="start-form__btn">شروع مسابقه</button>
        </form>
      </div>
    </section>
  );
};

export default Start;

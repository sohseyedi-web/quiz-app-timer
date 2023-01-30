import "./Start.scss";
import {useForm} from "react-hook-form";

const Start = ({setUser}) => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        setUser(data)
    }

    return (
        <section className="start">
            <div className="container">
                <form className="start-form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="start-form__title">به کوییز پلاس خوش اومدی</h3>
                    <p className="start-form__subtitle">
                        لطفا اسم خودت را بنویس و مسابقه رو شروع کن
                    </p>
                    <input type="text" {...register('userName', { required: true, minLength: 3 })}
                           className={errors.userName ? "start-form__input error" : "start-form__input"}/>
                    {errors.userName && <p className={"start-form__error"}>لطفا اسمت رو بگو</p>}
                    <button className="start-form__btn">شروع مسابقه</button>
                </form>
            </div>
        </section>
    );
};

export default Start;

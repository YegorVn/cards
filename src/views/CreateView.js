import { useEffect, useState } from "react";
import Actions from "../redux/actions";
import { useSelector } from "react-redux";
import { Select, TagList } from "../components";
import { useNavigate, useParams } from "react-router-dom";

const CreateView = () => {
  const defaultForm = {
    title: "",
    subtitle: "",
    text: "",
    img: "",
    themes: [],
  };
  const [form, setForm] = useState(defaultForm);
  const navigate = useNavigate();
  const id = useParams().id;

  const themes = [
    { text: "spaceships", value: "ss" },
    { text: "stars", value: "s" },
    { text: "Venus", value: "v" },
  ];
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const imgChangeHandler = (e) => {
    setForm({ ...form, img: URL.createObjectURL(e.target.files[0]) });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(id){}
    else{
      Actions.create({
        title: form.title,
        subtitle: form.subtitle,
        text: form.text,
        tags: form.themes,
        img: form.img,
      });
    }
    setForm(defaultForm);
    navigate("/Main");
  };

  const themeChangeHandler = (e) => {
    if (form.themes.every((theme) => theme.value !== e.target.value)) {
      setForm({
        ...form,
        themes: [
          ...form.themes,
          themes.find((el) => el.value === e.target.value),
        ],
      });
    }
  };

  const editCard = useSelector((state) => state.cards)[id];

  useEffect(() => {
    if (editCard) setForm(editCard);
    console.log(form);
  }, [editCard, form]);

  return (
    <div className="create col-sm-11 col-md-10 col-lg-8 col-xl-6 m-auto p-3">
      <form className="create__form" onSubmit={submitHandler}>
        <div className="create__inputs-wrapper d-flex flex-column flex-md-row">
          <div className="create__inputs d-flex flex-column col-md-6">
            <div className="create__input-wrapper">
              <label htmlFor="1">Title</label>
              <input
                className="create__input mt-2"
                name="title"
                value={form.title}
                onChange={changeHandler}
              />
            </div>
            <div className="create__input-wrapper mt-3">
              <label htmlFor="2">Subtitle</label>
              <input
                className="create__input mt-2"
                name="subtitle"
                value={form.subtitle}
                onChange={changeHandler}
              />
            </div>
            <div className="create__input-wrapper mt-3">
              <label htmlFor="2">Text</label>
              <textarea
                className="create__input mt-2"
                name="text"
                value={form.text}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="create__inputs d-flex flex-column ms-md-auto mt-md-0 mt-2 col-md-5">
            <div className="create__input-wrapper">
              <label htmlFor="2">Image</label>
              <input
                className="create__input img-input p-0 mt-2"
                name="img"
                type="file"
                onChange={imgChangeHandler}
              />
              {form.img !== "" && (
                <img
                  src={form.img}
                  alt=""
                  className="create__img col-12 col-md-9 mt-2"
                />
              )}
            </div>
            <div className="create__input-wrapper mt-3">
              <label htmlFor="2">Tags</label>
              <Select options={themes} onChange={themeChangeHandler} />
              <TagList
                tags={form.themes}
                className="mt-3 flex-wrap"
                elClassName="ms-1"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="create__button mt-5 ps-3 pe-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateView;

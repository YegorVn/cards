import { useEffect, useState } from "react";
import Actions from "./redux/actions";
import { useSelector } from 'react-redux'

const CreateView = () => {
    const [form, setForm] = useState({title: "", subtitle: "", text: "", img: ""})
    const cards = useSelector(state => state.cards);

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }

    const valueHandler = (e) => {
      const img = URL.createObjectURL(e.target.files[0])
      setForm({...form, 'img': URL.createObjectURL(e.target.files[0])})
      console.log(e.target.files[0])
    }

    useEffect(() => {
      console.log(cards)

    })

    const submitHandler = (e) => {
        e.preventDefault()
        Actions.create({title: form.title, text: form.text, tags: [{text: 'genius'}]})
        setForm({title: "", subtitle: "", text: ""})
    }
    
    return (
      <main className="main col-12">
        <div className="create col-sm-11 col-md-10 col-lg-8 col-xl-6 mt-5 me-auto ms-auto p-3">
          <form className="create__form" onSubmit={submitHandler}>
            <div className="create__inputs-wrapper d-flex flex-column flex-md-row">
              <div className="create__inputs d-flex flex-column col-md-6">
                <div className="create__input-wrapper">
                  <label htmlFor="1">Title</label>
                  <input className="create__input mt-2" name="title" value={form.title} onChange={changeHandler}/>
                </div>
                <div className="create__input-wrapper mt-3">
                  <label htmlFor="2">Subtitle</label>
                  <input className="create__input mt-2" name="subtitle" value={form.subtitle} onChange={changeHandler}/>
                </div>
                <div className="create__input-wrapper mt-3">
                  <label htmlFor="2">Text</label>
                  <textarea className="create__input mt-2" name="text" value={form.text} onChange={changeHandler}/>
                </div>
              </div>
              <div className="create__inputs d-flex flex-column ms-md-auto mt-md-0 mt-2 col-md-5">
                <div className="create__input-wrapper">
                  <label htmlFor="2">Image</label>
                  <input className="create__input img-input p-0 mt-2" name="img" type="file" onChange={valueHandler}/>
                  <img src={form.img} alt="" className="create__img col-12 col-md-9 mt-2"/>
                </div>
                <div className="create__input-wrapper mt-3">
                  <label htmlFor="2">Tags</label>
                </div>
              </div>
            </div>

            <button className="create__button mt-5 ps-3 pe-3">Save</button>
          </form>
        </div>
      </main>
    );
}

export default CreateView
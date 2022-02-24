import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal, TagList } from "../components";
import { useState } from "react";

const DetailsView = () => {
  const id = useParams().id
  const data = useSelector(state => state.cards)[id]
  const [shown, setShown] = useState(false)

  if(data) 
  return (
    <>
      <div className="col-10 details ms-auto me-auto d-flex flex-column align-items-start">
        <img
          src={data.img}
          alt=""
          className="details__img mt-5 me-5"
        />
        <div className="details__header d-flex align-items-center mt-4">
          <div className="details__title">{data.title}</div>
          <TagList className="details__taglist ms-5" tags={data.tags} />
        </div>
        <div className="details__subtitle mt-4">{data.title}</div>
        <div className="details__text col-10 mt-2">{data.text}</div>
        <div className="details__buttons mt-auto pb-5 pt-5">
          <button
            className="details__button ps-4 pe-4"
            onClick={() => setShown(true)}
          >
            Delete
          </button>
          <Link to={`/Edit/${id}`}>
            <button className="details__button ms-2 ps-4 pe-4">Edit</button>
          </Link>
        </div>
        <Modal
          shown={shown}
          onClose={() => setShown(false)}
          text="Are you sure?"
        />
      </div>
    </>
  );
    else return <>loading...</>
  }

export default DetailsView
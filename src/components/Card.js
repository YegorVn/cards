import { Link } from "react-router-dom";
import { TagsList } from ".";

const Card = ({data}) => {
  if(data)  
  return (
      <div className="custom-card m-1 mt-5 mb-5 col-12 col-sm-9 col-md-5 col-lg-5 col-xl-3">
        <img src={data.img && data.img} alt="" className="custom-card__img" />
        <Link to={`/Details/${data.id && data.id}`}>
          <div className="custom-card__body p-3 d-flex flex-column">
            <div className="custom-card__title">{data.title && data.title}</div>
            <div className="custom-card__text">{data.text && data.text}</div>
            <TagsList
              className="custom-card__taglist mt-auto"
              tags={data.tags && data.tags}
            />
          </div>
        </Link>
      </div>
    );
    else return <>loading</>
}

export default Card
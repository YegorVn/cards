import { Link } from "react-router-dom";
import { TagList } from ".";
//images -> assets
//images/icons -> image/fonts (fontello)
import noimg from '../assets/noimg.svg'

const Card = ({data}) => {
  if(data)  
  return (
    <div className="custom-card m-1 mt-5 mb-5 col-12 col-sm-9 col-md-5 col-lg-5 col-xl-3">
      {(data.img !== "" && (
        <img src={data.img} alt="" className="custom-card__img" />
      )) || (
        <img src={noimg} alt="noimage" className="custom-card__img" />
      )}

      <Link to={`/Details/${data.id && data.id}`}>
        <div className="custom-card__body p-3 d-flex flex-column">
          <div className="custom-card__title">{data.title && data.title}</div>
          <div className="custom-card__subtitle">{data.subtitle && data.subtitle}</div>
          <TagList
            className="custom-card__taglist mt-auto flex-wrap"
            tags={data.tags && data.tags}
          />
        </div>
      </Link>
    </div>
  );
    else return <>loading</>
}

const CardsList = ({cards, className}) => {
    return (
      <div
        className={
          "d-flex justify-content-center justify-content-md-between flex-wrap col-10 ms-auto me-auto  " +
          className
        }
      >
        {cards &&
          cards.map((data, index) => {
            return <Card data={data} key={index}/>;
          })}
      </div>
    );
}

export default CardsList
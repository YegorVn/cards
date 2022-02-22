import {Card} from '.'

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
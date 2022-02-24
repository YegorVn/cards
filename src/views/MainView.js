import {Card, CardsList} from '../components'
import img1 from '../assets/img1.jpeg'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function MainView() {
  const cards = useSelector(state => state.cards)
  useEffect(() => {
    console.log(cards)
  })
  return (
    <>
        <CardsList
          cards={cards}
          className="main__cardslist"
        />
    </>
  );
}

export default MainView;

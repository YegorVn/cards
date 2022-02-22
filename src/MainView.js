import './styles/App.css';
import {Card, CardsList} from './components'
import img1 from './images/img1.jpeg'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function MainView() {
  const cards = useSelector(state => state.cards)
  useEffect(() => {
    console.log(cards)
  })
  return (
    <>
      <main className="main col-12">
        <CardsList
          cards={cards}
          className="main__cardslist"
        />
      </main>
    </>
  );
}

export default MainView;

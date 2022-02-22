const initialState = {
    cards: []
}

function nextCardId(cards) {
    if(cards.length > 1){
        return cards.reduce((maxId, card) => Math.max(card.id, maxId), -1) + 1;
    }
    else return 1
}

export default function Cards(state = initialState, action){
    switch (action.type) {
      case "get":
        return state;

      case "create":
        return {
          ...state,
          cards: [
            ...state.cards,
            {
              id: state.cards.length,
              title: action.payload.title,
              text: action.payload.text,
              tags: action.payload.tags
            },
          ],
        };

      case "edit": return {
        ...state,
        cards: state.cards.map((card) => {
            if(card.id !== action.payload.id){
                return card
            }

            return{
                ...card,
                title: action.payload.title,
                text: action.payload.text,
            }
        })
      };
      case "delete": return {
        ...state,
        cards: state.cards
          .filter((card) => card.id !== action.payload.id)
          .map((card, index) => (card.id = index)),
      };
      default: return state;
    }
}
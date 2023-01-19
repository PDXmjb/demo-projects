import deckOfCards from '../../helpers/deck-of-cards';

const BasicCardGame = () => {
  const [deck, shuffle] = deckOfCards();

  shuffle(deck);

  return (
    <>
      Basic Card Game
      <div>{JSON.stringify(deck)}</div>
    </>
  );
};

export default BasicCardGame;

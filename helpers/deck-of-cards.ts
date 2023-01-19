const deckOfCards = () => {
  const deck = [
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A⬩',
    '2⬩',
    '3⬩',
    '4⬩',
    '5⬩',
    '6⬩',
    '7⬩',
    '8⬩',
    '9⬩',
    '10⬩',
    'J⬩',
    'Q⬩',
    'K⬩',
    'A♧',
    '2♧',
    '3♧',
    '4♧',
    '5♧',
    '6♧',
    '7♧',
    '8♧',
    '9♧',
    '10♧',
    'J♧',
    'Q♧',
    'K♧',
    'A♤',
    '2♤',
    '3♤',
    '4♤',
    '5♤',
    '6♤',
    '7♤',
    '8♤',
    '9♤',
    '10♤',
    'J♤',
    'Q♤',
    'K♤',
  ];

  const shuffle = (currentDeck: any) => {
    for (let i = currentDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
    }
  };

  return [deck, shuffle];
};

export default deckOfCards;

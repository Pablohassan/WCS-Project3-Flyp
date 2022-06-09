export const getCards = async () => {
  const cardList = await axios("https://api.deezer.com").data;

  getCards();
};

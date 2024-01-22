
import SingleCard from "./SingleCard";
import cardsData from '../data.json'

const Cards = ({
  membershipType
}) => {
  return (
    <>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[60px]">
        <div className="container">
          <div className="grid gap-0 xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 items-center">
          {cardsData.map((card, index) => (
              <SingleCard
                key={index}
                membership={card.membership}
                storage={card.storage}
                users={card.users}
                sendup={card.sendup}
                payment={ membershipType? card.payment[1].price : card.payment[0].price }
                featured={card.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
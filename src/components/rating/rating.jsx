import Star from "./star/star";

function Rating({ rate }) {
  return (
    <div className="rate">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rate} />
      ))}
    </div>
  );
}

export default Rating;

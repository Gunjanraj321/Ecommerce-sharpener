const tours = [
  {
    id: 1,
    date: "JUL16",
    place: "DETROIT, MI",
    description: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL19",
    place: "TORONTO",
    description: "ONBUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 29",
    place: "PHOENIX",
    description: "AZAK-CHIN PAVILION",
  },
  {
    id: 4,
    date: "AUG 2",
    place: "LAS VEGAS",
    description: "T-MOBILE ARENA",
  },
  {
    id: 5,
    date: "AUG 7",
    place: "CONCORD, CA",
    description: "CONCORD PAVILION",
  },
  {
    id: 6,
    date: "JUL19",
    place: "TORONTO, CA",
    description: "ONBUDWEISER STAGE",
  },
];

const Tour = () => {
  return (
    <div>
      <span> TOURS </span>
      {tours.map((tour, index) => (
        <div key={index}>
          <span> {tour.date} </span>
          <span> {tour.place} </span>
          <span> {tour.description} </span>
          <button>BUY TICKETS</button>
        </div>
      ))}
    </div>
  );
};

export default Tour;
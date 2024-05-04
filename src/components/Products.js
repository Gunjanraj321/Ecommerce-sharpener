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

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">TOURS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tours.map((tour) => (
          <div key={tour.id} className="border border-gray-300 rounded-md p-4 flex flex-col justify-between">
            <div>
              <span className="text-lg font-semibold">{tour.date}</span>
              <span className="block text-gray-600">{tour.place}</span>
              <span className="block text-gray-600">{tour.description}</span>
            </div>
            <button className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600">
              BUY TICKETS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

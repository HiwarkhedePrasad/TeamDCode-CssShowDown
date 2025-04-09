import React, { useState } from "react";

const Games = [
  {
    name: "Stunt Bike Extreme",
    link: "https://poki.com/en/g/stunt-bike-extreme",
    Image:
      "https://i.pinimg.com/736x/b4/02/cb/b402cb9bfcbf59ceb9e6f66a9689e959.jpg",
    category: "Racing",
    rating: 4.5,
  },
  {
    name: "Pokemon Duel",
    Image: "/poke.png",
    category: "Strategy",
    rating: 4.2,
  },
  {
    name: "Bubble Ball",
    link: "https://poki.com/en/g/bubble-ball",
    Image: "/bubb.png",
    category: "Puzzle",
    rating: 4.0,
  },
  {
    name: "Moto X3M",
    link: "https://poki.com/en/g/moto-x3m",
    Image: "/moto.png",
    category: "Racing",
    rating: 4.7,
  },
  {
    name: "Subway Surfers",
    link: "https://poki.com/en/g/subway-surfers",
    Image: "/sub.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Super Star Car",
    link: "https://poki.com/en/g/super-star-car",
    Image: "/super.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Blaze Drifter",
    link: "https://poki.com/en/g/blaze-drifter",
    Image: "/b.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "MR RACER - Car Racing",
    link: "https://poki.com/en/g/mr-racer-car-racing",
    Image: "/mr.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Burnout Drift: Hilltop",
    link: "https://poki.com/en/g/burnout-drift-hilltop",
    Image: "/bu.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Hill Climb Racing Lite",
    link: "https://poki.com/en/g/hill-climb-racing-lite",
    Image: "/hil.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Fruit Ninja",
    link: "https://poki.com/en/g/fruit-ninja",
    Image: "/fru.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Parakite Ninja",
    link: "https://poki.com/en/g/parakite-ninja",
    Image: "/po.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Grand Prix Hero",
    link: "https://poki.com/en/g/grand-prix-hero",
    Image: "/m.png",
    category: "Endless Runner",
    rating: 4.6,
  },

  {
    name: "Panda: Bubble Shooter",
    link: "https://poki.com/en/g/panda-bubble-shooter",
    Image: "/pa.png",
    category: "Endless Runner",
    rating: 4.6,
  },
];

const GameCard = ({ game }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out">
    <img
      src={game.Image}
      alt={game.name}
      className="w-full h-32 object-contain"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{game.name}</h3>
      <p className="text-sm text-gray-600 mb-2">Category: {game.category}</p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-500">
          {[...Array(Math.round(game.rating))].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 inline-block fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 2.122-6.382L.401 6.909 6.91 6.328 10 0l3.09 6.328 6.509.581-4.844 4.63 2.122 6.382L10 15z" />
            </svg>
          ))}
          {[...Array(5 - Math.round(game.rating))].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 inline-block fill-current text-gray-300"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 2.122-6.382L.401 6.909 6.91 6.328 10 0l3.09 6.328 6.509.581-4.844 4.63 2.122 6.382L10 15z" />
            </svg>
          ))}
        </span>
        <a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
        >
          Play Now
        </a>
      </div>
    </div>
  </div>
);

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredGames = Games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredGames);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center"
    >
      <input
        type="text"
        placeholder="Search for a game..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 flex-grow mr-4"
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
  );
};

const GameFilter = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  const uniqueCategories = [
    "All",
    ...new Set(Games.map((game) => game.category)),
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <label
        htmlFor="category"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Filter by Category:
      </label>
      <select
        id="category"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

const GameList = ({ games }) => {
  if (games.length === 0) {
    return (
      <p className="text-gray-600">No games found matching your criteria.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.name} game={game} />
      ))}
    </div>
  );
};

const GameSearchApp = () => {
  const [filteredGames, setFilteredGames] = useState(Games);

  const handleSearch = (games) => {
    setFilteredGames(games);
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredGames(Games);
    } else {
      const filtered = Games.filter((game) => game.category === category);
      setFilteredGames(filtered);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-700 shadow-md py-2 rounded-lg inline-block px-6 bg-white bg-opacity-80">
            Discover Fun Games!
          </h1>
          <p className="mt-2 text-gray-600">
            Explore a world of exciting games.
          </p>
        </header>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <SearchBar onSearch={handleSearch} />
          <GameFilter onFilter={handleFilter} />
        </div>

        <main>
          <GameList games={filteredGames} />
        </main>
      </div>
    </div>
  );
};

export default GameSearchApp;

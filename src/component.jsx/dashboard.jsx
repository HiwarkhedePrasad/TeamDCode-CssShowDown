import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [ranking, setRanking] = useState([
    { id: 1, name: "Krushna", points: 100 },
    { id: 2, name: "Prasad", points: 90 },
    { id: 3, name: "Yash", points: 85 },
    { id: 4, name: "Gopal", points: 84 },
    { id: 5, name: "Madhav", points: 82 },
    { id: 6, name: "Ganesh", points: 80 },
    { id: 7, name: "Om", points: 78 },
    { id: 8, name: "Ajay", points: 77 },
    { id: 9, name: "Atul", points: 75 },
    { id: 10, name: "Govind", points: 74 },
    // Add more players as needed
  ]);

  // Optional: Sort the ranking by points in descending order on component mount
  useEffect(() => {
    const sortedRanking = [...ranking].sort((a, b) => b.points - a.points);
    setRanking(sortedRanking);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Player Rankings
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Current standings of all players.
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700">
                Top Ranked Player:{" "}
                <span className="text-indigo-600">{ranking[0]?.name}</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Player Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ranking.map((player, index) => (
                    <tr key={player.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {player.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {player.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

function WatchList() {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer mx-4">Action</div>
        <div className="bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer">Action</div>
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] p-2 text-black bg-gray-200 outline-none"
        />
      </div>
      <div className="border border-gray-200 m-5 rounded-lg overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-3 text-gray-800 bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th className="p-2">Popularity</th>
              <th className="p-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex item-center px-6 py-4">
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9ZzaRLBGB5wYojFmqf1STcU3VBrJLtMcdENDqaeZ6MwKHQrr_TuG_fA&s=10`}
                  alt="Movie Poster"
                  className="h-[6rem] w-[10rem]"
                />
                <div className="mx-10">Moview Name</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-500 hover:cursor-pointer">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

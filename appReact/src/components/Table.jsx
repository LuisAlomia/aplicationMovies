import React, { useState } from "react";
import { data } from "../utils/data";
import UpdateMovieModal from "./UpdateMovieModal";
import CreateMovieModal from "./CreateMovieModal";

const Table = () => {
  const [movieId, setMovieId] = useState();
  const cactureIdMovie = (id) => setMovieId(id);

  return (
    <div className="relative overflow-x-auto shadow-md max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-900">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Filtrar por genero
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/*   <!-- Dropdown menu --> */}
          <div id="dropdownAction" className=" z-10 hidden">
            <ul
              className="py-1 bg-white  rounded-lg shadow  dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 w-44 ml-3"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar por titulo"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              titulo
            </th>
            <th scope="col" className="px-6 py-3">
              genero
            </th>
            <th scope="col" className="px-6 py-3">
              lenguajes
            </th>
            <th scope="col" className="px-6 py-3">
              trailer
            </th>
            <th scope="col" className="px-6 py-3">
              disponiblidad
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie, index) => (
            <tr
              key={movie.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <th className="flex items-center px-6 py-4 text-gray-900  dark:text-white min-w-[17rem]">
                <img
                  className="w-14 h-14 rounded-xl"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlBmliR0mWBaCH5QEk-KK9rArKkkaRDS0G0BLjw5iBuNCGJidC"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold capitalize">
                    {movie.title}
                  </div>
                  <div className="font-normal text-gray-500">
                    {movie.dateMovie}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {movie.genre.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </td>
              <td className="px-6 py-4">
                {movie.language.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </td>
              <td className="px-6 py-4">{movie.linkTrailer}</td>
              <td className="px-6 py-4">
                {movie.active === true ? (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Disponible
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    No disponible
                  </div>
                )}
              </td>
              <td className="px-6 py-4">
                {/*  <!-- Modal toggle --> */}
                <a
                  onClick={() => cactureIdMovie(movie.id)}
                  href="#"
                  type="button"
                  data-modal-target="editMovieModal"
                  data-modal-show="editMovieModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <!-- Edit user modal --> */}
      <UpdateMovieModal movieId={movieId} />
      <CreateMovieModal />
    </div>
  );
};

export default Table;

export default function CardList({ img, project, artist }) {
  return (
    // <div className="flex justify-center items-center w-1/2 sm:w-1/3">
    <div className="rounded-lg shadow-lg hover:shadow-xl hover:bg-slate-50 bg-white w-full flex justify-center items-center flex-col">
      <img
        className="mx-auto mt-4 rounded-lg w-4/5 object-cover"
        src={img}
        alt=""
      />

      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{project}</h5>
        <p className="text-gray-500 text-base mb-4">{artist}</p>
        <div>
          <button
            type="button"
            className="mx-auto px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Contenu du flyp
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

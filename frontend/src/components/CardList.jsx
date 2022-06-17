import React from "react";

export default function CardList({
  img,
  project,
  artist,
  lancement,
  descriptif,
}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl hover:bg-slate-50 bg-white w-full flex justify-center items-center flex-col">
      <img
        width={200}
        className="mx-auto mt-4 rounded-lg object-cover"
        src={img}
        alt={`${artist} ${project}`}
      />

      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{project}</h5>
        <p className="text-gray-500 text-base mb-4">{artist}</p>
        <div>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300 backdrop-blur-lg"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Projet
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-10 right-0 left-0 inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div
                    style={{ backgroundImage: ` url(${img}) ` }}
                    className="bg-cover bg-center bg-no-repeat  border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full outline-none focus:outline-none backdrop-filter backdrop-blur-sm  h-200 "
                  >
                    {/* header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t backdrop-blur-lg">
                      <h3 className="text-xl font-semibold shadow-neutral-300">
                        Decouvrez le Projet de {artist}
                        <br />
                        <p className="text-3xl shadow-neutral-300">{project}</p>
                      </h3>
                      <h3>
                        <br />
                        <br />
                        Drop du projet :{lancement}
                      </h3>
                      <button
                        type="button"
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none backdrop-blur-2xl"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none backdrop-blur-2xl" />
                      </button>
                    </div>

                    {/* body */}
                    <div className="relative p-6 flex-auto drop-shadow-black backdrop-blur-2xl text-white">
                      le {descriptif}
                      <p className="my-4 text-slate-500 text-lg leading-relaxed backdrop-blur-2xl" />
                    </div>
                    {/* footer */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b backdrop-blur-2xl">
                      <button
                        className="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 backdrop-blur-lg"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close Description
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black" />
            </>
          ) : null}

          {/* <button
            type="button"
            onClick={onClick}
            className="mx-auto px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            
          </button> */}
        </div>
      </div>
    </div>
  );
}

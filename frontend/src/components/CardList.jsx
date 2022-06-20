import React from "react";
import { useMediaQuery } from "react-responsive";
import FlypCard from "./FlypCard";

export default function CardList({
  img,
  project,
  artist,
  lancement,
  descriptif,
  date,
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl hover:bg-slate-50 bg-white w-full h-full flex justify-center items-center flex-col">
      <img
        width={200}
        height={200}
        className="h-[200px] mx-auto mt-4 rounded-lg object-cover"
        src={img}
        alt={`${artist} ${project}`}
      />

      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{project}</h5>
        <p className="text-gray-500 text-base mb-4">{artist}</p>
        <p>{date} </p>
        <div>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300 backdrop-blur-lg"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Projet
          </button>
          {isMobile && showModal ? (
            <>
              <div className="mx-auto bg-blue-100 opacity-8 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 right-2 left-2 inset-16 z-50 outline-none focus:outline-none">
                <div className="relative w-full h-1/3 my-6 mx-auto mb-10 max-w-3xl top-0 ">
                  <FlypCard
                    className="flypcard max-w-s  "
                    descriptif={date}
                    imgflyp={img}
                    project={project}
                    artist={artist}
                  />

                  <div
                    // style={{ backgroundImage: ` url(${img}) ` }}
                    className=" bg-cover bg-blue-600 bg-opacity-[0.4] bg-center bg-no-repeat mx-auto  border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full max-w-sm outline-none focus:outline-none   h-200 "
                  >
                    {/* header */}
                    <div className=" opacity-1 flex justify-left  border-b border-solid border-slate-200 rounded-t backdrop-blur-lg">
                      <h3 className=" mt-30 text-xl  w-full font-semibold shadow-neutral-300">
                        <div className="m-5 ">{artist}</div>
                        <p className="m-5 text-3xl text-3xl shadow-neutral-300">
                          {project}
                        </p>
                      </h3>
                      <h3>
                        <br />
                        <p className="shadow-white-3xl">
                          Drop du projet :{" "}
                          {new Date(lancement).toLocaleDateString("fr-FR")}
                        </p>
                      </h3>
                      <button
                        type="button"
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none backdrop-blur-2xl"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none backdrop-blur-2xl" />
                      </button>
                    </div>

                    {/* body */}
                    <div className="m-2 mt-6 text-l bg-blend-saturation relative p-4 flex-auto drop-shadow-black backdrop-blur-2xl text-black-200 dark:text-black-400">
                      {descriptif}
                      <p className="my-2 text-slate-500 text-lg leading-relaxed backdrop-blur-2xl" />
                    </div>
                    {/* footer */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b backdrop-blur-2xl">
                      <button
                        className="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 backdrop-blur-lg"
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

          {!isMobile && showModal ? (
            <>
              <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-15 right-0 left-0 inset-20 z-50 outline-none focus:outline-none">
                <div className="relative w-[384px] h-full my-6 mx-auto max-w-3xl top-40">
                  <div
                    // style={{ backgroundImage: ` url(${img}) ` }}
                    className="bg-cover bg-blue-600 bg-opacity-[0.4] bg-center bg-no-repeat  border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full outline-none focus:outline-none   h-200 "
                  >
                    <FlypCard className="flypcard max-w-sm" imgflyp={img} />
                    {/* header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t backdrop-blur-lg">
                      <h3 className="text-xl  font-semibold shadow-neutral-300">
                        {artist}
                        <br />
                        <p className="text-3xl shadow-neutral-300">{project}</p>
                      </h3>
                      <h3>
                        <br />
                        <br />
                        Drop du projet :{" "}
                        {new Date(lancement).toLocaleDateString("fr-FR")}
                      </h3>
                      <button
                        type="button"
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none backdrop-blur-2xl"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none backdrop-blur-2xl" />
                      </button>
                    </div>

                    {/* body */}
                    <div className="text-xl mt-5 bg-blend-saturation relative p-6 flex-auto drop-shadow-black backdrop-blur-2xl text-black-200 dark:text-black-400">
                      {descriptif}
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

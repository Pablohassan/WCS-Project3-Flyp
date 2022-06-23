export default function flypCard({
  image,
  title,
  artist,
  date,
  onViewDetails,
}) {
  return (
    <section className="transition duration-700 ease-in-out rounded-lg bg-white shadow-lg hover:shadow-xl hover:bg-slate-50 hover:scale-105 transition ">
      <div
        className="cursor-pointer h-[200px] bg-center bg-contain bg-no-repeat rounded-tl-lg rounded-tr-lg"
        style={{ backgroundImage: `url(${image})` }}
        onClick={onViewDetails}
      >
        <img className="hidden" src={image} alt={`${artist} ${title}`} />
      </div>

      <div className="p-4">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>

        <p className="text-gray-500 text-base">{artist}</p>

        <p className="mt-1 text-gray-500 text-sm">
          {new Date(date).toLocaleDateString("fr-FR")}
        </p>

        <button
          className="w-full mb-1 mt-4 bg-secondary text-white font-bold uppercase px-6 py-3 rounded shadow-lg"
          type="button"
          onClick={onViewDetails}
        >
          Projet
        </button>
      </div>
    </section>
  );
}

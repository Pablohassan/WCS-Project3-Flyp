export default function flypCard({
  image,
  title,
  artist,
  date,
  onViewDetails,
}) {
  return (
    <section className=" rounded-lg bg-white  hover:shadow-xl hover:bg-slate-50">
      <div
        className="rounded-2xl cursor-pointer bg-cover bg-center bg-no-repeat overflow"
        style={{ backgroundImage: `url(${image})` }}
        onClick={onViewDetails}
      >
        <img className="hidden" src={image} alt={`${artist} ${title}`} />
        <div className="h-[220px] mt-0 p-1  absolut ">
          <h5 className="mt-2 ml-2 text-white text-3xl  bg-gray-900/30 w-36 rounded ">
            {title}
          </h5>

          <p className="mt-28 ml-2 text-white text-xl bg-gray-900/30 w-36 rounded  ">
            {artist}
          </p>

          <p className="mt-0 ml-2 decoration-8 text-white text-sm drop-shadow-lg bg-gray-900/30 rounded w-24 ">
            {new Date(date).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
    </section>
  );
}

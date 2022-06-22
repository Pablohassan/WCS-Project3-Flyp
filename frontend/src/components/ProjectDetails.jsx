export default function ProjectDetails({
  title,
  description,
  image,
  artist,
  date,
  onClose,
}) {
  return (
    <section>
      <img src={image} className="w-full block" alt="Couverture du projet" />

      <div className="p-4 bg-blue-200">
        <header className="flex">
          <h3 className="grow text-xl font-semibold">
            <p className="mb-2">{artist}</p>
            <p className="text-3xl">{title}</p>
          </h3>

          <h3>
            <p>Drop du projet</p>
            <p>{new Date(date).toLocaleDateString("fr-FR")}</p>
          </h3>
        </header>

        <p className="my-8">{description}</p>

        <footer className="p-6 text-center border-t border-solid border-gray-200">
          <button
            className="bg-primary text-white font-bold uppercase px-6 py-3 rounded shadow-lg"
            type="button"
            onClick={onClose}
          >
            Fermer
          </button>
        </footer>
      </div>
    </section>
  );
}

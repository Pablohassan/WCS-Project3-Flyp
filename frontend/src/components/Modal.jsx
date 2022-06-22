export default function Modal({ onClose, children }) {
  return (
    <>
      <div
        className="bg-gray-800/80 fixed top-0 left-0 w-full h-screen z-30"
        onClick={onClose}
      />

      <div className="mt-32 px-4 w-full h-screen flex items-center justify-center absolute top-0 left-0 flex flex-col z-40">
        <div className="w-full sm:w-1/2">
          <section className="grow pb-4">{children}</section>
        </div>
      </div>
    </>
  );
}

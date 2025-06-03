import Image from "next/image";

export default function EventCard({ event, hideOnMobile }) {
  // hideOnMobile: boolean, if true, hide this card on mobile
  return (
    <div
      className={`flex flex-col justify-between rounded-lg overflow-hidden shadow hover:shadow-lg transition relative
        ${hideOnMobile ? "hidden sm:flex" : ""}
      `}
    >
      {/* Badge for New and Hot */}
      {event.status === "new" && (
        <span className="z-10 absolute top-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase shadow">
          New
        </span>
      )}
      {event.status === "hot" && (
        <span className="z-10 absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase shadow">
          Hot
        </span>
      )}

      <div className="h-40 sm:h-48 w-full relative">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-yellow-500 text-xs px-3 py-1 rounded-full text-white font-bold uppercase">
            {event.category}
          </span>
          <span className="text-sm font-medium text-yellow-600">
            {event.price}
          </span>
        </div>
        <h4 className="text-base sm:text-lg font-bold mb-1">{event.name}</h4>
        <p className="text-xs sm:text-sm text-gray-500">
          {event.dateTime} | {event.location}
        </p>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
      </div>
      <span className="pb-3 sm:pb-4 px-3 sm:px-4">
        <button className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 w-full text-sm sm:text-base">
          Register
        </button>
      </span>
    </div>
  );
}

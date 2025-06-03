import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  const [hotEvents, setHotEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch events from events.json
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter events with "hot" status
        const filteredEvents = data.filter((event) => event.status === "hot");
        setHotEvents(filteredEvents);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === hotEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [hotEvents]);

  if (hotEvents.length === 0) {
    return null; // Show nothing if no hot events are available
  }

  return (
    <section className="relative h-[95vh] min-h-[400px] poppins overflow-hidden">
      {/* Navbar with absolute positioning */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative h-full w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {hotEvents.map((event, index) => (
            <div
              key={index}
              className="relative h-[95vh] min-h-[400px] w-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${event.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative flex flex-col items-center justify-center text-white text-center h-full px-3 sm:px-0">
                <span className="bg-yellow-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full uppercase text-xs sm:text-sm font-bold">
                  {event.category}
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-4 leading-tight break-words">
                  {event.name}
                </h2>
                <div className="mt-4 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs sm:text-base">
                  <span>{event.dateTime.split(" - ")[0]}</span>
                  <span className="hidden sm:inline">|</span>
                  <span>{event.dateTime.split(" - ")[1]}</span>
                  <span className="hidden sm:inline">|</span>
                  <span>{event.location}</span>
                </div>
                <div className="mt-6 flex flex-row lg:max-w-[20%] md:max-w-[40%] sm:max-w-[60%] xs:flex-row gap-3 xs:gap-4 w-full xs:w-auto justify-center items-center">
                  <button className="w-full xs:w-auto bg-white text-black px-4 sm:px-6 py-2 rounded font-semibold hover:bg-white hover:text-yellow-500 transition-all ease-in-out duration-200">
                    Details
                  </button>
                  <button className="w-full xs:w-auto bg-yellow-500 text-white px-4 sm:px-6 py-2 rounded font-semibold hover:bg-white hover:text-yellow-500 transition-all ease-in-out duration-200">
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {hotEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";

export default function EventWrapper() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [isAscending, setIsAscending] = useState(true); // Track sort direction
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [eventsPerPage, setEventsPerPage] = useState(6); // Responsive events per page

  // Responsive events per page: 4 for mobile, 6 for desktop
  useEffect(() => {
    const updateEventsPerPage = () => {
      if (window.innerWidth < 640) {
        setEventsPerPage(4);
      } else {
        setEventsPerPage(6);
      }
    };
    updateEventsPerPage();
    window.addEventListener("resize", updateEventsPerPage);
    return () => window.removeEventListener("resize", updateEventsPerPage);
  }, []);

  useEffect(() => {
    // Fetch events from the JSON file
    fetch("./data/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Reset currentPage to 1 when searchTerm, filter, or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filter, sort, eventsPerPage]);

  // Filter and Search Logic
  const filteredEvents = events
    .filter((event) => {
      // Search through multiple fields
      const searchFields = [
        event.name,
        event.location,
        event.description,
        event.category,
        event.status,
      ];
      const matchesSearch = searchFields.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Apply filter for hot, new, or free events
      const matchesFilter =
        filter === "hot"
          ? event.status === "hot"
          : filter === "new"
          ? event.status === "new"
          : filter === "free"
          ? event.price.toLowerCase() === "free"
          : true;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // Sorting Logic
      let comparison = 0;

      if (sort === "price") {
        const priceA =
          a.price.toLowerCase() === "free"
            ? 0
            : parseFloat(a.price.replace("$", ""));
        const priceB =
          b.price.toLowerCase() === "free"
            ? 0
            : parseFloat(b.price.replace("$", ""));
        comparison = priceA - priceB;
      } else if (sort === "time") {
        const dateA = new Date(a.dateTime.split(" - ")[0]);
        const dateB = new Date(b.dateTime.split(" - ")[0]);
        comparison = dateA - dateB;
      }

      return isAscending ? comparison : -comparison; // Apply sort direction
    });

  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section
      id="events"
      className="text-black container mx-auto px-2 sm:px-4 py-8 sm:py-12"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
        Featured <span className="text-yellow-500">Events</span>
      </h3>
      <p className="text-center text-gray-500 max-w-xl mx-auto text-sm sm:text-base mb-2 sm:mb-2">
        Discover the best local events happening around you.
      </p>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-base sm:text-lg">
            No events found.
          </div>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center mt-6 gap-2">
        <button
          className="px-3 py-2 text-sm sm:text-base bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-2 text-sm sm:text-base rounded ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-2 text-sm sm:text-base bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

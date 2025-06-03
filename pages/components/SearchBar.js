export default function SearchBar({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  sort,
  setSort,
  isAscending,
  setIsAscending,
}) {
  const toggleSort = () => {
    if (sort === "") {
      setSort("price");
    } else if (sort === "price") {
      setSort("time");
    } else if (sort === "time") {
      setSort("");
    }
  };

  const toggleSortDirection = () => {
    setIsAscending((prev) => !prev);
  };

  const toggleFilter = () => {
    if (filter === "") {
      setFilter("hot");
    } else if (filter === "hot") {
      setFilter("new");
    } else if (filter === "new") {
      setFilter("free");
    } else if (filter === "free") {
      setFilter("");
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto flex flex-col gap-3 justify-center px-4 sm:flex-row sm:items-center">
        {/* Search Input with Icon */}
        <div className="relative min-w-0 sm:min-w-80 w-full sm:w-auto mb-2 sm:mb-0">
          <input
            type="text"
            placeholder="Search events..."
            className="border-2 text-black border-black rounded-full px-10 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-2l4 4"
            />
          </svg>
        </div>

        {/* Inline Filter and Sort for mobile */}
        <div className="flex flex-row gap-3 w-full sm:w-auto">
          {/* Toggleable Filter Button */}
          <button
            className="border-2 rounded-3xl text-black border-black px-3 py-2 min-w-0 sm:min-w-32 w-full sm:w-auto"
            onClick={toggleFilter}
          >
            {filter === ""
              ? "All Events"
              : filter.charAt(0).toUpperCase() + filter.slice(1) + " Events"}
          </button>

          {/* Sort Button with Arrow */}
          <div className="flex items-center justify-between border-2 gap-2 border-black rounded-3xl px-6 py-2 min-w-0 sm:min-w-32 w-64 sm:w-auto">
            <button
              className="text-black w-full text-left sm:text-center"
              onClick={toggleSort}
            >
              {sort === ""
                ? "Sort"
                : sort.charAt(0).toUpperCase() + sort.slice(1)}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 lg:w-7 lg:h-7 text-black cursor-pointer transform transition-transform ${
                isAscending ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleSortDirection}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m0 0l-6-6m6 6l6-6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="poppins bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-base sm:text-lg font-semibold mb-4 tracking-wider">
          Available at:
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          {/* GitHub Link */}
          <Link
            href="https://github.com/PERPELEX"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="flex items-center gap-2 cursor-pointer text-base font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current text-white group-hover:text-[#6e5494] transition duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.11-.776.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.62-5.478 5.92.43.37.815 1.096.815 2.21v3.285c0 .32.22.694.825.576C20.565 21.798 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="group-hover:text-[#6e5494] transition duration-200">
                GitHub
              </span>
            </span>
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/in/abdul-hannan-amir-586b95258/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="flex items-center gap-2 cursor-pointer text-base font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current text-white group-hover:text-blue-500 transition duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.041 0 3.604 2.001 3.604 4.604v5.588z" />
              </svg>
              <span className="group-hover:text-blue-500 transition duration-200">
                LinkedIn
              </span>
            </span>
          </Link>

          {/* Portfolio Link */}
          <Link
            href="https://aha-portfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="flex items-center gap-2 cursor-pointer text-base font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current text-white group-hover:text-red-500 transition duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z" />
              </svg>
              <span className="group-hover:text-red-500 transition duration-200">
                Portfolio
              </span>
            </span>
          </Link>
        </div>
        <p className="mt-6 text-xs sm:text-sm text-gray-400 tracking-wider">
          © {new Date().getFullYear()} AHA | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

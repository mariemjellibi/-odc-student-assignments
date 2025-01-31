import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const elementRef = useRef<HTMLLIElement>(null);

  const toggleDropDown = () => setShowDropDown(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        toggleDropDown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleDropDown]);
  return (
    <nav className="bg-primary border-gray-200  dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 448.012"
            height={40}
          >
            <path
              fill="#424C57"
              fillRule="nonzero"
              d="M386.912 404.082c-31.653 27.804-68.134 42.5-104.037 43.83-37.327 1.383-73.956-11.673-103.851-39.445l-15.148-14.072-54.139-44.075h-48.07c-25.406 0-43.633-20.936-46.214-46.212L.195 154.71c-2.581-25.279 20.879-48.258 46.214-46.215l189.276 15.258c25.335 2.042 46.214 20.793 46.214 46.215v134.14c0 25.418-20.805 46.212-46.214 46.212h-59.323l4.221 47.53 4.398 2.497c33.226 18.862 65.806 26.928 96.721 22.849 28.258-3.73 55.317-17.66 80.412-42.828l-15.449-13.603 64.278-14.309-7.532 67.307-16.499-15.681z"
            />
            <path
              fill="#337EC6"
              d="M276.315 73.91l113.118-9.119-30.176-17.127c-33.228-18.859-65.809-26.927-96.721-22.848-28.26 3.73-55.319 17.66-80.414 42.827l15.449 13.604-64.277 14.309 7.533-67.307 16.498 15.682C188.979 16.128 225.46 1.43 261.363.099c37.327-1.382 73.956 11.673 103.851 39.446l26.942 25.027 73.434-5.92c25.335-2.042 48.796 20.936 46.215 46.216l-15.258 149.397c-2.581 25.277-20.808 46.212-46.215 46.212h-50.099l-71.815 58.466 5.19-58.466h-57.293c-25.411 0-46.216-20.793-46.216-46.212V120.126c0-25.422 20.881-44.173 46.216-46.216z"
            />
            <path
              fill="#fff"
              d="M84.246 173.714h43.841v-12.353h19.585v12.353h44.001v20.281h-9.033c-1.629 12.811-5.21 23.368-11.297 34.746-5.149 9.611-11.796 18.87-19.516 27.744 12.32 14.735 27.616 27.554 45.826 39.24l-10.073 15.701c-19.119-12.267-35.356-25.774-48.699-41.332-11.936 11.547-25.496 22.303-39.7 32.127l-10.588-15.325c14.055-9.725 27.407-20.347 38.896-31.672-10.588-15.493-18.697-32.88-24.308-52.875l17.968-5.038c4.601 16.401 11.052 30.837 19.344 43.759 5.657-6.848 10.548-13.876 14.412-21.092 4.74-8.866 7.286-16.196 8.89-25.983H84.246v-20.281zM398.456 215.314h-55.931l-7.357 25.09h-27.814c11.988-31.729 25.831-69.829 37.825-101.573 4.318-11.466 9.234-30.467 24.943-30.467 16.284 0 21.691 17.409 26.222 29.436l38.4 103.122h-28.708l-7.58-25.608zm-6-24.398l-21.893-57.703-21.971 57.703h43.864z"
            />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Guide
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li ref={elementRef}>
              <button
                onClick={() => setShowDropDown(!showDropDown)}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Start learning
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <div className="relative">
              <div
                id="dropdown"
                className={`absolute right-8 w-40 top-11 z-30 ${
                  !showDropDown && "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
              >
                <ul
                  className="py-2 w-full text-sm text-gray-700 "
                  aria-labelledby="dropdownDefaultButton"
                >
                  <Link
                    to={{
                      pathname: "/learn/japanese",
                    }}
                  >
                    <li className="block px-4 py-2  hover:bg-secondary hover:text-white">
                      Japanese
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/learn/korean",
                    }}
                  >
                    <li className="block px-4 py-2 hover:bg-secondary dark:hover:text-white">
                      Korean
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/learn/turkish",
                    }}
                  >
                    <li className="block px-4 py-2 hover:bg-secondary  dark:hover:text-white">
                      Turkish
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

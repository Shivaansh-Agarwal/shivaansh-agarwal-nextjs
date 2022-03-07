import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const routesList = [
    { route: "projects", displayName: "Projects" },
    { route: "blogs", displayName: "Blogs" },
    // { route: "dsa", displayName: "DSA" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center h-20 sm:h-16 z-10 border drop-shadow-md bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-between h-full w-11/12 sm:w-10/12 md:w-9/12 2xl:w-8/12 xl:px-48 2xl:px-60 mx-auto">
        <Link href="/">
          <a className="font-cursive font-medium pt-2 sm:pt-0 sm:font-medium text-3xl sm:text-4xl text-gray-900 flex justify-center items-center">
            Shivaansh Agarwal
          </a>
        </Link>
        <nav className="flex justify-between w-40 h-full">
          {routesList.map((item) => {
            const { route, displayName } = item;
            return (
              <Link key={route} href={`/${route}`}>
                <a
                  className={`${
                    router.pathname === "/" + route
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-600"
                  } text-base sm:text-lg sm:px-4 hover:bg-gray-100 flex items-center`}
                >
                  {displayName}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

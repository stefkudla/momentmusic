"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItems = {
  path: string;
  title: string;
};

const navItems: NavItems[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "releases",
    title: "Releases",
  },
  {
    path: "upcoming-shows",
    title: "Upcoming shows",
  },
  {
    path: "last-friday",
    title: "Last Friday",
  },
  {
    path: "studio-sessions",
    title: "Studio sessions",
  },
];

const Navigation = () => {
  const currentRoute = usePathname();
  return (
    <div className="flex flex-col gap-y-3 pt-20 flex-grow">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={`/${item.path}`}
          className={clsx(
            "text-gray-500 text-2xl border-l-2 border-transparent pl-2 hover:text-white transition-colors",
            {
              "text-white border-electric-violet-600":
                currentRoute === item.path,
            }
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

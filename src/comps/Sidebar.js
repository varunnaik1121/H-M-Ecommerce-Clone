import React from 'react';
import { sidebarCategories } from '../data/sidebarData';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="md:text-sm md:block md:min-w-[240px] md:max-w-[240px] md:px-5 md:h-full border-2 md:border-red-500 hidden">
      {sidebarCategories.map((category, i) => {
        return (
          <div
            className="md:flex items-start justify-start flex-col p-3 capitalize hidden"
            key={i}
          >
            <h4 className="font-bold tracking-wider text-sm py-1">
              {category.title}
            </h4>
            {category.subtitle.map((value) => {
              return (
                <a
                  href={value.path}
                  key={value.title}
                  className="hover:underline hover:text-red"
                >
                  <li className="list-none text-[12px] py-1 font-medium">
                    {value.title}
                  </li>
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

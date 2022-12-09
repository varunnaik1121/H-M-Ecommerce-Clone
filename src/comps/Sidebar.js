import React from 'react';
import { sidebarCategories } from '../data/sidebarData';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="md:text-sm lg:block lg:min-w-[240px] lg:max-w-[240px] lg:px-5 lg:h-full  hidden">
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

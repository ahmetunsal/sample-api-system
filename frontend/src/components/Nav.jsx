import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Nav = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    async function getNavLinks() {
        await fetch('http://127.0.0.1:8000/api/nav-list/')
        .then(res => res.json())
        .then(data => {
            setNavLinks(data)
        })
    }

    getNavLinks()
  }, []);

  return (
    <div className="w-full px-10 py-6 flex justify-between items-center">
      <div className="flex">
        LOGO
      </div>
      <div className="flex">
        <ul>
            {
                navLinks.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.urlpath}>
                                {link.title}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default Nav;

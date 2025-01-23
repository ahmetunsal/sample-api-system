import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { Outlet } from "react-router";

const DocsLayout = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getCategories() {
        await fetch('http://127.0.0.1:8000/api/category/')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }

    async function getTitles() {
        await fetch('http://127.0.0.1:8000/api/title/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTitles(data)
        })
    }

    getCategories()
    getTitles()
  }, []);

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="grid xl:px-3 xl:gap-4 gap-2 grid-cols-12">
        <div className="flex flex-col h-[90vh] overflow-y-auto gap-4 py-5 col-span-3 xl:col-span-2 rounded-3xl bg-zinc-800">
          {
            categories.map(category => {
                const selectedTitle = titles.filter(post => post.category == category.id) || [];
                return (
                    <ul key={category.id} className="w-full flex flex-col gap-2 px-4">
                        <h2 className="text-3xl mb-2">{category.category_title}</h2>
                        {
                            selectedTitle.map(post => {
                                return (
                                    <li key={post.id} className="w-full flex hover:bg-zinc-900 px-4 py-2 rounded-2xl">
                                        <a href={`/docs/${post.slug}`} className="w-full flex">{post.title}</a>
                                    </li>
                                )
                            })
                        }
                        <hr />
                    </ul>
                )
            })
          }
        </div>
        <div className="flex h-[90vh] py-5 col-span-9 xl:col-span-10 bg-zinc-800 rounded-2xl px-2">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;

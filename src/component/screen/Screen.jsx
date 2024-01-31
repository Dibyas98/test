import React from "react";
import "./screen.css";
import Store from "../store/Store";
import DataList from "../dataList/DataList";
import MovieDetail from "../moviedisplay/MovieDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Screen() {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <DataList></DataList>,
        },
        {
            
                path: '/movie/:id',
                element : <MovieDetail></MovieDetail>
            
        }
    ])
  return (
    <Store>
      <div className="screen-cont">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </Store>
  );
}

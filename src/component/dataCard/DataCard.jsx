import React, { useContext } from "react";
import "./datacard.css";
import Rate from "../rate/Rate";
import { Data } from "../store/Store";
import { Link, useParams } from "react-router-dom";

export default function DataCard({ detail }) {
  const { handelmovieDetail, setApiList, setMovie } = useContext(Data)
  return (
    <Link to={`/movie/${detail.id}`} className="datacard">
      <div onClick={() => {
        setMovie(detail)
        // handelmovieDetail(detail)
      }}>
        {detail.image ? <img src={detail.image.medium} alt="" /> : <img src="" alt="image" />}

        <div className="datacard-detail">
          <h3>Name:{detail.name}</h3>
          <h4>Lang:-{detail.language}</h4>
          <p>Type:-{detail.genres.join(" ")}</p>
        </div>
      </div>
    </Link>
  );
}

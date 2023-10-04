import React, { useEffect, useState } from "react";
import getGiffs from "../services/getGiffs";
import Gif from "./Gif";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGiffs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <i>Cargando 🌀</i>;

  return gifs.map(({ id, title, url }) => (
    <>
      <Gif key={id} title={title} id={id} url={url} />
    </>
  ));
}

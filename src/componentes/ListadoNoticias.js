import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListadoNoticias(){

    const[noticias, setNoticias]=useState([])

    const cargarNoticias = async() => {
        try {
            const response = await fetch("/noticias.json")
            const data = await response.json();
            setNoticias(data)
        } catch (error) {
            console.log("Error al cargar las noticias", error)
        }
    }

    useEffect(() => {
        if(noticias.length===0){}
        cargarNoticias();
    }, [])

    return(
        <ul>
            {noticias.map((noticia, indice) => 
            <li>
                <Link to={"/noticias/"+indice}>{noticia.titulo}</Link>
            </li>
            )}
        </ul>
    )
}

export default ListadoNoticias;
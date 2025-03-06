import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Noticia(){

    const params = useParams();
    const id = params.id;

    const[noticia, setNoticia]=useState(null)

    const cargarNoticia = async () => {
        try {
            const response = await fetch("/noticias.json");
            const data = await response.json();
            setNoticia(data[id])
        } catch (error) {
            console.log("Error al cargar la noticia", error)
        }
    }

    useEffect(() => {
        cargarNoticia();
    }, [id])

    if (!noticia){
        return <h2>Cargando noticia...</h2> // Trampa para darle tiempo a cargar y que no me dé error. Sin esta línea, no funciona.
    }

    return(
        <Card>
      <Card.Body>
        <Card.Title>{noticia.titulo}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Contenido: {noticia.contenido}</ListGroup.Item>
        <ListGroup.Item>Categoría: {noticia.categoria}</ListGroup.Item>
        <ListGroup.Item>Autor: {noticia.autor}</ListGroup.Item>
        <ListGroup.Item>Fecha: {noticia.fecha}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Volver al listado de noticias</Card.Link>
      </Card.Body>
    </Card>

    )
}

export default Noticia;
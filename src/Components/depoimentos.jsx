import React from "react";
import '../folhas-de-estilo/Depoimentos.css';

function Depoimentos (props) {
    return (
   <div className="container-depoimento">
    <img className="imagem-depoimento" src={require(`../images/depoimento-${props.imagem}.png`)} alt='foto de Emma' />
    <div className="container-texto-depoimento">
    <p className="nome-depoimento"><strong>{props.nome}</strong>  na {props.pais}</p>
    <p className="cargo-testemunho">{props.cargo} no <strong>{props.empresa}</strong></p>
    <p className="texto-depoimento"> "{props.depoimento}"</p>
    </div>
   </div>
    );
}


export default Depoimentos;


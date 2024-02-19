import styled from "styled-components"
import Tags from "../Tags"
import Titulo from "../Titulo"
import Populares from "../Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({fotos}) => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    {fotos.map(foto => <Imagem fotoObj={foto} key={foto.id}/>)}
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria
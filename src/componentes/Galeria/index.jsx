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
    padding: 10px;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], aoFotoSelecionada,aoAltenarFavorito}) => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAltenarFavorito={aoAltenarFavorito}
                            foto={foto} 
                            key={foto.id}/>)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria
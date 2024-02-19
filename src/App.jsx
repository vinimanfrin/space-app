import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import TituloEstilizado from "./componentes/TituloEstilizado"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"


const FundoGradiente = styled.div`

  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppContainer = styled.div`

  width: 1480px;
  max-width: 100%;
  margin: 0 auto;

`

const MainContainer = styled.main`

  display: flex;
  gap: 70px;

`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosGaleria,setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const aoAltenarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosGaleria(fotosGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  const fecharFoto = () => {
    setFotoSelecionada(null)
  }
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <ConteudoGaleria>
            <TituloEstilizado/>
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAltenarFavorito={aoAltenarFavorito}  
              fotos={fotosGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={fecharFoto} aoAltenarFavorito={aoAltenarFavorito}/>
    </FundoGradiente>
  )

}

export default App

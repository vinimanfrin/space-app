import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import TituloEstilizado from "./componentes/TituloEstilizado"


const FundoGradiente = styled.div`

  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppContainer = styled.div`

  width: 1440px;
  max-width: 100%;
  margin: 0 auto;

`

const MainContainer = styled.main`

  display: flex;
  gap: 24px;

`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <TituloEstilizado/>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )

}

export default App

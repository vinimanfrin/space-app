import styled from "styled-components"


const Banner = styled.div`

    width: 1156px;
    height: 328px;

    background-image: url("imagens/banner.png");
    border-radius: 20px;
    

    font-weight: 300;
    font-size: 20px;
    line-height: 10px;
    color: rgba(255, 255, 255, 1);

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        margin-left: 30px;
    }
    
`

const TituloEstilizado = () => {
    return (
        <Banner>
            <h1>A galeria mais</h1>
            <h1>completa de</h1>
            <h1>fotos do espaço!</h1>
        </Banner>
    )
}

export default TituloEstilizado
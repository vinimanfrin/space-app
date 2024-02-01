import styled from "styled-components"

const InputEstilizado = styled.div`
    width: 602px;
    height: 56px;
    padding: 12px 16px;

    display: flex;
    justify-content: space-between;

    
    border: 2px solid rgba(201, 140, 241, 1);
    border-radius: 10px;

    input{
        background:none;
        border: none;
        width: 100%;

        &::placeholder{
            color: rgba(217, 217, 217, 1);
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
        }

        &:focus {
            outline: none;
        }
    }    
`
const ImagemLupa = styled.img`
    max-width: 32px;

`

const CampoTexto = () => {
    return(
        <InputEstilizado>
            <input type="text" placeholder="O que você procura?" />
            <ImagemLupa src="/imagens/search.png"/>
        </InputEstilizado>
    )
}

export default CampoTexto
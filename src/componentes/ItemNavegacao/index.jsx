import styled from "styled-components"

const ItemListaEstilizado = styled.li`

`

const ItemNavegacao = (props, {ativo=false}) => {
    return <ItemListaEstilizado>
            <img src={ativo ? props.iconeAtivo : props.iconeInativo} alt="" />
            {props.children}
        </ItemListaEstilizado>
    
}

export default ItemNavegacao
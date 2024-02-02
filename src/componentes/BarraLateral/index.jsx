import styled from "styled-components"
import ItemNavegacao from "../ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                    iconeInativo="/icones/home-inativo.png"
                    iconeAtivo="/icones/home-ativo.png">
                        Início
                    </ItemNavegacao>

                    <ItemNavegacao 
                    iconeInativo="/icones/mais-vistas-inativo.png"
                    iconeAtivo="/icones/mais-vistas-ativo.png">
                        Mais vistas
                    </ItemNavegacao>
                    
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral
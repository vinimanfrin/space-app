import styled from "styled-components"
import tags from "./tags.json"

const TagContainer = styled.div`
    display: flex;
    margin: 20px 0;
    gap: 15px;
    align-items: center;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const TituloTags = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
`


const Tags = () => {
    return <TagContainer>
        <TituloTags>Busque por Tags:</TituloTags>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </TagContainer>
}

export default Tags
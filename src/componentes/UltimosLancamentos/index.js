import styled from 'styled-components'
import iron from '../../imagens/filmes/iron_lung.jpg'
import mortal from '../../imagens/filmes/mortal.jpg'
import prada from '../../imagens/filmes/prada2.jpg'
import panico from '../../imagens/filmes/panico.jpg'
const lancamentos = [
{ nome: 'Iron Lung', id: 1, src: iron },
{ nome: 'Mortal Kombat 2', id: 2, src: mortal },
{ nome: 'O Diabo veste Prada 2', id: 3, src: prada },
{ nome: 'Pânico 7', id: 4, src: panico }
]
const LancamentosContainer = styled.section`
background-color: #6f37bd;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #ffffff;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #fff;
width: 180px;
padding: 20px;

border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
return (
<LancamentosContainer>
<Titulo>Últimos Lançamentos</Titulo>
<Filmes>
{lancamentos.map(filme => (
<FilmeCard>
<Capa src={filme.src} alt={filme.nome} />
<p>{filme.nome}</p>
</FilmeCard>
))}
</Filmes>
</LancamentosContainer>
)
}
export default UltimosLancamentos
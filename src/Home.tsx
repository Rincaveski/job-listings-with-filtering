import Card from "./components/card/Card"
import vagas from './data.json'

function Home() {

  return (
    <>
      {vagas.map(vaga => <Card key={vaga.id} {...vaga} />)}
    </>
  )
}

export default Home

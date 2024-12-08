import { useState } from 'react'
import Card from './components/card/Card'
import Header from './components/nav/Header'
import vagas from './data.json'
import classes from './Home.module.css'

function Home() {
  const [filtro, setFiltro] = useState<string[]>([])

  const adicionaEquipamento = (value: string) => {
    if (!filtro.some(requisito => requisito === value)) {
      setFiltro((prevFiltro) => [...prevFiltro, value])
    }
  }

  const removeEquipamento = (value: string) => {
    setFiltro((prevFiltro) =>
      prevFiltro.filter((requisito) => requisito !== value)
    )
  }

  return (
    <>
      <Header requerimentos={filtro} onFilter={removeEquipamento} />
      <ul className={classes.cards}>
        {vagas
          .filter(
            (vaga) =>
              filtro.length == 0 || // Mostra todas as vagas se o filtro estiver vazio
              filtro.some(
                (f) =>
                  vaga.languages.includes(f) ||
                  vaga.tools.includes(f) ||
                  filtro.includes(vaga.level) ||
                  filtro.includes(vaga.role)
              )
          )
          .map((vaga) => (
            <Card key={vaga.id} {...vaga} onFilter={adicionaEquipamento} />
          ))}
      </ul>
    </>
  )
}

export default Home

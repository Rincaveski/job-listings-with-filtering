import './Header.module.css'

type HeaderType = {
  requerimentos: string[]
  onFilter: (value: string) => void
}

const Header = ({ requerimentos, onFilter }: HeaderType) => {
  const handleClick = (value: string) => {
    onFilter(value)
  }

  return (
    <header>
      <nav style={{display: requerimentos.length > 0 ? 'flex' : 'none'}}>
        {requerimentos &&
          requerimentos.map((requerimento) => (
            <div key={requerimento}>
              <span>{requerimento}</span>
              <div onClick={() => handleClick(requerimento)}>
                <img src="/images/icon-remove.svg" alt="" />
              </div>
            </div>
          ))}
      </nav>
    </header>
  )
}

export default Header

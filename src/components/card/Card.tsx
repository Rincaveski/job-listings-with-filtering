import { Vaga } from "../../types/vaga"
import classes from './Card.module.css'

const Card = ({ id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools }: Vaga) => {
  return (
    <div className={classes.card}>
      <img src={logo} alt={company} />
      <div className={classes.wrapper}>
        <div className={classes.company}>
          <h1>{company}</h1>
          {isNew && <span className={classes.company__isNew}>new!</span>}
          {featured && <span className={classes.company__featured}>featured</span>}
        </div>

        <div className={classes.description}>
          <h2>{position}</h2>
          <p>{postedAt} <span /> {contract} <span /> {location}</p>
        </div>
      </div>
        <div className={classes.requirements}>
          <span>{role}</span>
          <span>{level}</span>
          {tools && (
            tools.map(tool => <span key={id + tool}>{tool}</span>)
          )}
          {languages && (
            languages.map(languague => <span key={id + languague}>{languague}</span>)
          )}
        </div>
    </div>
  )
}

export default Card
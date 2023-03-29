import React, { ChangeEvent, KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from './Search.module.css'

type SeachProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser } : SeachProps) => {
    const [userName, setUserName] = React.useState<string>('')

    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === 'Enter'){
        loadUser(userName)
      }
    }

  return (
    <div className={classes.container}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>

      <div className={classes.search_container}>
        <input 
        type="text"
        placeholder='Digite o nome do usuário'
        value={userName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
            <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search

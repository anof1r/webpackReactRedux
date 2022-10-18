import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCurrentRepo } from '../actions/repos'
import './card.less'

function Card() {
    const navigate = useNavigate()
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})

    useEffect(() => {
      getCurrentRepo(username, reponame, setRepo)
    }, [])

  return (
    <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <div className='card'>
          <img src={repo.owner.avatar_url} alt=''></img>
          <div className='name'>{repo.name}</div>
          <div className='stars'>{repo.startgazers_count}</div>
        </div>
    </div>
  )
}

export default Card
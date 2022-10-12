import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../actions/repos'
import './main.less'
import Repo from './repo/Repo'

function Main() {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(searchValue))
    }

    return (
        <div className='container'>
            <div className='search'>
                <input className='search-input' type='text' placeholder='Input repo name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <button onClick={() => searchHandler()} className='search-btn'>Search</button>
            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo => {
                        return (<Repo repo={repo} />)
                    })
                    :
                    <div className='fetching'>
                    </div>
            }
        </div>
    )
}

export default Main
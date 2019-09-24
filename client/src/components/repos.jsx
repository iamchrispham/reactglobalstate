import React, { useState, useEffect, useContext } from 'react';
import StoreContext from '../store/store.jsx';

const Repos = () => {
  const globalState = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }

    return () => {
      if (globalState.get('repos') && !loading) {
        setRepos(globalState.get('repos'));
      }
    }
  })

  const mapRepos = () => 
    repos.map((repo, i) => {
      return (
        <div key={i}>
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank" >
            <h3>{repo.name}</h3>
          </a>
            <h5>{repo.description}</h5>
        </div>
      )
    })

  return (
    <div>
      Repos:
      {repos ? mapRepos() : null}
    </div>
  )
}

export default Repos;
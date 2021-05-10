import React, {useState, useEffect}from 'react'

function DataFeatch() {
  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)

  const fachData = async () => {
    const response = await fetch('https://api.randomuser.me/')
    const data = await response.json()
    const [item] = data.results

    setUser(item)
    setloading(false)
  }

  useEffect(() => {
    fachData()
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>{user.name.first} {user.name.last}</h1>}
    </div>
  )
}

export default DataFeatch

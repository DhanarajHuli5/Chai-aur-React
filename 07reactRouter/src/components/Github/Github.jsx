import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const [data, setData] =useState(0)
    const { username } = useParams()
    
    useEffect(() => {
        if (username) {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [username]); // Dependency array includes username

    if (!data) {
        return <div>Loading...</div>;
    }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src='{data.avatar_url} width="300"'></img>
     </div>
  )
}

export default Github
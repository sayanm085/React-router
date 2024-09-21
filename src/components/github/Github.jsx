import React ,{useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

  let data = useLoaderData()


  //  const [data, setData] = useState([])
  //   useEffect(() => {
  //    fetch('https://api.github.com/users/sayanm085')
  //    .then(response => response.json())
  //    .then(data => {
  //       console.log(data);
  //       setData(data)
  //    })
  //   }, [])





  return (
    <div className='bg-gray-500 h-auto pb-5 pt-5 flex flex-col justify-center items-center'>
        <p className='text-4xl'>Name : {data.name}  </p>
        <p className='text-3xl'>public_repos : {data.public_repos}  </p>
        <p className='text-3xl'>followers : {data.followers}</p>
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github



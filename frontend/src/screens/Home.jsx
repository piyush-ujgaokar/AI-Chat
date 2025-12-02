import {useContext} from 'react'
import {UserContext} from '../context/UserContext.jsx'

const Home = () => {

    const {user}=useContext(UserContext)


  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default Home
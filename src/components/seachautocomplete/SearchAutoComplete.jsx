import React, { useEffect, useState } from 'react'

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error,setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showData, setShowData] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase()
        setSearchParam(query);
        if(query.length > 1){
            const filteredData = users && users.length ? 
            users.filter(item => item.toLowerCase().indexOf(query) > -1) : []
            setFilteredUsers(filteredData);
            setShowData(true)
        }
    }
    
    async function fetchUsers(){
        try{
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem => userItem.firstName))
                setLoading(false)
            }
        }catch(e){
            setError(e.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    console.log(users, filteredUsers)
  return (
    <div>
        <input name='search-users' placeholder='search' onChange={(e)=> handleChange(e)}/> 
        {showData ? <div>{filteredUsers.map((item)=> <li>{item}</li>)}</div>: null}
    </div>
  )
}

export default SearchAutoComplete
import React, { useEffect, useState } from "react";
import './github.css'
const Github = () => {
  const [input, setInput] = useState("iamuzairbaba");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState();

  const handleSearch = () => {
    githubSearch(input);
  };
  async function githubSearch(username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setProfile(data);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
    useEffect(()=>{
      githubSearch(input)
    },[])
  if (loading) <div>Loading...</div>;
  return (
    <div className="github-container">
      <div className="btn-container">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Github UserName"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {profile && (
        <div className="profile-container">
          <img src={profile.avatar_url} alt="" className="profile-img" />
          <p className="profile-name">{profile.name}</p>
          <p className="profile-bio">{profile.bio}</p>
          <p className="profile-login">{profile.login}</p>
          <p>total repos</p>
          <p>{profile.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default Github;

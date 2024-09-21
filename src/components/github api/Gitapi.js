const githunprofile =async ()=>{

    const respons= await fetch('https://api.github.com/users/sayanm085')
    return respons.json()
  
  }

  export default githunprofile
const users = [
    {
      name:'Brook', 
      scores:75,
      skills:['HTM', 'CSS', 'JS '],
      age:16
    },
    {
      name:'Alex', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    }, 
    {
      name:'David', 
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    }, 
    {
      name:'John', 
      scores:85,
      skills:['HTM'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
  ];
  
  const filterStudentMarks = (users) => {
    for(let i=0;i< users.length; i++){
      if(users[i].scores > 85){
        console.log(users[i])
      }
    }
  }
  
  const newUser = {
    name: 'Billy',
    // name: 'Thomas',
    scores: 800,
    skills: ['HTML', 'CSS', 'JS'],
    age: 25
  };
  
  const addUser = (users, newUser) => {
    for(let user of users){
      if(user.name === newUser.name){
        console.log("User Existed")
      } 
    }
    users.push(newUser)
    console.log(users)
  }
  
  const newSkills = ["REACT" ,"PYTHON"]
  // const newSkills = "REACT"
  
  const addUserSkills = (users,userName, newSkills) => {
    let isPresent = false;
    for(let user of users){
      if(userName === user.name){ 
        isPresent = true;    
        if(Array.isArray(newSkills)){
          for(let skills of newSkills) {
            user.skills.push(skills)
          }
        } else {
          user.skills.push(newSkills)
        }
        console.log(users)
        break;
      }
    }
    if(!isPresent){
      console.log("User does not Exist")
    }
  }
  
  const updateUserData = {
    // name: "Batman",
    scores: 100,
    // skills : ["REACT", "JAVA"],
    // skills : "JAVA",
    age:20
  }
  
  const editUser = (users, userName, updateUser) => {
    let isPresent = false;
    for(let user of users) {
      if(userName === user.name){
        isPresent = true;
        user.name = updateUser.name ? updateUser.name : user.name
        user.scores = updateUser.scores ? updateUser.scores : user.scores    
        user.age = updateUser.age ? updateUser.age : user.age
        if(Array.isArray(updateUser.skills)){
          user.skills = []
          for(let skills of updateUser.skills) {
            user.skills.push(skills)
          }
        } else {
          user.skills = updateUser.skills ? updateUser.skills : user.skills
        }
        console.log(users)
        break;
      }
    }
    if(!isPresent){
      console.log("User Does not Exist");
    }
  }
  
  filterStudentMarks(users)
  addUser(users, newUser)
  addUserSkills(users, "Thomas", newSkills);
  editUser(users, "Sara", updateUserData)
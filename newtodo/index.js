
let tasklist= [
    {
        id:11231,
        username:'Nischal Maharjan',
        email:'neeschal@gmail.com',
        phone:'9868136666'
    }
    

];

const displayTask = ()=>{
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val,index)=>{
        document.querySelector('#tasklist').innerHTML += `
        <div class = "task-card">
        <div class = "task-title">${val.username}</div>
        <div class = "task-description">${val.email}
        </div>
        <div class = "task-description">${val.phone}
        </div>
        <div class = "button-area">
        <button class="btn btn-secondary"  onClick="getEditData(${index})">Edit Task</button>
        <button class="btn btn-info"
        onClick="deleteTask(${val.id})">Clear Task</button>
        </div>
        </div>

        
        `;
    });
}
displayTask();
const addToArray=()=>{
    const [username,email,phone]=[
        document.querySelector('#addUsername').value,
        document.querySelector('#addEmail').value,
        document.querySelector('#addphone').value,

    ];
    const id = tasklist[tasklist.length-1].id+1;
    if([username,email].includes('')){
        alert('Please fill both boxes');

    }else{
        tasklist.push({
            id,username,email,phone
        });
        

        document.querySelector('#addUsername').value = '';
        document.querySelector('#addEmail').value = '';
        document.querySelector('#addphone').value = '';

        
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
  
    }
    else
    {
    alert("You have entered an invalid email address!");


    }

   var phoneformat = /(?:\+977[- ])?\d{2}-?\d{7,8}/
   if(phone.match(phoneformat)){

    displayTask();
   }
   else
   {
   alert("You have entered an invalid phone");


   }
    

 
}

const deleteTask = id=>{
    console.log(id);
    tasklist = tasklist.filter(val=>val.id!==id);
    console.log(tasklist);
    displayTask();
}





const getEditData = (i)=>{
    document.querySelector('#editID').value = tasklist[i].id;

    document.querySelector('#editUsername').value = tasklist[i].username;
    document.querySelector('#editEmail').value= tasklist[i].email;
    document.querySelector('#editphone').value= tasklist[i].phone;

    
   
}
const saveEditData=()=>{
  let  [id,username,email,phone]=[
    document.querySelector('#editID').value ,

    document.querySelector('#editUsername').value,
    document.querySelector('#editEmail').value,
    document.querySelector('#editphone').value,
  ];
    if([username,email].includes('')){
        alert('Please fill both boxes');

    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
   
    }
    else
    {
    alert("You have entered an invalid email address!");
    

    }

   var phoneformat = /(?:\+977[- ])?\d{2}-?\d{7,8}/
   if(phone.match(phoneformat)){


   }
   else
   {
   alert("You have entered an invalid phone");
   

   }

    


  const arrIndex = tasklist.findIndex(v=>v.id==id);

  tasklist[arrIndex].username = username;
  tasklist[arrIndex].email = email;
  tasklist[arrIndex].phone = phone;


  displayTask();


}


let tasklist = [
    {
        id: 11231,
        username: 'Nischal Maharjan',
        email: 'neeschal@gmail.com',
        phone: '9868136666'
    }
];

const displayTask = () => {
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val, index) => {
        document.querySelector('#tasklist').innerHTML += `
        <div class = "task-card">
        <input type="text" value="${val.username}" readonly/><br>
        <input type="text" value="${val.email}" readonly/><br>
        <input type="text" value="${val.phone}" readonly/>
        <div class = "button-area">
        <button class="btn btn-secondary mt-3"  onClick="getEditData(${index})">Edit Task</button>
        <button class="btn btn-info mt-3"
        onClick="deleteTask(${val.id})">Clear Task</button>
        </div>
        </div>
        `;
    });
}

displayTask();


//get Values
const getValues=()=>{

    username= document.querySelector('#addUsername').value,
    email=document.querySelector('#addEmail').value,
    phone =document.querySelector('#addPhone').value

}

//clear  textfield datas
const removeValues=()=>{
    document.querySelector('#addUsername').value = '';
    document.querySelector('#editID').value = '';
    document.querySelector('#addEmail').value = '';
    document.querySelector('#addPhone').value = '';
    }



const addToArray = () => {
    const [username, email, phone] = [
        document.querySelector('#addUsername').value,
        document.querySelector('#addEmail').value,
        document.querySelector('#addPhone').value,

    ];
    const id = tasklist[tasklist.length - 1].id + 1;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformat = /(?:\+977[- ])?\d{2}-?\d{7,8}/

    //Calling validation from a function
    let confirm =validation(id, username, email, phone, mailformat, phoneformat);

    //validate and push
    if(confirm == true){
     tasklist.push({
        id, username, email, phone
    });

    removeValues();
     displayTask();
    }
}
//Created the validation function
const validation = (id, username, email, phone, mailformat, phoneformat) => {

    if ([username, email].includes('')) {
        alert('Please fill both boxes');
        return false;
    }
    else if (!email.match(mailformat)) {
        alert('Invalid Email');
        return false;
    }
    else if (!phone.match(phoneformat)) {
        alert('Invalid Phone');
        return false;
    }
    return true;
  
}

const deleteTask = id => {
    console.log(id);
    tasklist = tasklist.filter(val => val.id !== id);
    console.log(tasklist);
    displayTask();
}

const getEditData = (i) => {
    document.querySelector('#editID').value = tasklist[i].id;
    document.querySelector('#addUsername').value = tasklist[i].username;
    document.querySelector('#addEmail').value = tasklist[i].email;
    document.querySelector('#addPhone').value = tasklist[i].phone;
}

const saveEditData = () => {

    getValues();
    id =   document.querySelector('#editID').value;


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformat = /(?:\+977[- ])?\d{2}-?\d{7,8}/

    let confirm = validation(id, username, email, phone, mailformat, phoneformat);
    
    if(confirm ==true){
    const arrIndex = tasklist.findIndex(v => v.id == id);
    tasklist[arrIndex].username = username;
    tasklist[arrIndex].email = email;
    tasklist[arrIndex].phone = phone;
    removeValues();

    }

    displayTask();

    

}

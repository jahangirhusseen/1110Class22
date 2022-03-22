import Alert from "../../src/Alert.js";
import Storage from "../../src/Storage.js";

// get elements
let addStaff = document.getElementById('addStaff');
let staff_Datalist = document.getElementById('staff_Datalist');


// staff form submit for data and add 
addStaff.onsubmit = ('submit', (e) => {
    e.preventDefault()

    let msg = document.querySelector('.msg');


    let formData = new FormData(e.target) 
    let data = Object.fromEntries(formData.entries());

    let {name,cell,location,photo} = data;

    if (name == '' || cell == '' || location == '') {
        msg.innerHTML = Alert.danger(`All Fields Are Required`);
        
    }
    else{
        Storage.set('staffs',data)
        addStaff.reset();
        getAllstaff();

    }   
});
getAllstaff();
function getAllstaff(){
   let data = Storage.get('staffs');
   
   let list = '';

   data.map((data, index) => {

    let {name,cell,location,photo} = data;
       list += `
       <tr>
       <td>${index + 1}</td>
       <td>${ name }</td>
       <td>${ cell }</td>
       <td>${ location }</td>
       <td><img src="${ photo ? photo : './assets/img/avatar.png' }" class="img-fluid imgstyle" ></td>
       <td>
           <button class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
           <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
           <button class="btn btn-sm btn-danger" onclick="stafDelete(${index})"><i class="fas fa-trash"></i></button>
       </td>
       
   </tr>
       
       `
   });

   staff_Datalist.innerHTML = list;
};


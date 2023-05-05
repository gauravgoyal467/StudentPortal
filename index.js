(async function loadDefaultData(){
//const url=`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
const url = "./data.json";
const response=await fetch(url);
const data=await response.json();
//console.log(data);
renderResultOnDom(data);
})();

async function loadDefaultData(){
    let url = `https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
    let response = await fetch(url);
    let students = await response.json();
    return students;
}


/*       
                <tbody>
                    <tr>
                        <td>1</td>
                        <td class="mix">
                            <div class="image">
                                <img  src="../assignment/3rd Assignment/nature2.jpg" alt="">
                            </div>
                            <span>Gaurav</span>
                        </td>
                        <td>Male</td>
                        <td>AccioJob</td>
                        <td>90</td>
                        <td>Pass</td>
                        <td>xyz@gmail.com</td>
                    </tr>
                </tbody>
*/
const  tbody = document.getElementById("tbody");
const  tbody1 = document.getElementById("tbody1");
const table2=document.getElementById("table2");

function renderResultOnDom(students){
    tbody.innerHTML="";
    students.forEach((item)=>{
        let tr = document.createElement("tr");
        let fullName = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
//first data 
        let td1= document.createElement("td");
        td1.innerText=item.id;
        tr.appendChild(td1);
//second data
        let td2= document.createElement("td");
        td2.className="mix";
        let div=document.createElement("div");
        div.className="image";
        let img=document.createElement("img");
        img.src=item.img_src;
        div.appendChild(img);
        let span=document.createElement("span");
        span.innerText=fullName;
        td2.appendChild(div);
        td2.appendChild(span);
        tr.appendChild(td2);
//third data
        let td3= document.createElement("td");
        td3.innerText=item.gender;
        tr.appendChild(td3);

//fourth data
        let td4= document.createElement("td");
        td4.innerText=item.class;
        tr.appendChild(td4);
//fifth data
        let td5= document.createElement("td");
        td5.innerText=item.marks;
        tr.appendChild(td5);
//sixth data
        let td6= document.createElement("td");
        td6.innerText=passing;
        tr.appendChild(td6);
//seventh data
        let td7= document.createElement("td");
        td7.innerText=item.email;
        tr.appendChild(td7);

        tbody.appendChild(tr);
    })
}

const searchInput = document.getElementById("search");

async function filterData(){
    table2.style.display="none";
    let student= await loadDefaultData();
    const filterData = student.filter((student) => {
        const searchBoxValue = searchInput.value.toLowerCase();
        const fullName = `${student.first_name}${student.last_name}`.toLowerCase();
        const fName = `${student.first_name}`.toLowerCase();
        const lName = `${student.last_name}`.toLowerCase();
        const Email = `${student.email}`.toLowerCase();
        return fullName.includes(searchBoxValue) || Email.includes(searchBoxValue)|| fName.includes(searchBoxValue)||lName.includes(searchBoxValue);
    });
    renderResultOnDom(filterData);
}

async function sortAToZ(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a,b) {
        if (a.fullName < b.fullName) {
          return -1;
        } else if (a.fullName > b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(students);
      renderResultOnDom(students);
}

async function sortZToA(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a, b) {
        if (a.fullName > b.fullName) {
          return -1;
        } else if (a.fullName < b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
    
      renderResultOnDom(students);
}

async function sortByMarks(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.marks - b.marks;
    })
    renderResultOnDom(students);
}

async function sortByClass(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.class - b.class;
    })
    renderResultOnDom(students);
}

async function sortByPassing(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let resultOfstudents = students.filter((item)=>{
        if(item.passing) return true;
    });
    renderResultOnDom(resultOfstudents);
}



async function sortByGender(){
    table2.style.display="none";
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let female = students.filter((item)=>{
        if(item.gender === "Female") return true;
    })
    renderResultOnDom(female);
    
    let male = students.filter((item)=>{
        if(item.gender === "Male") return true;
    })
    renderResultOnDomMale(male);
}



function renderResultOnDomMale(male){
    console.log(male);
   table2.style.display="table";
    tbody1.innerHTML="";
    male.forEach((item)=>{
        let tr1 = document.createElement("tr");
        let fullName = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
//first data 
        let td1= document.createElement("td");
        td1.innerText=item.id;
        tr1.appendChild(td1);
//second data
        let td2= document.createElement("td");
        td2.className="mix";
        let div=document.createElement("div");
        div.className="image";
        let img=document.createElement("img");
        img.src=item.img_src;
        div.appendChild(img);
        let span=document.createElement("span");
        span.innerText=fullName;
        td2.appendChild(div);
        td2.appendChild(span);
        tr1.appendChild(td2);
//third data
        let td3= document.createElement("td");
        td3.innerText="male";
        tr1.appendChild(td3);

//fourth data
        let td4= document.createElement("td");
        td4.innerText=item.class;
        tr1.appendChild(td4);
//fifth data
        let td5= document.createElement("td");
        td5.innerText=item.marks;
        tr1.appendChild(td5);
//sixth data
        let td6= document.createElement("td");
        td6.innerText=passing;
        tr1.appendChild(td6);
//seventh data
        let td7= document.createElement("td");
        td7.innerText=item.email;
        tr1.appendChild(td7);

        tbody1.appendChild(tr1);
    })
}


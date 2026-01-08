function formSub(){
    event.preventDefault();
    let formData=readForm();
    insertData(formData);
}

function readForm(){
    let formData = {};
    formData["me"]=document.getElementById("me").value;
    formData["em"]=document.getElementById("em").value;
    return formData;
}

function insertData(data){
    let table=document.getElementById("stock").getElementsByTagName("tbody")[0];
    let row=table.insertRow(table.length);
    let cell1=row.insertCell(0);
    cell1.innerHTML=data.me;
    let cell2=row.insertCell(1);
    cell2.innerHTML=data.em;
     clearForm()
}

function clearForm(){
        document.getElementById("me").value="";
        document.getElementById("em").value="";
}

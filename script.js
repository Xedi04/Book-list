let input1=document.querySelector("#input1");
let input2=document.querySelector("#input2");
let input3=document.querySelector("#input3");
let Btn=document.querySelector("#btn");
let tbody=document.querySelector("#tbody");
let m=document.querySelector("#m");

Btn.addEventListener("click", ()=>{
    if(input1.value.trim() ==="" || input2.value.trim() ==="" || input3.value.trim() ===""){
        m.innerHTML="Zehmet olmasa bosluqu doldurun";
    }else{
       
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td")
    let deletebtn=document.createElement("button");
    let Radio=document.querySelector('input[name="r"]:checked');

    tr.style.backgroundColor=input3.value;


deletebtn.innerText="Delete";

deletebtn.style.cssText="backgroundColor:olive; font-size:20px"

deletebtn.addEventListener("click", ()=>{
    tr.remove();
})


td1.innerText=input1.value;
td2.innerText=input2.value;
td3.innerText=Radio.value;

    tbody.append(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    td4.append(deletebtn,);
    }
})
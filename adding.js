import{selected}from './selecting.js'
export var add = () => {
    var ul = document.getElementById("dynamic");
    ul.style.height='500px';
    ul.style.overflow='scroll';
    var data = document.getElementById("get").value;
    if (data == "") {
        alert("please add something!");
        return false;
    }
    var li = document.createElement("li");
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', data.toLowerCase());
    li.appendChild(document.createTextNode(data));
    var select = document.createElement("select");
    select.setAttribute('id', data.toLowerCase()+'_select');
    select.style.cssFloat='right';
    var s=data.toLowerCase()+'_select';
    var arr = ["--select--", "Start", "Done"];
    for (let i = 0; i < 3; i++) {
        var option = document.createElement("option");
        option.appendChild(document.createTextNode(arr[i]));
        option.setAttribute("value",i);
        // option.setAttribute("id", arr[i]);
        select.appendChild(option);
    }
    li.appendChild(select);
    var span = document.createElement("span");
    span.setAttribute('id', s+'_span');
    span.appendChild(document.createTextNode("Not Started..."));
    span.style.cssFloat='right';
    span.style.color='red';
    span.innerText="not started.."
    li.appendChild(span);
    ul.appendChild(li);
    //span.style.color = "red";
    span.style.marginRight = "350px";
    document.getElementById("get").value = "";
    alert(`${data} added successfully!`);
    document.getElementById(s).addEventListener('change',()=>{selected(s)});     
    
}



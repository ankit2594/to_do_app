//import{selected} from './selecting.js'
import{add} from './adding.js'
import{remove} from './removing.js'

function load() {
 var markup=  `<div style="width:60%; margin:auto;margin-top:50px">
        <h1 style="text-align:center; background-color:#afacac;padding-bottom:3px">My Assistant</h1>
        <div style="height:130px; background-color:brown;margin-top:-6px">
            <div style="width:80%; margin:auto">
             <div style="width:60%; float:left; margin-top:60px"><input id="get" type="text" class="form-control input-lg" placeholder="title.."></div> 
             <button id='adds' style="margin-top:60px" class="btn btn-primary">Add</button>   
             <button id="rmv" style="margin:60px 0px 0px -3px" class="btn btn-primary">Delete</button>    
            </div> 
        </div>
  <ul class="list-group" id="dynamic">
  </ul>
    </div>`
 document.body.innerHTML=markup;
 document.getElementById('adds').addEventListener('click',add);
 document.getElementById('rmv').addEventListener('click',remove);
 
}

window.onload=load;




/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adding_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__removing_js__ = __webpack_require__(3);
//import{selected} from './selecting.js'



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
 document.getElementById('adds').addEventListener('click',__WEBPACK_IMPORTED_MODULE_0__adding_js__["a" /* add */]);
 document.getElementById('rmv').addEventListener('click',__WEBPACK_IMPORTED_MODULE_1__removing_js__["a" /* remove */]);
 
}

window.onload=load;





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selecting_js__ = __webpack_require__(2);

var add = () => {
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
    document.getElementById(s).addEventListener('change',()=>{Object(__WEBPACK_IMPORTED_MODULE_0__selecting_js__["a" /* selected */])(s)});     
    
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selected; });
var selected=(a)=>
{
    console.log("hrdfr");
  var x=document.getElementById(a).value;
  if(x=='0')
  {
      document.getElementById(a+'_span').style.color='red';
      document.getElementById(a+'_span').innerText='not started..';
  }
  else if(x=='1')
  {
      document.getElementById(a+'_span').style.color='blue';
      document.getElementById(a+'_span').innerText='in progress..';
  }
  else if(x=='2')
  {
      document.getElementById(a+'_span').style.color='green';
      document.getElementById(a+'_span').innerText='completed..';
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return remove; });
var remove = () => {
    var data = document.getElementById("get").value;
    var ul = document.getElementById("dynamic");
    var item = document.getElementById(data.toLowerCase());
    if (item == undefined) {
        alert("Entered value must match with the list items!");
        document.getElementById("get").value = "";
        return false;
    }
    ul.removeChild(item);
    document.getElementById("get").value = "";
    alert(`${data} has been removed successfully!`);
}


/***/ })
/******/ ]);
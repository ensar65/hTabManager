(()=>{"use strict";!function(){let e=document.getElementById("connectSocket");e.addEventListener("click",(function(){chrome.runtime.sendMessage({type:"CONNECT_SOCKET"},(e=>{}))})),chrome.runtime.sendMessage({type:"GET_STATUS"},(e=>{e&&(document.getElementById("status").innerHTML=e)})),chrome.runtime.sendMessage({type:"CONNECT_CHECK"},(t=>{t&&"CONNECT_SOCKET_ERROR"!==t&&(e.innerHTML="Connection ID: <p style='color:white'>"+t+"</p>",e.disabled=!0)}))}()})();
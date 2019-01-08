(function () {
  function ajax(type, url, success, failed) {
    var xhr = null, arg = arguments[0];
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    arg['type'] = arg['type'].toUpperCase();
    xhr.open(arg['type'],arg['url']);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          arg['success'](xhr.responseText);
        } else {
          if (arg['failed']) {
            arg['failed'](xhr.status);
          }
        }
      }
    }
    xhr.send();
  }
  var JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
   if (JsSrc.indexOf('zh')>=0) {
     ajax({
       type: 'get',
       url: './README-zh_CN.md',
       success: function(data){
         document.getElementById('app').innerHTML = marked(data);
       }
     })
   }
   else if (JsSrc.indexOf('en')>=0) {
     ajax({
       type: 'get',
       url: './README.md',
       success: function(data){
         document.getElementById('app').innerHTML = marked(data);
       }
     })
   }
   else {
     ajax({
       type: 'get',
       url: './README.md',
       success: function(data){
         document.getElementById('app').innerHTML = marked(data);
       }
     })
   }
})()

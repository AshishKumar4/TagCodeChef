
var current_url = document.URL;
alert(current_url);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () 
{
  if (xmlhttp.readyState == 4);// && xmlhttp.status == 200) // Fix your backend bug so that you get code 200 instead of error 500
  {
    //vars ans = json.parse(xmlhttp.responseText);
    //alert(ans);
    alert("Hello World, It Works!");  --> This is working, uncomment to test
  }
}
xmlhttp.open('POST', 'http://127.0.0.1:5000/makecalc', true);
xmlhttp.send(JSON.stringify({name:current_url}));   // This is actually being recieved at the backend, Fix your error to get it working!



/********************************************************************************************************************************** */
/********************************************************************************************************************************** */
/********************************************************************************************************************************** */



/*
chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab)
{
  alert("This works!");
  if (changeInfo.status == "complete")
  {
    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
      function (tabs)
      {
        alert("Hellp");
        alert(tabs[0].url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function ()
        {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
          {
            //vars ans = json.parse(xmlhttp.responseText);
            //alert(ans);
            alert("Hello World");
          }
        }
        xmlhttp.open('POST', '/makecalc', true);
        xmlhttp.send();

      }
    )
  }
}
)

*/


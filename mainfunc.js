//jQueryBasic       //
//By DeveloperWaseem//
//////////////////////
//This function sends an ajax request to url provided, It will not do anything else with the data but send the request
//as it's named ajaxn for nothing to return.
function ajaxn(url){
   $.ajax(url);
}
//This function sends an ajax request and loads it in to the element provided. It is named ajaxl for ajax load.
function ajaxl(element, url){
  $("#"+element).load(url);
}
//This function will get the value of an element.
function val(element){
  return $("#"+element).val();
}

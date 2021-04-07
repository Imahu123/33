var animated=false;$(function(){messageOnSave=function($button){if(animated==true){return false;}
if($button.data('hasextras')=='1'){return;}
var id=$button.data('itemid');var $element=$('.addToBag[data-itemid='+id+']');if($element.length<=0){$element=$('.addToBag');}
animated=true;$element.addClass('added');setTimeout(function(){animated=false;$element.removeClass('added');},1500);}});
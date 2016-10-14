function checkStatus(){
	$.ajax({
		url : "http://www.google.com/" , 
		type : "GET" , 
		success : function(result){
			//console.log("online");
			chrome.browserAction.setIcon({path : "/images/online.png"});
			chrome.browserAction.setTitle({title : "Status: Online"});
		} , 
		error : function(){
			//console.log("offline");
			chrome.browserAction.setIcon({path : "/images/offline.png"});
			chrome.browserAction.setTitle({title : "Status: Offline"});
		}
	});
	setTimeout(checkStatus , 5000);
}

checkStatus();

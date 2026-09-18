if (typeof startDate === "undefined" || startDate === null || startDate === "") { return; }  

var formattedText = momentv2x29x4(startDate).fromNow();; 
return formattedText;
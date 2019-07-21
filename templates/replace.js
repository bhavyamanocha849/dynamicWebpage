module.exports=function(template,json){
  // const fs = require("fs");
  // let json = fs.readFileSync("../dev-data/data.json");
  // json=JSON.parse(json);
  //  product 0
  // var productAt0=json[0];
  // console.log(typeof json);
  let htmlTemplate = template;
  let output=htmlTemplate.replace(/{%PRODUCTNAME%}/g,json["productName"]);
   output=output.replace(/{%IMAGE%}/g,json["image"]);
   output=output.replace(/{%QUANTITY%}/g,json["quantity"]);
   output=output.replace(/{%PRICE%}/g,json["price"]);
   output=output.replace(/{%DESCRIPTION%}/g,json["description"]);
   output=output.replace(/{%FROM%}/g,json["from"]);
   output=output.replace(/{%NUTRIENTS%}/g,json["nutrients"]);
   output=output.replace(/{%ID%}/g,json["id"]);
   if(json["organic"]===false){
  output=output.replace(/{%NOT_ORGANIC%}/g,"not-organic");
   }
   
   return output;
}

 
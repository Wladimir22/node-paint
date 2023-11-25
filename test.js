const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
var Datas = []
Datas[0] = "Нотариус";
Datas[1] = "f";
//"КОМАРОВ";
 Datas[2] = "i" + " " + "o";
 //"ВАДИМ ВАСЛЬЕВИЧ";
Datas[3] = "г. Барнаул, пр-кт Ленина, 151В";
Datas[4] = "+7 (3852) 57-08-77";
Datas[5] = "+929-397-0877";
Datas[6] = "NotariaL@mail.ru";
//= document.getElementsByClassName('printTest');
var ImgS = new Array('','','','','','','','')
var siteUer = "d"
if (true){
  siteUer = "сайт-нотариуса.рф"
}else {
  siteUer = "notariat.ru"
}
var visSrtcture = '<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;"> ' + '<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">'+ ImgS[0].innerHTML + '</div></div></div>' + '<div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">' + Datas[0] + '</h2><h1 class="mt-3">' + Datas[1] + '</h1>' + '<h1 class="mt-3">' + Datas[2] + '</h1><h2 class="mt-4">' + Datas[3] + '</h2></div></div><div>'+ImgS[1].innerHTML+'</div><div class="row" style="height: 118px;	width: 1067px;">' + '<div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">'+ImgS[2].innerHTML + '<h3 class=" ml-3 mt-1">' + Datas[4] + '</h3></div><div class="row ml-5">'+ ImgS[3].innerHTML + '<h3 class="ml-3">' + Datas[5] + '</h3>'+ImgS[4].innerHTML+'</div></div>' + '<div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">'+ ImgS[5].innerHTML + '<h3 class=" ml-3">' + Datas[6] + '</h3></div><div class="row ml-2">'+ ImgS[6].innerHTML + '<h3 class="ml-3">' + siteUer + '</h3></div></div></div></div>';

doc.text(visSrtcture);
doc.end();
// node test.js
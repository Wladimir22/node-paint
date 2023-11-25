const express = require("express");

const PDFDocument = require('pdfkit');
const fs = require('fs');
const jsdom = require('jsdom').JSDOM;
//node app.js

const pdf = require('html-pdf');

const app = express();
const ascc = require('./index');



app.use(express.static('main'));

//app.use(express.static('main'))
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/main/print.html");
});

app.post("/", urlencodedParser, async (req, res) => {
  if(!req.body) return response.sendStatus(400);
  const user = await  applisten(req.body.lname.toString(), req.body.fname.toString(),req.body.mname.toString(),req.body.choice.toString());
  //res.send(user);
  var ds = `<link rel="stylesheet" href="theme.css" type="text/css"></link>`
  pdf.create(ds+user).toFile('utput.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log('PDF generated successfully:', res);
  });
  res.send('user');
})
/*
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
   // console.log(request.body);
    response.send('запрос обрабатывается');
    applisten(request.body.lname.toString(), request.body.fname.toString(),request.body.mname.toString(),request.body.choice.toString());

  });*/
  
app.listen(3000, ()=>console.log("http://localhost:3000"));

function printthis(f, i, o, svar, t)
{
   // const doc = new PDFDocument();
    //  doc.pipe(fs.createWriteStream('output.pdf'));
     var Datas = []
      Datas[0] = "Нотариус";
      Datas[1] = f;
      //"КОМАРОВ";
       Datas[2] = i + " " + o;
       //"ВАДИМ ВАСЛЬЕВИЧ";
      Datas[3] = t[0].toString().trim();//"г. Барнаул, пр-кт Ленина, 151В";
      Datas[4] = t[1].toString().trim();//"+7 (3852) 57-08-77";
      Datas[5] = t[2].toString().trim();
      // "+929-397-0877";
      Datas[6] = t[3].toString().trim();
      //"NotariaL@mail.ru";

      var ImgS = Array(` `,` `,` `,` `,` `,` `,` `,` `)
      var siteUer = "none"
      if (svar == "s1"){
        Datas[7] = "сайт-нотариуса.рф"
      }else{
        Datas[7] = "notariat.ru"
      }
    
      var visSrtcture = `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>`;
      //document.body.innerHTML 
      var page = `<!DOCTYPE html><html><head><style> @media print {@page { size: 2480px 3508px;}}</style></head><body><table ALIGN=center><tbody><tr><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
       + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
        + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th></tr><tr><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
         + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
          +`<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th></tr><tr><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
           + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
            + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th></tr><tr><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
             + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
             + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th></tr><tr><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
              + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th><th ALIGN=center class = "border border-dark" style="height:620px;	width:877px;">`
               + `<div class="container-fluid" style="height: 594px;	width: 1067px;"><div class="row" style="height: 467px;	width: 1067px;">` + `<div style="height: 467px;	width: 354px;"><div class="mr-4 mt-3 ml-4"><div class="ml-3">`+ ImgS[0] + `</div></div></div><div class="mt-5 pl-4" style="height: 395px;	width:679 px;" ><h2 class="mt-2">` + Datas[0] + `</h2><h1 class="mt-3">` + Datas[1] + `</h1><h1 class="mt-3">` + Datas[2] + `</h1><h2 class="mt-4">` + Datas[3] + `</h2></div></div><div>`+ImgS[1]+`</div><div class="row" style="height: 118px;	width: 1067px;"><div style="height: 118px;	width: 593px;"><div class="row ml-5 mt-1">`+ImgS[2] + `<h3 class=" ml-3 mt-1">` + Datas[4] + `</h3></div><div class="row ml-5">`+ ImgS[3] + `<h3 class="ml-3">` + Datas[5] + `</h3>`+ImgS[4]+`</div></div><div style="height: 118px;	width: 450px;"><div class="row ml-2 mt-1">`+ ImgS[5] + `<h3 class=" ml-3">` + Datas[6] + `</h3></div><div class="row ml-2">`+ ImgS[6] + `<h3 class="ml-3">` + Datas[7] + `</h3></div></div></div></div>` + `</th></tr><tbody><table></body></html>`;
      var html =`<!DOCTYPE html><html><head><title>Blank</title></head><body><p>Hello World</p></body></html>`;
     //      var dom = new jsdom(html)

/*
     response.send(dom.serialize());
*/
    //console.log(Datas);
    //doc.text(dom.innerHTML);
   // doc.end();
    return page//dom.window.document
}


async function applisten(lname, fn, mn, sv){
    try {
        var t =[]
        await ascc.ajaj(lname).then((response) => {
			//response.forEach((element) => t[i] = element); //console.log(`${element.toString().trim()}`)
            t = response
		  });
      return printthis(lname, fn, mn, sv, t ); //
        
/*
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                throw err; 
            }       
            http.createServer(function(request, response) {  
                response.writeHeader(200, {"Content-Type": "text/html"});  
                response.write(html);  
                response.end();  
            }).listen(8000);
        });*/

        //Visicode(',','g','ff','gh');
      } catch (e) {
        return console.log(e);
      }
    //var accessToken =  //lname
    //console.log(accessToken);
/*
    ascc.ajaj().then((response) => {
      response.forEach((element) => console.log(`--${element.toString().trim()}--`));
    //console.log(`get data: ${response}`);
    });*/

/*
    try {
        var accessToken = await acsess();
      } catch (e) {
        return console.log(e);
      }
*//*
      accessToken().then((response) => {
        response.forEach((element) => console.log(`--${element.toString().trim()}--`));
        //console.log(`get data: ${response}`);
      });*/
      /*
    index.my(lname).then((response) => {
        console.log(`get data: ${response}`);
      });*///node app.js
}

/*`+`.container-fluid {  width: 100%;  padding-right: 15px;  padding-left: 15px;  margin-right: auto;  margin-left: auto; }`+
      `.row {  display: flex;  flex-wrap: wrap;  margin-right: -15px;  margin-left: -15px; }`+
      
      `.ml-1{  margin-left: 0.375rem !important; }`+
      `.ml-2{  margin-left: 0.75rem !important; }`+
      `.ml-3{  margin-left: 1.5rem !important; }`+
      `.ml-4{  margin-left: 2.25rem !important; }`+
      `.ml-5{  margin-left: 4.5rem !important; }`+
      
      `.mt-1{  margin-top: 0.375rem !important; }`+
      `.mt-2{  margin-top: 0.75rem !important; }`+
      `.mt-3{  margin-top: 1.5rem !important; }`+
      `.mt-4{  margin-top: 2.25rem !important; }`+
      `.mr-4{  margin-right: 2.25rem !important; }`+
      
      `.border {  border: 1px solid #dee2e6 !important; }`+
      `.border-dark {  border-color: #000 !important; }`+
      
      `h1, h2, h3, h4, h5, h6 {  margin-top: 0;  margin-bottom: 0.75rem; }`+
      `.h1, .h2, .h3, .h4, .h5, .h6 {  margin-bottom: 0.75rem;  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`+
        `font-weight: 200;  line-height: 1.2; }`+
      `h1, .h1 {  font-size: 2.5rem; }  h2, .h2 {  font-size: 2rem; }h3, .h3 {  font-size: 1.75rem; }`+
      `h4, .h4 {  font-size: 1.5rem; }h5, .h5 {  font-size: 1.25rem; }`+
      `h6, .h6 {  font-size: 1rem; }`+ */
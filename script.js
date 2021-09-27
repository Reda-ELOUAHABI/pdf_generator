
// Data Fetching
// api url
const api_url =
    "https://pdf-api-generator.herokuapp.com/api/tutorials/";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    //  console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
            
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Items  checked </th>
         </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        // console.log(`r.id :  ${r.id}`)
        tab += `<tr> 
           
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.prix}</td> 
       <td><input type="checkbox" /> </td>   
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}







// Pdf Genarating fct
// let area= document.getElementById('area').innerHTML("coucou");
function myFunction2() {

    // Row 1
    // MrMme 
    var MrMme = document.getElementById("MrMme");
    var MrMmeCell = document.getElementById("MrMmeCell");
    MrMmeCell.innerHTML = ' &nbsp;' + MrMme.value + '&nbsp;';

    // Mobile 
    var Mobile = document.getElementById("Mobile");
    var mobileCell = document.getElementById("mobileCell");
    mobileCell.innerHTML = '&nbsp; &nbsp;' + Mobile.value + '&nbsp;';

    // Area
    var AreaValue = document.getElementById("AreaValue");
    var area = document.getElementById("area");
    area.innerHTML = ' &nbsp;' + AreaValue.value + '&nbsp;';

    // Section 
    var Section = document.getElementById("Section");
    var SectionCell = document.getElementById("SectionCell");
    SectionCell.innerHTML = ' &nbsp;' + Section.value + '&nbsp;';


    // Rue 
    var Rue = document.getElementById("Rue");
    var RueCell = document.getElementById("RueCell");
    RueCell.innerHTML = ' &nbsp;' + Rue.value + '&nbsp;';


    // Jada 
    var Jada = document.getElementById("Jada");
    var JadaCell = document.getElementById("JadaCell");
    JadaCell.innerHTML = ' &nbsp;' + Jada.value + '&nbsp;';

    // Home 
    var Home = document.getElementById("Home");
    var HomeCell = document.getElementById("HomeCell");
    HomeCell.innerHTML = ' &nbsp;' + Home.value + '&nbsp;';

    // Dor 
    var Dor = document.getElementById("Dor");
    var DorCell = document.getElementById("DorCell");
    DorCell.innerHTML = ' &nbsp;' + Dor.value + '&nbsp;';

    // Appartement 
    var Appartement = document.getElementById("Appartement");
    var AppartementCell = document.getElementById("AppartementCell");
    AppartementCell.innerHTML = ' &nbsp;' + Appartement.value + '&nbsp;';


    // Row 2
    // Table Row 1
    var detailsIn1 = document.getElementById("detailsIn1");
    var details1 = document.getElementById("details1");
    details1.innerHTML = ' &nbsp;' + detailsIn1.value + '&nbsp;';

    var QTYIn1 = document.getElementById("QTYIn1");
    var qty1 = document.getElementById("qty1");
    qty1.innerHTML = ' &nbsp;' + QTYIn1.value + '&nbsp;';

    var UnitPriceKDIn1 = document.getElementById("UnitPriceKDIn1");
    var UPKD1 = document.getElementById("UPKD1");
    UPKD1.innerHTML = ' &nbsp;' + UnitPriceKDIn1.value + '&nbsp;';

    var UnitPriceFilsIn1 = document.getElementById("UnitPriceFilsIn1");
    var UPFils1 = document.getElementById("UPFils1");
    UPFils1.innerHTML = ' &nbsp;' + UnitPriceFilsIn1.value + '&nbsp;';

    var TotalAmountKDIn1 = document.getElementById("TotalAmountKDIn1");
    var TAKD1 = document.getElementById("TAKD1");
    TAKD1.innerHTML = ' &nbsp;' + TotalAmountKDIn1.value + '&nbsp;';

    var TotalAmountFilsIn1 = document.getElementById("TotalAmountFilsIn1");
    var TAFils1 = document.getElementById("TAFils1");
    TAFils1.innerHTML = ' &nbsp;' + TotalAmountFilsIn1.value + '&nbsp;';



    // Row 3
    // Table Row 2
    var detailsIn2 = document.getElementById("detailsIn2");
    var details2 = document.getElementById("details2");
    details2.innerHTML = ' &nbsp;' + detailsIn2.value + '&nbsp;';

    var QTYIn2 = document.getElementById("QTYIn2");
    var qty2 = document.getElementById("qty2");
    qty2.innerHTML = ' &nbsp;' + QTYIn2.value + '&nbsp;';

    var UnitPriceKDIn2 = document.getElementById("UnitPriceKDIn2");
    var UPKD2 = document.getElementById("UPKD2");
    UPKD2.innerHTML = ' &nbsp;' + UnitPriceKDIn2.value + '&nbsp;';

    var UnitPriceFilsIn2 = document.getElementById("UnitPriceFilsIn2");
    var UPFils2 = document.getElementById("UPFils2");
    UPFils2.innerHTML = ' &nbsp;' + UnitPriceFilsIn2.value + '&nbsp;';

    var TotalAmountKDIn2 = document.getElementById("TotalAmountKDIn2");
    var TAKD2 = document.getElementById("TAKD2");
    TAKD2.innerHTML = ' &nbsp;' + TotalAmountKDIn2.value + '&nbsp;';

    var TotalAmountFilsIn2 = document.getElementById("TotalAmountFilsIn2");
    var TAFils2 = document.getElementById("TAFils2");
    TAFils2.innerHTML = ' &nbsp;' + TotalAmountFilsIn2.value + '&nbsp;';


    // Table Row 3
    var detailsIn3 = document.getElementById("detailsIn3");
    var details3 = document.getElementById("details3");
    details3.innerHTML = ' &nbsp;' + detailsIn3.value + '&nbsp;';

    var QTYIn3 = document.getElementById("QTYIn3");
    var qty3 = document.getElementById("qty3");
    qty3.innerHTML = ' &nbsp;' + QTYIn3.value + '&nbsp;';

    var UnitPriceKDIn3 = document.getElementById("UnitPriceKDIn3");
    var UPKD3 = document.getElementById("UPKD3");
    UPKD3.innerHTML = ' &nbsp;' + UnitPriceKDIn3.value + '&nbsp;';

    var UnitPriceFilsIn3 = document.getElementById("UnitPriceFilsIn3");
    var UPFils3 = document.getElementById("UPFils3");
    UPFils3.innerHTML = ' &nbsp;' + UnitPriceFilsIn3.value + '&nbsp;';

    var TotalAmountKDIn3 = document.getElementById("TotalAmountKDIn3");
    var TAKD3 = document.getElementById("TAKD3");
    TAKD3.innerHTML = ' &nbsp;' + TotalAmountKDIn3.value + '&nbsp;';

    var TotalAmountFilsIn3 = document.getElementById("TotalAmountFilsIn3");
    var TAFils3 = document.getElementById("TAFils3");
    TAFils3.innerHTML = ' &nbsp;' + TotalAmountFilsIn3.value + '&nbsp;';

    // Table Row 4
    var detailsIn4 = document.getElementById("detailsIn4");
    var details4 = document.getElementById("details4");
    details4.innerHTML = ' &nbsp;' + detailsIn4.value + '&nbsp;';

    var QTYIn4 = document.getElementById("QTYIn4");
    var qty4 = document.getElementById("qty4");
    qty4.innerHTML = ' &nbsp;' + QTYIn4.value + '&nbsp;';

    var UnitPriceKDIn4 = document.getElementById("UnitPriceKDIn4");
    var UPKD4 = document.getElementById("UPKD4");
    UPKD4.innerHTML = ' &nbsp;' + UnitPriceKDIn4.value + '&nbsp;';

    var UnitPriceFilsIn4 = document.getElementById("UnitPriceFilsIn4");
    var UPFils4 = document.getElementById("UPFils4");
    UPFils4.innerHTML = ' &nbsp;' + UnitPriceFilsIn4.value + '&nbsp;';

    var TotalAmountKDIn4 = document.getElementById("TotalAmountKDIn4");
    var TAKD4 = document.getElementById("TAKD4");
    TAKD4.innerHTML = ' &nbsp;' + TotalAmountKDIn4.value + '&nbsp;';

    var TotalAmountFilsIn4 = document.getElementById("TotalAmountFilsIn4");
    var TAFils4 = document.getElementById("TAFils4");
    TAFils4.innerHTML = ' &nbsp;' + TotalAmountFilsIn4.value + '&nbsp;';

    // Table Row 5
    var detailsIn5 = document.getElementById("detailsIn5");
    var details5 = document.getElementById("details5");
    details5.innerHTML = ' &nbsp;' + detailsIn5.value + '&nbsp;';

    var QTYIn5 = document.getElementById("QTYIn5");
    var qty5 = document.getElementById("qty5");
    qty5.innerHTML = ' &nbsp;' + QTYIn5.value + '&nbsp;';

    var UnitPriceKDIn5 = document.getElementById("UnitPriceKDIn5");
    var UPKD5 = document.getElementById("UPKD5");
    UPKD5.innerHTML = ' &nbsp;' + UnitPriceKDIn5.value + '&nbsp;';

    var UnitPriceFilsIn5 = document.getElementById("UnitPriceFilsIn5");
    var UPFils5 = document.getElementById("UPFils5");
    UPFils5.innerHTML = ' &nbsp;' + UnitPriceFilsIn5.value + '&nbsp;';

    var TotalAmountKDIn5 = document.getElementById("TotalAmountKDIn5");
    var TAKD5 = document.getElementById("TAKD5");
    TAKD5.innerHTML = ' &nbsp;' + TotalAmountKDIn5.value + '&nbsp;';

    var TotalAmountFilsIn5 = document.getElementById("TotalAmountFilsIn5");
    var TAFils5 = document.getElementById("TAFils5");
    TAFils5.innerHTML = ' &nbsp;' + TotalAmountFilsIn5.value + '&nbsp;';

    // Table Row 6
    var detailsIn6 = document.getElementById("detailsIn6");
    var details6 = document.getElementById("details6");
    details6.innerHTML = ' &nbsp;' + detailsIn6.value + '&nbsp;';

    var QTYIn6 = document.getElementById("QTYIn6");
    var qty6 = document.getElementById("qty6");
    qty6.innerHTML = ' &nbsp;' + QTYIn6.value + '&nbsp;';

    var UnitPriceKDIn6 = document.getElementById("UnitPriceKDIn6");
    var UPKD6 = document.getElementById("UPKD6");
    UPKD6.innerHTML = ' &nbsp;' + UnitPriceKDIn6.value + '&nbsp;';

    var UnitPriceFilsIn6 = document.getElementById("UnitPriceFilsIn6");
    var UPFils6 = document.getElementById("UPFils6");
    UPFils6.innerHTML = ' &nbsp;' + UnitPriceFilsIn6.value + '&nbsp;';

    var TotalAmountKDIn6 = document.getElementById("TotalAmountKDIn6");
    var TAKD6 = document.getElementById("TAKD6");
    TAKD6.innerHTML = ' &nbsp;' + TotalAmountKDIn6.value + '&nbsp;';

    var TotalAmountFilsIn6 = document.getElementById("TotalAmountFilsIn6");
    var TAFils6 = document.getElementById("TAFils6");
    TAFils6.innerHTML = ' &nbsp;' + TotalAmountFilsIn6.value + '&nbsp;';

    // Table Row 7
    var detailsIn7 = document.getElementById("detailsIn7");
    var details7 = document.getElementById("details7");
    details7.innerHTML = ' &nbsp;' + detailsIn7.value + '&nbsp;';

    var QTYIn7 = document.getElementById("QTYIn7");
    var qty7 = document.getElementById("qty7");
    qty7.innerHTML = ' &nbsp;' + QTYIn7.value + '&nbsp;';

    var UnitPriceKDIn7 = document.getElementById("UnitPriceKDIn7");
    var UPKD7 = document.getElementById("UPKD7");
    UPKD7.innerHTML = ' &nbsp;' + UnitPriceKDIn7.value + '&nbsp;';

    var UnitPriceFilsIn7 = document.getElementById("UnitPriceFilsIn7");
    var UPFils7 = document.getElementById("UPFils7");
    UPFils7.innerHTML = ' &nbsp;' + UnitPriceFilsIn7.value + '&nbsp;';

    var TotalAmountKDIn7 = document.getElementById("TotalAmountKDIn7");
    var TAKD7 = document.getElementById("TAKD7");
    TAKD7.innerHTML = ' &nbsp;' + TotalAmountKDIn7.value + '&nbsp;';

    var TotalAmountFilsIn7 = document.getElementById("TotalAmountFilsIn7");
    var TAFils7 = document.getElementById("TAFils7");
    TAFils7.innerHTML = ' &nbsp;' + TotalAmountFilsIn7.value + '&nbsp;';


    // Row 3
    // Transport 
    var Transport = document.getElementById("Transport");
    var transportCell = document.getElementById("transportCell");
    transportCell.innerHTML = ' &nbsp;' + Transport.value + '&nbsp;';


    // Total 
    var Total = document.getElementById("Total");
    var TotalCell = document.getElementById("TotalCell");
    TotalCell.innerHTML = ' &nbsp;' + Total.value + '&nbsp;';


    // Mandoub 
    var Mandoub = document.getElementById("Mandoub");
    var MandoubCell = document.getElementById("MandoubCell");
    MandoubCell.innerHTML = '&nbsp; &nbsp;' + Mandoub.value + '&nbsp;';


    // Recepteur 
    var Recepteur = document.getElementById("Recepteur");
    var RecepteurCell = document.getElementById("RecepteurCell");
    RecepteurCell.innerHTML = '&nbsp; &nbsp;' + Recepteur.value + '&nbsp;';


/*

*/

    //Reference the Table.
    var grid = document.getElementById("employees");

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");
    var message = "Id        title      Price\n";

    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            console.log(detailsIn1);
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[0].innerHTML;
            message += row.cells[1].innerHTML;
            message += "   " + row.cells[2].innerHTML;
            //message += "   " + row.cells[3].innerHTML;
            message += "\n";
            window['detailsInn'+i] = + row.cells[1];
            
            var details11 = document.getElementById("details1");
            details11.innerHTML = '&nbsp;' + detailsInn1.value + '&nbsp;';
            console.log(detailsInn1);
            //changins ids of table to vars
            //innerhtml to table checked value
            
            /*
            eval("detailsIn"+ i +" = "+i);
            console.log("cc");
            console.log(detailsIn1);
            console.log(detailsIn2);
            console.log("cc");
            */

        }
    }

    //Display selected Row data in Alert Box.
    alert(message);


    var CurrentDate = document.getElementById("CurrentDate");
    var DateisChecked = document.getElementById("myCheckBox").checked;

    if (DateisChecked) {
        console.log("Input is checked");
        1
        2
        3
        4
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = '  &nbsp;' + date + ' &nbsp; &nbsp;' + time;
        CurrentDate.innerHTML = dateTime;
    } else {
        console.log("Input is NOT checked");
        CurrentDate.innerHTML = "................";
    }
    const input = document.getElementById('divIdToPrint');
    // const area= document.getElementById('area').innerHTML("coucou");
    var opt = {
        //   margin:       1,
        //   filename:     'myfile.pdf',
        //   image:        { type: 'jpeg', quality: 0.98 },
        //   html2canvas:  { scale: 2 },
        // html2canvas: { 
        //     //scale: 12, 
        //     width : pdf.internal.pageSize.getWidth(),
        //     height : (imgProps.height * pdfWidth) / imgProps.width,
        // },
        jsPDF: {
            //unit: 'in', format: 'letter', orientation: 'portrait'
            format: 'a5',
            unit: 'in',
        }
    };
    html2pdf().set(opt).from(input).save();

}


function GetSelected() {





}


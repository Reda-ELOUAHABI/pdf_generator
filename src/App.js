import jsPDF from 'jspdf';
import './App.css';



function App() {

  // const styles = {
  //   fontFamily: "sans-serif",
  //   textAlign: "center"
  // };
  // const colstyle = {
  //   width: "30%"
  // };
  // const tableStyle = {
  //   width: "100%"
  // };
  //   const Prints = () => (
  //     <div>
  //       <h3>Time & Materials Statement of Work (SOW)</h3>
  //       <h4>General Information</h4>
  //       <table id="tab_customers" class="table table-striped" style={tableStyle}>
  //         <colgroup>
  //           <col span="1" style={colstyle} />
  //           <col span="1" style={colstyle} />
  //         </colgroup>
  //         <thead>
  //           <tr class="warning">
  //             <th>SOW Creation Date</th>
  //             <th>SOW Start Date</th>
  //             <th>Project</th>
  //             <th>Last Updated</th>
  //             <th>SOW End Date</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>Dec 13, 2017</td>
  //             <td>Jan 1, 2018</td>
  //             <td>NM Connect - NMETNMCM</td>
  //             <td>Dec 13, 2017</td>
  //             <td>Dec 31, 2018</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <p>
  //         This is a Time and Materials Statement of Work between Northwestern Mutual
  //         Life Insurance Company and Infosys with all general terms and conditions
  //         as described in the current Master Agreement and its related documents
  //       </p>
  //     </div>
  //   );

  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
    // const string = renderToString(<Prints />);
    alert("jajajja");
    // init jspdf
    debugger;
    var doc = new jsPDF('p', 'px', 'a5');
    var image = new Image();
image.src = 'assets/facture.jpeg';
doc.addImage(image, 'JPEG', 300, 80, 50, 50);

    // var img = new Image;
    // img.onload = function () {
    //   doc.addImage(this, 10, 10);
    //   doc.save("tesat.pdf");
    // };
    // img.crossOrigin = "";  // for demo as we are at different origin than image
    // img.src = "assets/facture.jpeg";  // some random imgur image

    // doc.addImage("assets/facture.jpeg", "JPEG", 15, 40, 180, 180);


    // 


    // const columns = [
    //   "SOW Creation Date",
    //   "SOW Start Date",
    //   "Project",
    //   "Last Updated",
    //   "SOW End Date"
    // ];
    // var rows = [
    //   [
    //     "Dec 13, 2017",
    //     "Jan 1, 2018",
    //     "ABC Connect - ABCXYZ",
    //     "Dec 13, 2017",
    //     "Dec 31, 2018"
    //   ]
    // ];
    // doc.fromHTML(string);
    // add sometxt
    doc.text(20,20,"this is default txt");
    // set font 
    doc.setFont("courier");
    //set font type
    //doc.setFontType('bold');
    doc.save("generateda5.pdf");

  }



  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <button 
        onClick={reactPdfGenerate()} 
            >
          Generate Your Pdf
        </button> */}

        <a href="#" onClick={handleClick}>
          Clique ici
        </a>
      </header>
    </div>
  );
}

export default App;

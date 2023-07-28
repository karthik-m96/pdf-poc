import React from "react";
import "./pdfCreate.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfCreate = () => {
  const pdf = {
    content: [
      { text: "(FORM 3-A Revised)", style: "header" },
      {
        text: "THE EMPLOYEES' PROVIDENT FUNDS SCHEME, 1952 AND THE EMPLOYEES' PENSION SCHEME, 1995",
        style: "header",
      },
      { text: "(Paras 35 and 42) and [Para 19]", style: "header" },

      {
        style: "tableheader",
        table: {
          body: [
            [
              { text: "THE PERIOD FROM", style: "tableheader" },
              {
                text: "1st April 1995 to 31st March 1996",
                style: "tableheader",
              },
              { text: "PAGE: 1", style: "tableheader" },
            ],
          ],
        },
        layout: "noBorders",
      },
      {
        style: "tablesubheader",
        table: {
          body: [
            ["1.ACCOUNT NO.", ":", "TN/2839/"],
            ["2.NAME/SURNAME", ":", " "],
            ["3.Father's or Husband's Name", ":", " "],
            [
              "4.Name and Address of the Establishment",
              ":",
              "T.N.H.W.C.S.Ltd., (CO-OPTEX) Chennai-8.",
            ],
            ["5.Statutory Rate of PF Contribution", ":", "10%"],
            [
              "6.Voluntary higher rate of employees Contribution if any",
              ":",
              "Rs.",
            ],
          ],
        },
        layout: "noBorders",
      },
      {
        text: "Certified that the total amount of contribution (both shares) indicated in this CARD, i.e. Rs ........... has already been remitted in full A/c  No.1 and Pension A/c no.10 Rs ...........",
        style: "sentence",
      },
      {
        text: "Certified that the difference between the total of the contributions shown under columns 3 and 4(b) of the table and that arrived at on the total wages shown in column 2 at the prescribed rate is solely due to the rounded off the contribution to the nearest rupee under rules.",
        style: "sentence",
      },
    ],
    styles: {
      header: {
        fontSize: 11,
        bold: true,
        alignment: "center",
      },
      tableheader: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        margin: [30, 5, 5, 5],
      },
      tablesubheader: {
        fontSize: 11,
        bold: true,
      },
      sentence: {
        fontSize: 11,
        bold: true,
        margin: [0, 10, 0, 0],
      },
    },
  };

  const downloadPdf = () => {
    pdfMake.createPdf(pdf).download("epf data.pdf");
  };

  return (
    <div className="pdf-create">
      <h1>PDF</h1>
      <div className="pdfbutton">
        <button onClick={downloadPdf}>Download PDF</button>
      </div>
    </div>
  );
};

export default PdfCreate;

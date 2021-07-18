const fs = require("fs");
const { IncomingMessage } = require("http");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  //generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("logo.png", 50, 45, { width: 50 }) //reemplazar logo con la ruta de logo en public
    .fillColor("#444444")
    .fontSize(20)
    .text("DentaList", 110, 57)
    .fontSize(10)
    .text("DentaList", 200, 50, { align: "right" })
    .text("USFQ", 200, 65, { align: "right" })
    .text("Quito, Ecuador", 200, 80, { align: "right" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Factura", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("ID de factura:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoice_nr, 150, customerInformationTop)
    .font("Helvetica")
    .text("Fecha de emisión:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15) 
    .text("Pasaporte / CI:", 50, customerInformationTop + 30)
    .font("Helvetica")
    .text(invoice.shipping.ci, 150, customerInformationTop + 30)
    //Posible mejora: añadir balance pendiente y saldo

    //.text("Balance pendiente:", 50, customerInformationTop + 30) 
    // .text(
    //   formatCurrency(invoice.subtotal - invoice.paid),
    //   150,
    //   customerInformationTop + 30
    //)

    .font("Helvetica-Bold")
    .text(invoice.shipping.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.shipping.address, 300, customerInformationTop + 15)
    .text(
      invoice.shipping.email +
      ",    " +
      invoice.shipping.phone +
      "",
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 300;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Cantidad", //1
    "Item", //2
    "Precio Unitario", //3
    "Precio de venta" //4
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  var subtotal = 0; //precio de venta
  for (i = 0; i < invoice.items.length; i++) {

    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.quantity,
      item.item,
      formatCurrency(item.price),
      formatCurrency(item.quantity * item.price),
      subtotal = subtotal + (item.price * item.quantity)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Subtotal",
    formatCurrency(subtotal)
  );

  var disc = invoice.discount * subtotal;
  const DescuentoPosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    DescuentoPosition,
    "",
    "",
    "Descuento " + invoice.discount*100 + "%",
    formatCurrency(disc)
  );

  var total = subtotal - disc
  var iva = total * invoice.iva

  const ivaPosition = DescuentoPosition + 20;
  doc.font("Helvetica");
  generateTableRow(
    doc,
    ivaPosition,
    "",
    "",
    "IVA" + invoice.iva*100 + "%",
    formatCurrency(iva)
  );
  doc.font("Helvetica");

  total = total+iva;
  const TotalPosition = ivaPosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    TotalPosition,
    "",
    "",
    "Total",
    formatCurrency(total)
  );
  doc.font("Helvetica");
}

// function generateFooter(doc) {
//   doc
//     .fontSize(10)
//     .text(
//       "Payment is due within 15 days. Thank you for your business.",
//       50,
//       780,
//       { align: "center", width: 500 }
//     );
// }

function generateTableRow(
  doc,
  y,
  quantity,
  item,
  unitCost,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(quantity, 50, y)
    .text(item, 150, y, {width:50, align: "left" })
    .text(unitCost, 375, y)
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(dollar) {
  return "$" + (dollar / 1).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
}

module.exports = {
  createInvoice
};

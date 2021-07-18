const downloadRoute = require("express").Router();
const { createInvoice } = require("../createInvoice");
function newS() {
  console.log("hola");
}
downloadRoute.post("/", async (req, res, next) => {
  try {
    const { body: appointment } = req;
    const invoice = {
      shipping: {
        name: `${appointment.name} ${appointment.surname}`, //form.name , form.surname
        address: `${appointment.address}`, //form.address
        email: `${appointment.email}`, //form.email
        phone: `${appointment.cellphone}`, //form.phone
        ci: `${appointment.passportCI}`, //form.passportCI
      },
      items: [
        {
          item: `${appointment.item_1}`,
          quantity: `${appointment.quantity_1}`,
          price: `${appointment.price_1}`,
        },
        {
          item: `${appointment.item_2}`,
          quantity: `${appointment.quantity_2}`,
          price: `${appointment.price_3}`,
        },
        {
          item: `${appointment.item_3}`,
          quantity: `${appointment.quantity_3}`,
          price: `${appointment.price_3}`,
        },{
          item: `${appointment.item_4}`,
          quantity: `${appointment.quantity_4}`,
          price: `${appointment.price_4}`,
        },
      ],

      discount: `${appointment.discount * 0.01}`, //form.discount
      iva: 0.12, //form.iva
      //paid: 0, //corresponde a balance a favor

      invoice_nr: `${appointment._id}`, //Conectar a form.invoicenumber
    };
    var name = "./routes/docs/new1.pdf";
    createInvoice(invoice, name);
    res.status(200).send(appointment.name + " " + appointment.surname);
  } catch (err) {
    next(err);
  }
});

downloadRoute.get("/", async (req, res, next) => {
  try{
    setTimeout(() =>{
      res.sendFile(`${__dirname}/docs/new1.pdf`);
    }, 100)
  } catch(err){
    next(err);
  }
});

module.exports = downloadRoute;
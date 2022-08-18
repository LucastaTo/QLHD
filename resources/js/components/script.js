import Papers from './papers'
import Control from './control'
import Header from './partials/header'
import Footer from './partials/footer'
import PDFFile from './pdfFile'


export default {
    components: {
        Control,
        Papers,
        Header,
        Footer,
        PDFFile
      },
      data() {
        return {
          screenRef : {},
          invoices: {
            nameTitle: "Item",
            quantityTitle: "Quantity",
            unitCostTitle: "Rate",
            amountTitle: "Amount",
            items: [
                {
                    nameValue: "",
                    quantityValue: 1,
                    unitCostValue: 0,
                    amountValue: 0,
                },
            ],
            group: "1",
            title: "INVOICE",
            image: null,
            invoiceFrom: "",
            billTitle: "Bill To",
            billTo: "",
            shipTitle: "Ship To",
            shipTo: "",
            dateTitle: "Date",
            dateValue: "",
            paymentTermTitle: "Payment Terms",
            paymentTermValue: "",
            dueDateTitle: "Due Date",
            dueDateValue: "",
            poNumberTitle: "PO Number",
            poNumberValue: "",
            termsTitle: "Notes",
            termsValue: "",
            notesTitle: "Terms",
            notesValue: "",
            subTotal: "Subtotal",
            subTotalValue: 0,
            discount: "Discount",
            discountValue: 0,
            tax: "Tax",
            taxValue: 0,
            shipping: "Shipping",
            shippingValue: 0,
            total: "Total",
            totalValue: 0,
            amountPaid: "Amount Paid",
            amountPaidValue: 0,
            balanceDue: "Balance Due",
            balanceDueValue: 0,
            showByIndex: null,
            fields: {
                discounts: false,
                tax: true,
                shipping: false,
            },
        },
        }
      },
      
    watch: {
      // whenever question changes, this function will run
      invoices:{
          handler(newValue,) {
              this.invoices = newValue
        },
        deep: true
      }
    },
      mounted() {
        this.screenRef = document.querySelector('.card-papers-1')
    }
}
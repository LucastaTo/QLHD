export default {
    data() {
        return {
            termsTitle: "Notes",
            termsValue: "",
            notesTitle: "Terms",
            notesValue: "",
            subTotal: "Subtotal",
            subTotalValue: "0.00",
            discount: "Discount",
            discountValue: "",
            tax: "Tax",
            taxValue: "",
            shipping: "Shipping",
            shippingValue: "",
            total: "Total",
            totalValue: "0.00",
            amountPaid: "Amount Paid",
            amountPaidValue: "",
            balanceDue: "Balance Due",
            balanceDueValue: "0.00",
            showByIndex: null,
            fields: {
                discounts: false,
                tax: true,
                shipping: false,
            },
        }
    },
      methods: {
        showInput(string) {
            switch(string) {
                case 'discounts':
                     this.fields.discounts = true;
                     break;
                case 'tax':
                    this.fields.tax = true;
                     break;
                     case 'shipping':
                    this.fields.shipping = true;
                     break;
                     default:
                     break;
            }
          },
          hideInput(string) {
            switch(string) {
                case 'discounts':
                     this.fields.discounts = false;
                     break;
                case 'tax':
                    this.fields.tax = false;
                     break;
                     case 'shipping':
                    this.fields.shipping = false;
                     break;
                     default:
                     break;
            }
          },
        }
}
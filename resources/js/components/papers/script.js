import Footer from "./footer";
import Header from "./header";
import Items from "./item";

export default {
    components: {
        Footer,
        Items,
        Header,
    },
    data() {
        return {
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
        };
    },
};

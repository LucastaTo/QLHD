export default {
    props: {
        invoices: { type: Array, default: [] },
    },
    created() {
        this.$watch(
            "invoices.items",
            function (after, before) {
                let temp = [];
                before.filter(function (p, idx) {
                    temp[idx] = p["amountValue"];
                });
                this.invoices.subTotalValue = temp.reduce(
                    (sum, element) => sum + element,
                    0
                );
            },
            { deep: true }
        );

        this.$watch(
            "invoices.shippingValue",
            function (after, before) {
                this.invoices.totalValue += after;
            },
            { deep: true }
        );

        this.$watch(
            "invoices.taxValue",
            function (after) {
                if (this.invoices.fields.tax === "%")
                    this.invoices.totalValue =
                        this.invoices.totalValue +
                        (this.invoices.totalValue % after);
                else this.invoices.totalValue += after;
            },
            { deep: true }
        );

        this.$watch(
            "invoices.discountValue",
            function (after) {
                if (this.invoices.fields.discounts === "%")
                    this.invoices.totalValue =
                        this.invoices.totalValue -
                        (this.invoices.totalValue % after);
                else this.invoices.totalValue -= after;
            },
            { deep: true }
        );

        this.$watch(
            "invoices.amountPaidValue",
            function (after) {
                this.invoices.totalValue -= after;
            },
            { deep: true }
        );
    },
    methods: {
        showInput(string) {
            switch (string) {
                case "discounts":
                    this.invoices.fields.discounts = true;
                    break;
                case "tax":
                    this.invoices.fields.tax = true;
                    break;
                case "shipping":
                    this.invoices.fields.shipping = true;
                    break;
                default:
                    break;
            }
        },
        hideInput(string) {
            switch (string) {
                case "discounts":
                    this.invoices.fields.discounts = false;
                    break;
                case "tax":
                    this.invoices.fields.tax = false;
                    break;
                case "shipping":
                    this.invoices.fields.shipping = false;
                    break;
                default:
                    break;
            }
        },
        changeFieldOption(string) {
            switch (string) {
                case "discounts":
                    if (this.invoices.fields.discounts === "%")
                        this.invoices.fields.discounts = true;
                    else this.invoices.fields.discounts = "%";
                    break;
                case "tax":
                    if (this.invoices.fields.tax === "%")
                        this.invoices.fields.tax = true;
                    else this.invoices.fields.tax = "%";
                    break;
                default:
                    break;
            }
        },
    },
};

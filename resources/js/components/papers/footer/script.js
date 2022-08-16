export default {
    props: {
        invoices: { type: Array, default: [] },
    },
    created() {
        this.$watch(
            "invoices.items",
            function (after) {
                let temp = [];
                after.filter(function (p, idx) {
                    temp[idx] = p["amountValue"];
                });
                const tempTotal = temp.reduce(
                    (sum, element) => sum + element,
                    0
                );
                this.invoices.totalValue = tempTotal;
                this.invoices.balanceDueValue = tempTotal;
                this.invoices.subTotalValue = tempTotal
            },
            { deep: true }
        );

        this.$watch(
            "invoices.shippingValue",
            function (after, before) {
                let temp = this.invoices.totalValue
                if(after > before) temp = Number(temp) + Number(after) - Number(before);
                else temp = Number(temp) - Number(before) + Number(after)
                this.invoices.balanceDueValue = temp
                this.invoices.totalValue = temp;
            },
            { deep: true }
        );

        this.$watch(
            "invoices.taxValue",
            function (after,before) {
                let temp = this.invoices.totalValue;
                
                if (after > before) {
                    if (this.invoices.fields.tax === "%") {
                        temp = Number(temp) / (Number(after) - Number(before))
                        temp = Number(this.invoices.totalValue) + temp
                    }
                    else temp = Number(temp) + Number(after) - Number(before);
                } else {
                    if (this.invoices.fields.tax === "%") {
                        temp = Number(temp) / (Number(before) + Number(after))
                        temp = Number(this.invoices.totalValue) - temp
                    }
                    else temp = Number(temp) - Number(before) + Number(after);
                }
                   
                this.invoices.balanceDueValue = temp
                this.invoices.totalValue = temp 
            },
            { deep: true }
        );

        this.$watch(
            "invoices.discountValue",
            function (after ,before) {
                let temp = this.invoices.totalValue;
                if (after > before) {
                    if (this.invoices.fields.discounts === "%") {
                        temp = Number(temp) / (Number(after) + Number(before))
                        temp = Number(this.invoices.totalValue) - temp
                    }
                    else temp = Number(temp) - Number(after) + Number(before)  ;
                } else {
                    if (this.invoices.fields.discounts === "%") {
                        temp = Number(temp) / (Number(before) - Number(after))
                        temp = Number(this.invoices.totalValue) + temp
                    }
                    else temp = Number(temp) + Number(before) - Number(after);
                }
                    
                this.invoices.balanceDueValue = temp
                this.invoices.totalValue = temp
            },
            { deep: true }
        );

        this.$watch(
            "invoices.amountPaidValue",
            function (after, before) {
                let temp = this.invoices.balanceDueValue
                if (after) temp = Number(temp) - Number(after) + Number(before);
                else temp = Number(temp) + Number(before) - Number(after) ;
                this.invoices.balanceDueValue = temp
            },
            { deep: true }
        );

        this.$watch(
            "invoices.totalValue",
            function () {
                if (this.invoices.subTotalValue === 0){
                this.invoices.balanceDueValue = -Number(this.invoices.discountValue) + Number(this.invoices.taxValue) + Number(this.invoices.shippingValue)
                this.invoices.totalValue = -Number(this.invoices.discountValue) + Number(this.invoices.taxValue) + Number(this.invoices.shippingValue)
            } else {
                this.invoices.balanceDueValue = Number(this.invoices.subTotalValue) -Number(this.invoices.discountValue) + Number(this.invoices.taxValue) + Number(this.invoices.shippingValue)
                this.invoices.totalValue = Number(this.invoices.subTotalValue) -Number(this.invoices.discountValue) + Number(this.invoices.taxValue) + Number(this.invoices.shippingValue)
            }
            },
            { deep: true }
        );

        this.$watch(
            "invoices.balanceDueValue",
            function () {
                this.invoices.balanceDueValue =  Number(this.invoices.totalValue) - Number(this.invoices.amountPaidValue) 
            },
            { deep: true }
        );

        this.$watch(
            "invoices.fields.discounts",
            function (after) {
                let temp = this.invoices.discountValue
                if (after === false) {
                    const tempTotal = this.invoices.totalValue + temp
                    this.invoices.totalValue = tempTotal
                    if (this.invoices.balanceDueValue) {
                        this.invoices.balanceDueValue = tempTotal - this.invoices.amountPaidValue
                    } else this.invoices.balanceDueValue = tempTotal
                }
                
            },
            { deep: true }
        );

        this.$watch(
            "invoices.fields.tax",
            function (after) {
                let temp = this.invoices.taxValue
                if (after === false) {
                    const tempTotal = this.invoices.totalValue - temp
                    this.invoices.totalValue = tempTotal
                    if (this.invoices.balanceDueValue) {
                        this.invoices.balanceDueValue = tempTotal - this.invoices.amountPaidValue
                    } else this.invoices.balanceDueValue = tempTotal
                }
            },
            { deep: true }
        );

        this.$watch(
            "invoices.fields.shipping",
            function (after) {
                let temp = this.invoices.shippingValue
                if (after === false) {
                    const tempTotal = this.invoices.totalValue - temp
                    this.invoices.totalValue = tempTotal
                    if (this.invoices.balanceDueValue) {
                        this.invoices.balanceDueValue = tempTotal - this.invoices.amountPaidValue
                    } else this.invoices.balanceDueValue = tempTotal
                }
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
                    this.invoices.discountValue = 0;
                    break;
                case "tax":
                    this.invoices.fields.tax = false;
                    this.invoices.taxValue = 0;
                    break;
                case "shipping":
                    this.invoices.fields.shipping = false;
                    this.invoices.shippingValue = 0;
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

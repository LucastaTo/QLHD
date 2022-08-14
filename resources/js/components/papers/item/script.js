export default {
    props: {
        invoices: { type: Array, default: [] },
    },
    created() {
        this.$watch(
            "invoices.items",
            function (after) {
                after.filter(function (p) {
                    p.amountValue = p.quantityValue * p.unitCostValue;
                });
            },
            { deep: true }
        );
    },
    methods: {
        addRow() {
            this.invoices.items.push({
                nameValue: "",
                quantityValue: 1,
                unitCostValue: 0,
                amountValue: "$0.00",
            });
        },
        deleteRow(index) {
            this.invoices.items.splice(index, 1);
        },
    },
};

export default {
    data() {
        return {
          nameTitle: 'Item',
          quantityTitle: 'Quantity',
          unitCostTitle: 'Rate',
          amountTitle: "Amount",
          items:[{
            nameValue: "",
            quantityValue: 1,
            unitCostValue: 0,
            amountValue: "$0.00",
        }]
        }
    },
    methods: {
        addRow() {      
            this.items.push({
                nameValue: "",
                quantityValue: 1,
                unitCostValue: 0,
                amountValue: "$0.00",
            })
         },
         deleteRow(index){    
             this.items.splice(index,1);             
         } 
    }
}
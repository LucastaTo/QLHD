const base64Encode = data =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default {
    data() {
        return {
          group: '1',
          title: 'INVOICE',
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
        }
    },
    computed: {
        checkValidation() {
            return this.invoiceFrom ? true : false
        }
    },
      methods: {
        onFileChange(e) {
            const file = e.target.files[0];
          console.log(e)
          this.image = URL.createObjectURL(file);
          },
          onChangeText(e) {
            this.invoiceFrom = e.target.value
          },
          clearImage () {
            this.image = "";
          }
      }
}
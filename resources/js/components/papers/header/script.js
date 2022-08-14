const base64Encode = (data) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default {
    props: {
        invoices: { type: Array, default: [] },
    },
    computed: {
        checkValidation() {
            return this.invoices.invoiceFrom ? true : false;
        },
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            console.log(e);
            this.invoices.image = URL.createObjectURL(file);
        },
        onChangeText(e) {
            this.invoices.invoiceFrom = e.target.value;
        },
        clearImage() {
            this.invoices.image = "";
        },
    },
};

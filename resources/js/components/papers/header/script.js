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
        }
    },
    computed: {
        checkValidation() {
            return this.invoiceFrom.length > 0 ? true : false
        }
    },
      methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.image = URL.createObjectURL(file);
          }
      }
}
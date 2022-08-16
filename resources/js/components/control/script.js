import html2pdf from "html2pdf.js";

export default {
    props: {
        refCurrent: {
            type: HTMLDivElement,
            default: {} 
        },
    },
      methods: {
        generatePDF() {
            html2pdf(this.refCurrent, {
  			    filename: "test.pdf",
			});
        },
      },
}
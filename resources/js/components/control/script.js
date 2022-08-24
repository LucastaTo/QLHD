import html2pdf from "html2pdf.js";
import axios from "axios";

export default {
    props: {
        refCurrent: {
            type: HTMLDivElement,
            default: {},
        },
    },
    data() {
        return {
            modalShow: false,
            listHistory: [],
            historyLegth: 0
        }
    },
    mounted() {
        let temp
        for(let i = 1; i < 10000; i++) {
            if(localStorage.getItem('data-'+ i)) {
                new Set([this.listHistory.push(i)])
                 temp = i
            } 
        }
        this.historyLegth = temp
    },
    methods: {
        generatePDF() {
            axios
                .post(
                    "/api/downloadPdf",
                    {
                        html: this.refCurrent.innerHTML,
                        pdf: html2pdf(this.refCurrent.innerHTML),
                    },
                    {
                        responseType: "blob",
                    }
                )
                .then((response) => {
                    console.log(response);
                    var fileURL = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    var fileLink = document.createElement("a");
                    fileLink.href = fileURL;
                    fileLink.setAttribute(
                        "download",
                        `file-${
                            JSON.parse(localStorage.getItem("data"))?.group
                        }.pdf`
                    );
                    document.body.appendChild(fileLink);
                    fileLink.click();
                });
        },
        changeInvoice(item) {
            window.location.href ="http://localhost:8000/" + item
        }
    },
};

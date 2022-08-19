import Footer from "./footer";
import Header from "./header";
import Items from "./item";

export default {
    props: {
        invoices: { type: Object, default: {} },
    },
    components: {
        Footer,
        Items,
        Header,
    },
    created() {
        console.log(this.invoices);
    },
};

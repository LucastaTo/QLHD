import Footer from "./footer";
import Header from "./header";
import Items from "./item";

export default {
    props: {
        invoices: { type: Array, default: [] },
    },
    components: {
        Footer,
        Items,
        Header,
    },
};

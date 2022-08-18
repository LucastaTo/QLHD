<template>
    <Header />
    <div class="container">
        <form>
            <div class="invoice-main">
                <b-card class="card-papers">
                    <Papers :invoices="invoices"/>
                </b-card>
                 <b-card class="card-papers-1" style='display:none;'>
                    <PDFFile :invoices="invoices"/>
                </b-card>
                <Control :refCurrent="screenRef"/>
            </div>
        </form>
    </div>
    <Footer />
</template>

<script src="./script.js"></script>

<style scoped>
.card-papers {
    padding: 12px;
    -webkit-box-shadow: 1px 1px 0 rgb(0 0 0 / 10%), 3px 3px 0 #fff,
        4px 4px 0 rgb(0 0 0 / 13%), 6px 6px 0 #fff, 7px 7px 0 rgb(0 0 0 / 15%);
    -moz-box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1), 3px 3px 0 #fff,
        4px 4px 0 rgba(0, 0, 0, 0.125), 6px 6px 0 #fff,
        7px 7px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 0 rgb(0 0 0 / 10%), 3px 3px 0 #fff,
        4px 4px 0 rgb(0 0 0 / 13%), 6px 6px 0 #fff, 7px 7px 0 rgb(0 0 0 / 15%);
}
.container {
    padding: 24px 15px;
}
.invoice-main {
    display: flex;
    gap: 24px;
}
</style>

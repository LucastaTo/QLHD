<template>
    <div class="d-flex flex-column align-items-center">
        <b-button class="btn-send" variant="success">Send Invoice</b-button>
        <b-button variant="link" class="btn-down" @click="generatePDF()"
            >Download Invoice</b-button
        >
        <b-button v-if="listHistory.length !== 0" @click="modalShow = !modalShow"  variant="outline-danger" class="border-0 btnCustom" style="font-size:32px;">History <b-badge variant="light" class="badgeCustom">{{ listHistory.length }}</b-badge></b-button>

        <b-modal v-model="modalShow" hide-header hide-footer>
            <div class="itemHistory">
                <b-card v-for="(item) in listHistory" @click="changeInvoice(item)">
                    <button id="btnClear" @click.stop="clearHistory(item)"  v-show="item !== Number(invoiceAccept)">X</button>
                    <span class="title">Invoice</span> <b-badge variant="success" style="border-radius: 50%">{{ item }}</b-badge>
                </b-card>
            </div>
        </b-modal>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.btn-send {
    width: 195px;
    height: 48px;
    font-size: 1.25rem;
}
.btn-link {
    text-decoration: auto;
    color: #6c757d;
}
.btn-link:hover {
    color: #009e74;
}
.badgeCustom {
        background-color: red !important;
        color: #fff !important;
        border-radius: 50%;
}
.btnCustom:focus,
.btnCustom:hover   {
    background-color: #fff;
    color: red;
    border: 0;
}
.itemHistory {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    z-index: 1;
}
.card {
    text-align: center;
    background: honeydew;
    color: red;
    cursor: pointer;
    position: relative;
    z-index: 1;
}
.title {
    font-size: 18px;
    font-weight: 500;
}
#btnClear {
    position: absolute;
    display: block;
    top: 5px;
    border-radius: 50%;
    font-size: 12px;
    right: 10px;
    padding: 0 5px;
    text-align: center;
    color: #fff;
    background: #3a3a3a;
    box-shadow: none;
    border: none;
    z-index: 2;
}

#btnClear:hover {
    text-decoration: none;
    background: #009e74;
}
</style>

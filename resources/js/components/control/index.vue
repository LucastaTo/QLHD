<template>
    <div class="d-flex flex-column align-items-center">
        <b-button class="btn-send" variant="success">Send Invoice</b-button>
        <b-button variant="link" class="btn-down" @click="generatePDF()"
            >Download Invoice</b-button
        >
        <b-button @click="modalShow = !modalShow"  variant="outline-danger" class="border-0 btnCustom" style="font-size:32px;">History <b-badge variant="light" class="badgeCustom">{{ historyLegth }}</b-badge></b-button>

        <b-modal v-model="modalShow" hide-header hide-footer>
            <div class="itemHistory">
                <b-card v-for="(item) in listHistory" @click="changeInvoice(item)">
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
}
.card {
    text-align: center;
    background: honeydew;
    color: red;
    cursor: pointer;
}
.title {
    font-size: 18px;
    font-weight: 500;
}
</style>

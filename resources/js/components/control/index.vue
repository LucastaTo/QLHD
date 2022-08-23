<template>
    <div class="d-flex flex-column align-items-center">
        <b-button class="btn-send" variant="success">Send Invoice</b-button>
        <b-button variant="link" class="btn-down" @click="generatePDF()"
            >Download Invoice</b-button
        >
        <b-button @click="modalShow = !modalShow">Open Modal</b-button>

        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
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
</style>

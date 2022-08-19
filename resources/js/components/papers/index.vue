<template>
    <div class="invoices">
        <Header :invoices="invoices" />

        <Items :invoices="invoices" />

        <Footer :invoices="invoices" />
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.invoices {
}
</style>

<template>
    <div class="items-holder">
        <div class="items-table-header">
            <b-form-input class="name-header" v-model="invoices.nameTitle" />
            <b-form-input
                class="quantity-header"
                v-model="invoices.quantityTitle"
            />
            <b-form-input
                class="unit-cost-header"
                v-model="invoices.unitCostTitle"
            />
            <b-form-input
                class="amount-header"
                v-model="invoices.amountTitle"
            />
        </div>
        <div class="items-table-item" v-for="(item, index) in invoices.items">
            <b-form-input
                class="name-item"
                v-model="item.nameValue"
                placeholder="Description of service or product..."
            />

            <b-form-input class="quantity-item" v-model="item.quantityValue" />
            <b-input-group>
                <span
                    class="border d-flex justify-content-center align-items-center"
                    style="width: 38px"
                    >$</span
                >
                <b-form-input
                    class="unit-cost-item"
                    v-model="item.unitCostValue"
                />
            </b-input-group>

            <span
                class="amount-item d-flex justify-content-end align-items-center"
                >${{ item.amountValue }}.00</span
            >
            <b-button
                v-if="index !== 0"
                variant="link"
                @click="deleteRow(index)"
                class="btn-delete"
                >X</b-button
            >
        </div>
        <div class="btn-new-line">
            <b-button variant="success" @click="addRow">+ Line new</b-button>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.items-holder {
    padding: 30px 11px;
    display: grid;
    gap: 4px;
}
.items-table-header {
    display: grid;
    grid-template-columns: 70% 10% 10% 10%;
    background: #232e38;
}
.items-table-item {
    display: grid;
    grid-template-columns: 70% 10% 10% 10%;
    gap: 2px;
    position: relative;
}
.btn-delete {
    position: absolute !important;
    right: -45px;
    top: 0;
}
.btn-link {
    text-decoration: auto;
    color: #009e74;
}
.name-header,
.quantity-header,
.unit-cost-header,
.amount-header {
    background: #232e38;
    color: #fff;
    cursor: pointer;
    border-radius: 0;
}

.amount-item {
    text-align: right;
}

.name-header:focus,
.quantity-header:focus,
.unit-cost-header:focus,
.amount-header:focus {
    background: #879099;
    box-shadow: none;
    color: #fff;
    border: 0;
}
</style>

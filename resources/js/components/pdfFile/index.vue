<template>
    <div class="my-5 my-page" size="A4">
        <div class="header-wrapper two-col clearfix">
            <div class="title">
                <span class="title-input px-3 mb-2">
                    {{ invoices.title }}
                </span>
                <div class="subtitle">
                    <span class="subtitle-input"># {{ invoices.group }} </span>
                </div>
            </div>

            <div class="col contact-info">
                <div class="logo noselect" >
                    <div id="preview">
                        <img :src="invoices.image" height="200" width="150" v-if="invoices.image"/>
                        <div style="height: 200px; width: 150px;" v-if="!invoices.image"></div>
                    </div>
                </div>
                <div class="contact-from">
                    <span class="px-2">
                        <b>{{ invoices.invoiceFrom }} </b>
                    </span>
                </div>
                <b-row>
                    <b-col class="contact-to col-md-6">
                        <span class="bill-title-input px-3 mb-2">
                            {{ invoices.billTitle }} :
                        </span>
                        <span class="px-2">
                            <b> {{ invoices.billTo }} </b>
                        </span>
                    </b-col>

                    <b-col class="contact-to col-md-6">
                        <span class="ship-title-input px-3 mb-2">
                            {{ invoices.shipTitle }} :
                        </span>
                        <span class="px-2">
                            <b> {{ invoices.shipTo }} </b>
                        </span>
                    </b-col>
                </b-row>
            </div>

            <div class="col contact-details">
                <b-input-group
                    class="mb-2 gap-3 justify-content-between align-items-center"
                >
                    <span class="details-title">
                        {{ invoices.dateTitle }}:
                    </span>
                    <span class="details-value">
                        {{ invoices.dateValue }}
                    </span>
                </b-input-group>
                <b-input-group
                    class="mb-2 gap-3 justify-content-between align-items-center"
                >
                    <span class="details-title">
                        {{ invoices.paymentTermTitle }}:
                    </span>
                    <span class="details-value">
                        {{ invoices.paymentTermValue }}
                    </span>
                </b-input-group>
                <b-input-group
                    class="mb-2 gap-3 justify-content-between align-items-center"
                >
                    <span class="details-title">
                        {{ invoices.dueDateTitle }}:
                    </span>
                    <span class="details-value">
                        {{ invoices.dueDateValue }}
                    </span>
                </b-input-group>
                <b-input-group
                    class="mb-2 gap-3 justify-content-between align-items-center"
                >
                    <span class="details-title">
                        {{ invoices.poNumberTitle }}:
                    </span>
                    <span class="details-value">
                        {{ invoices.poNumberValue }}
                    </span>
                </b-input-group>

                <b-input-group
                    class="mb-2 gap-3 justify-content-between align-items-center"
                    style="background: #f5f5f5; font-size: 20px"
                >
                    <span class="details-title">
                        <b>{{ invoices.balanceDue }}:</b>
                    </span>
                    <span class="details-value">
                        <b>US${{ invoices.balanceDueValue }}.00</b>
                    </span>
                </b-input-group>
            </div>
        </div>

        <div class="items-holder">
            <div class="items-table-header">
                <span class="name-header"> {{ invoices.nameTitle }} </span>
                <span class="quantity-header">
                    {{ invoices.quantityTitle }}
                </span>
                <span class="unit-cost-header">
                    {{ invoices.unitCostTitle }}
                </span>
                <span class="amount-header"> {{ invoices.amountTitle }} </span>
            </div>
            <div
                class="items-table-item"
                v-for="(item, index) in invoices.items"
            >
                <span class="name-item"
                    ><b>{{ item.nameValue }}</b></span
                >

                <span
                    class="quantity-item d-flex justify-content-end align-items-center"
                    >{{ item.quantityValue }}</span
                >

                <span
                    class="unit-cost-item d-flex justify-content-end align-items-center"
                    >US${{ item.unitCostValue }}.00</span
                >

                <span
                    class="amount-item d-flex justify-content-end align-items-center"
                    >US${{ item.amountValue }}.00</span
                >
            </div>
        </div>

        <div class="two-col clearfix">
            <b-row>
                <b-col class="footer"> </b-col>

                <b-col class="rates">
                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                    >
                        <span class="details-title">
                            {{ invoices.subTotal }}:
                        </span>
                        <span class="margin-left: auto">
                            <b>US${{ invoices.subTotalValue }}.00</b>
                        </span>
                    </b-input-group>

                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                        v-if="invoices.fields.discounts"
                    >
                        <span class="details-title">
                            {{ invoices.discount }}:
                        </span>
                        <span class="text-align: left;">
                            <b>US${{ invoices.discountValue }}.00</b>
                        </span>
                    </b-input-group>

                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                        v-if="invoices.fields.tax"
                    >
                        <span class="details-title"> {{ invoices.tax }}: </span>
                        <span class="text-align: left;">
                            <b>US${{ invoices.taxValue }}.00</b>
                        </span>
                    </b-input-group>

                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                        v-if="invoices.fields.shipping"
                    >
                        <span class="details-title">
                            {{ invoices.shipping }}:
                        </span>
                        <span class="text-align: left;">
                            <b>US${{ invoices.shippingValue }}.00</b>
                        </span>
                    </b-input-group>

                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                    >
                        <span class="details-title">
                            {{ invoices.total }}:
                        </span>
                        <span class="text-align: left;">
                            <b>US${{ invoices.totalValue }}.00</b>
                        </span>
                    </b-input-group>

                    <b-input-group
                        class="mb-2 gap-3 justify-content-between align-items-center"
                    >
                        <span class="details-title">
                            {{ invoices.amountPaid }}:
                        </span>
                        <span class="text-align: left;">
                            <b>US${{ invoices.amountPaidValue }}.00</b>
                        </span>
                    </b-input-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <div class="notes-holder">
                        <span class="bill-title-input px-3 mb-2">
                            {{ invoices.notesTitle }} :
                        </span>
                        <span class="px-2">
                            {{ invoices.notesValue }}
                        </span>
                    </div>

                    <div class="terms-holder pt-2">
                        <span class="bill-title-input px-3 mb-2">
                            {{ invoices.termsTitle }} :
                        </span>
                        <span class="px-2">
                            {{ invoices.termsValue }}
                        </span>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.header-wrapper {
}

.title {
    display: flex;
    flex-direction: column;
    margin: 0 30px 45px 0;
    float: right;
    text-align: right;
    max-width: 45%;
}
.subtitle {
    text-align: right;
    max-width: 170px;
    float: right;
}

.subtitle-input {
    text-align: right;
}

bill-title-input,
ship-title-input {
    cursor: pointer;
    width: 100%;
}

.title-input {
    cursor: pointer;
    font-size: 2.75em;
    width: 100%;
    text-align: right;
}

#preview {
    position: relative;
}

#btnClear {
    position: absolute;
    display: block;
    top: 5px;
    left: 5px;
    padding: 0 5px;
    text-align: center;
    border-radius: 3px;
    color: #fff;
    background: #3a3a3a;
    box-shadow: none;
    border: none;
}

#preview img {
    max-width: 100%;
    max-height: 500px;
}

.contact-info {
    float: left;
    width: 50%;
}
.contact-details {
    float: right;
    width: 50%;
}
.details-title {
    text-align: right;
    cursor: pointer;
    padding: 4px 8px;
}
.details-value {
    text-align: right;
}
.contact-from {
    margin: 15px 0 0;
    max-width: 275px;
}
.contact-to {
    display: flex;
    flex-direction: column;
    margin: 15px 0 0;
    max-width: 275px;
}

.items-holder {
    padding: 30px 11px;
    display: grid;
    gap: 4px;
}
.items-table-header {
    display: grid;
    grid-template-columns: 55% 15% 15% 15%;
    background: #232e38;
}
.items-table-item {
    display: grid;
    grid-template-columns: 55% 15% 15% 15%;
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
    margin-left: 10px;
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
.my-page {
    padding: 24px;
}
</style>

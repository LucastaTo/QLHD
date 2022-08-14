<template>
    <div class="two-col clearfix">
        <b-row>
            <b-col class="footer">
                <div class="notes-holder">
                    <input
                        type="input"
                        class="bill-title-input px-3 mb-2"
                        v-model="notesTitle"
                    />
                    <b-form-textarea
                        class="px-2"
                        v-model="invoices.notesValue"
                        placeholder="Notes - any relevant information not already covered"
                        trim
                        rows="3"
                        no-resize
                    />
                </div>

                <div class="terms-holder pt-2">
                    <input
                        type="input"
                        class="bill-title-input px-3 mb-2"
                        v-model="invoices.termsTitle"
                    />
                    <b-form-textarea
                        class="px-2"
                        v-model="invoices.termsValue"
                        placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                        trim
                        rows="3"
                        no-resize
                    />
                </div>
            </b-col>

            <b-col class="rates">
                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="invoices.subTotal"
                    />
                    <span style="margin-left: auto"
                        >${{ invoices.subTotalValue }}.00</span
                    >
                </b-input-group>

                <b-input-group
                    class="mb-2"
                    v-if="invoices.fields.discounts"
                >
                    <input
                        type="input"
                        class="details-title me-3"
                        v-model="invoices.discount"
                    />
                    <span class="border d-flex justify-content-center align-items-center" style="width: 38px;" v-if="invoices.fields.discounts === true">$</span>
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="invoices.discountValue"
                        style="border-right: none;"
                    />
                    <b-input-group-append>
                        <span class="border d-flex justify-content-center align-items-center" style="width: 38px;" v-if="invoices.fields.discounts === '%'">%</span>
                        <div class="border d-flex justify-content-center align-items-center" style="width: 38px;" role='button' @click="changeFieldOption('discounts')"><font-awesome-icon icon="fa-solid fa-repeat" /></div>
                     </b-input-group-append>
                    <b-button
                        variant="link"
                        @click="hideInput('discounts')"
                        class="btn-hide"
                        >X</b-button
                    >
                </b-input-group>

                <b-input-group class="mb-2" v-if="invoices.fields.tax">
                    <input
                        type="input"
                        class="details-title"
                        v-model="invoices.tax"
                    />
                    <span class="border d-flex justify-content-center align-items-center" style="width: 38px;" v-if="invoices.fields.tax === true">$</span>
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="invoices.taxValue"
                    />
                    <b-input-group-append>
                        <span class="border d-flex justify-content-center align-items-center" style="width: 38px;" v-if="invoices.fields.tax === '%'">%</span>
                        <div class="border d-flex justify-content-center align-items-center" style="width: 38px;" role='button' @click="changeFieldOption('tax')"><font-awesome-icon icon="fa-solid fa-repeat" /></div>
                     </b-input-group-append>
                    <b-button
                        variant="link"
                        @click="hideInput('tax')"
                        class="btn-hide"
                        >X</b-button
                    >
                </b-input-group>

                <b-input-group
                    class="mb-2 "
                    v-if="invoices.fields.shipping"
                >
                    <input
                        type="input"
                        class="details-title me-3"
                        v-model="invoices.shipping"
                    />
                    <span class="border d-flex justify-content-center align-items-center" style="width: 38px;">$</span>
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="invoices.shippingValue"
                    />
                    <b-button
                        variant="link"
                        @click="hideInput('shipping')"
                        class="btn-hide"
                        >X</b-button
                    >
                </b-input-group>

                <b-input-group class="mb-2 gap-3 justify-content-end">
                    <b-button
                        variant="link"
                        :click="invoices.fields.discounts"
                        v-if="invoices.fields.discounts === false"
                        @click="showInput('discounts')"
                        >+ Discount</b-button
                    >
                    <b-button
                        variant="link"
                        :pressed.sync="invoices.fields.tax"
                        v-if="invoices.fields.tax === false"
                        @click="showInput('tax')"
                        >+ Tax</b-button
                    >
                    <b-button
                        variant="link"
                        :pressed.sync="invoices.fields.shipping"
                        v-if="invoices.fields.shipping === false"
                        @click="showInput('shipping')"
                        >+ Shipping</b-button
                    >
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="invoices.total"
                    />
                    <span style="margin-left: auto"
                        >${{ invoices.totalValue }}.00</span
                    >
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="invoices.amountPaid"
                    />
                    <div>
                        <b-input-group prepend="$" class="group-items">
                            <b-form-input
                                type="number"
                                v-model="invoices.amountPaidValue"
                            />
                        </b-input-group>
                    </div>
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="invoices.balanceDue"
                    />
                    <span style="margin-left: auto"
                        >${{ invoices.balanceDueValue }}.00</span
                    >
                </b-input-group>
            </b-col>
        </b-row>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.details-title {
    text-align: right;
    cursor: pointer;
    padding: 4px 8px;
}
.details-value {
    text-align: right;
}
.btn-hide {
    position: absolute !important;
    right: -35px;
    top: 0;
}
.btn-link {
    text-decoration: auto;
    color: #009e74;
}
</style>

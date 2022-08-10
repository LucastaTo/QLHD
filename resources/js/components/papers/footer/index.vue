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
                        v-model="notesValue"
                        placeholder="Notes - any relevant information not already covered"
                        trim
                    />
                </div>

                <div class="terms-holder pt-2">
                    <input
                        type="input"
                        class="bill-title-input px-3 mb-2"
                        v-model="termsTitle"
                    />
                    <b-form-textarea
                        class="px-2"
                        v-model="termsValue"
                        placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                        trim
                    />
                </div>
            </b-col>

            <b-col class="rates">
                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="subTotal"
                    />
                    <span style="margin-left: auto">${{ subTotalValue }}</span>
                </b-input-group>

                <b-input-group class="mb-2 gap-3" v-if="fields.discounts">
                    <input
                        type="input"
                        class="details-title"
                        v-model="discount"
                    />
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="discountValue"
                    />
                </b-input-group>

                <b-input-group class="mb-2 gap-3" v-if="fields.tax">
                    <input type="input" class="details-title" v-model="tax" />
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="taxValue"
                    />
                </b-input-group>

                <b-input-group class="mb-2 gap-3" v-if="fields.shipping">
                    <input
                        type="input"
                        class="details-title"
                        v-model="shipping"
                    />
                    <b-form-input
                        type="input"
                        class="details-value"
                        v-model="shippingValue"
                    />
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <b-button variant="link" :pressed.sync="fields.discounts">+ Discount</b-button>
                    <b-button variant="link" :pressed.sync="fields.tax">+ Tax</b-button>
                    <b-button variant="link" :pressed.sync="fields.shipping">+ Shipping</b-button>
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input type="input" class="details-title" v-model="total" />
                    <span style="margin-left: auto">${{ totalValue }}</span>
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="amountPaid"
                    />
                    <div>
                        <b-input-group prepend="$" class="group-items">
                            <b-form-input
                                type="number"
                                v-model="amountPaidValue"
                            />
                        </b-input-group>
                    </div>
                </b-input-group>

                <b-input-group class="mb-2 gap-3">
                    <input
                        type="input"
                        class="details-title"
                        v-model="balanceDue"
                    />
                    <span style="margin-left: auto"
                        >${{ balanceDueValue }}</span
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
</style>

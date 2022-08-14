<template>
    <div class="header-wrapper two-col clearfix">
        <div class="title">
            <input type="input" class="title-input px-3 mb-2" v-model="invoices.title" />
            <b-input-group size="lg" prepend="#" class="subtitle">
                <b-form-input v-model="invoices.group" class="subtitle-input" />
            </b-input-group>
        </div>

        <div class="col contact-info">
            <div class="logo noselect">
                <label
                    v-if="!invoices.image"
                    for="img"
                    class="btn btn-secondary btn-file"
                >
                    Add Your Logo</label
                >
                <input
                    type="file"
                    id="img"
                    style="display: none"
                    accept="image/*"
                    @change="onFileChange"
                />
                <div id="preview" v-if="invoices.image">
                    <img :src="invoices.image" height="100" width="200" />
                    <button id="btnClear" @click="clearImage">X</button>
                </div>
            </div>
            <div class="contact-from">
                <b-form-textarea
                    class="px-2"
                    v-model="invoices.invoiceFrom"
                    placeholder="This is a invoice from (required)"
                    trim
                    rows="3"
                        no-resize
                />
            </div>
            <b-row>
                <b-col class="contact-to col-md-6">
                    <input
                        type="input"
                        class="bill-title-input px-3 mb-2"
                        v-model="invoices.billTitle" />
                    <b-form-textarea
                        class="px-2"
                        v-model="invoices.billTo"
                        placeholder="Who is this invoice to? (required)"
                        trim
                        rows="3"
                        no-resize
                /></b-col>
                <b-col class="contact-to col-md-6">
                    <input
                        type="input"
                        class="ship-title-input px-3 mb-2"
                        v-model="invoices.shipTitle" />
                    <b-form-textarea
                        class="px-2"
                        v-model="invoices.shipTo"
                        placeholder="(optional)"
                        trim
                        rows="3"
                        no-resize
                /></b-col>
            </b-row>
        </div>

        <div class="col contact-details">
            <b-input-group class="mb-2 gap-3">
                <input type="input" class="details-title" v-model="invoices.dateTitle" />
                <b-form-input type="date" class="details-value" v-model="invoices.dateValue" />
            </b-input-group>
            <b-input-group class="mb-2 gap-3">
                <input
                    type="input"
                    class="details-title"
                    v-model="invoices.paymentTermTitle"
                />
                <b-form-input
                    type="input"
                    class="details-value"
                    v-model="invoices.paymentTermValue"
                />
            </b-input-group>
            <b-input-group class="mb-2 gap-3">
                <input
                    type="input"
                    class="details-title"
                    v-model="invoices.dueDateTitle"
                />
                <b-form-input
                    type="date"
                    class="details-value"
                    v-model="invoices.dueDateValue"
                />
            </b-input-group>
            <b-input-group class="mb-2 gap-3">
                <input
                    type="input"
                    class="details-title"
                    v-model="invoices.poNumberTitle"
                />
                <b-form-input
                    type="input"
                    class="details-value"
                    v-model="invoices.poNumberValue"
                />
            </b-input-group>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.header-wrapper {
}
.btn-file:hover {
    background: #eee;
    color: #777;
}
.btn-file {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    color: #777;
    height: 130px;
    width: 200px;
    font-size: 1.2em;
}
.title {
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
.title-input:hover {
    border: 1px solid #c4cdd5;
    border-radius: 4px !important;
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

#btnClear:hover {
    text-decoration: none;
    background: #009e74;
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
    margin: 15px 0 0;
    max-width: 275px;
}
</style>

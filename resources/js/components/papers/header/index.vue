<template>
    <div class="header-wrapper two-col clearfix">
        <div class="title">
            <input type="input" class="title-input" v-model="title" />
            <b-input-group size="lg" prepend="#" class="subtitle">
                <b-form-input v-model="group" class="subtitle-input" />
            </b-input-group>
        </div>

        <div class="col contact-info">
            <div class="logo noselect">
                <label for="img" class="btn btn-secondary btn-file">
                    Add Your Logo</label
                >
                <input
                    type="file"
                    id="img"
                    style="display: none"
                    accept="image/*"
                    @change="onFileChange"
                />
                <div id="preview">
                    <img v-if="image" :src="image" />
                </div>
            </div>
            <div class="contact from">
                <b-form-input
                    v-model="invoiceFrom"
                    :state="checkValidation"
                    placeholder="This is a invoice from (required)"
                    trim
                    aria-invalid
                ></b-form-input>
            </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 100%;
    max-height: 500px;
}
</style>

<template>
    <div class="header-default">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link to="/" class="navbar-brand">Invoice Generator</router-link>
                <button class="navbar-toggler" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="contentone" class="nav-link">Help</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="contenttwo" class="nav-link">Invoicing Guide</router-link>
                        </li>
                         <li class="nav-item">
                            <router-link to="contentthree" class="nav-link">Sign In</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.header-default {
    width: 100%;
}
</style>
<template>
	<Header />
    <div class="container">
		<form>
			<div class="invoice-main">
			<b-card class="card-papers">
				<Papers />
				</b-card>
				<Control />
			</div>
		</form>	
	</div>
	<Footer />
</template>

<script src="./script.js"></script>

<style scoped>
.card-papers {
	padding: 12px;
}
.container {
	padding: 24px 15px;
}
.invoice-main {
	display: flex;
	gap: 24px;
}
</style>

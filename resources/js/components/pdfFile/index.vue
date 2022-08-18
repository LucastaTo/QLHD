<template>
<div class="my-5 my-page" size="A4">
        <div class="p-5">
            <section class="top-content bb d-flex">
                <div class="logo">
                    <img style="width: 170px;height: 130px;"
                    src="https://e7.pngegg.com/pngimages/380/975/png-clipart-panda-logo-creative-panda-logo-cute-panda-logo-thumbnail.png" alt="" class="img-fluid">
                </div>
                <div class="top-left">
                    <p style="font-weight:bold; font-size:20px;">TIRAMISU CAKE ltd. COMPANY</p>
                    <div class="cpn_header">
                    <table cellpadding="0" cellspacing="1">
                        <tr>
                            <td class="cpn_info"><span class="texcode">Tex-code</span></td>
                            <td><span id="code" class="Label">: 0 3 0 0 5 2 1 7 5 8</span></td>
                        </tr>
                        <tr>
                            <td class="cpn_info"><span>Address</span></td>
                            <td><span class="Label">: 170E Phan Dang Luu Street, Ward 3, Phu Nhuan District.</span></td>
                        </tr>
                        <tr>
                        <td class="cpn_info"><span class="phone">Phone number</span></td>
                            <td><span class="Label">: 0394.081.802</span></td>
                        </tr>
                        <tr>
                        <td class="cpn_info"><span class="account">Account No</span></td>
                            <td><span class="Label">: 0123456789999 - Argibank Viet Nam </span></td>
                        </tr>
                    </table>
                </div>
                </div>

            </section>

            <section class="title mt-5">
                <div class="cpny-info">
                    <h4>VAT INVOICE</h4>
                    <div class="row extra-info" style="display:flex; text-align: justify;">
                        <div class="col-3">
                            <img src="https://anhong.com.vn/wp-content/uploads/2020/09/ma-qrcode-https-baohodoanhnghiep-com.png">
                        </div>
                        <div class="col-5">
                            <p style="padding-left: 90px;">Due Date: <span>01 - 08 - 2022</span></p>
                        </div>
                        <div class="col-4">
                            <p>Invoice No: <span style="color: #D51A1F; font-weight:bold">000000</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cus-info">
                <table cellpadding="0" cellspacing="1">
                    <tr>
                        <td style="text-align: left; width: 150px; font-weight:700;"><span>Customer:</span></td>
                        <td><span>a</span></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; width: 150px; font-weight:700;"><span>Company name:</span></td>
                        <td><span>a</span></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; width: 150px; font-weight:700;"><span>Tex code:</span></td>
                        <td><span>a</span></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; width: 150px; font-weight:700;"><span>Address:</span></td>
                        <td><span>a</span></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; width: 150px; font-weight:700; font-size:30px;"><span>Payment method:</span></td>
                        <td><span>{{invoices.billTo}}</span></td>
                        <td style="text-align: left; width: 150px; font-weight:700;"><span>Account No:</span></td>
                        <td><span>a</span></td>
                    </tr>    
                </table>
            </section>

            <div class="product_container">
			<table class="item_table" border="1" cellspacing="0">
				<tr style="background-color: #92b4f0;">
					<th>Sl. No.</th>
					<th>Item</th>
					<th>Price</th>
					<th>Qty</th>
					<th>Total</th>
				</tr>
                <tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr class="item_border">
					<td>1</td>
					<td class="description">Samsung M31 mobile</td>
					<td>20,000</td>
					<td>2</td>
					<td>38000</td>
				</tr>
                <tr class="item_border">
					<td>1</td>
					<td class="description">Samsung M31 mobile</td>
					<td>20,000</td>
					<td>2</td>
					<td>38000</td>
				</tr>                                     
                </table>
            </div>

            <section class="balance-info">
                <div class="note_total">
                    <div class="col-7">
                        <p class="m-0 font-weight-bold"> Note: </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus, adipisci vero est dolore praesentium.</p>
                    </div>
                    <div class="col-5">
                        <table class="table border-0">
                            <tr>
                                <td>Sub Total:</td>
                                <td>800$</td>
                            </tr>
                            <tr>
                                <td>Tax:</td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Deliver:</td>
                                <td>10$</td>
                            </tr>
                            <tr>
                                <td>Discount:</td>
                                <td>10$</td>
                            </tr>
                            <tfoot>
                                <tr>
                                    <td>Total:</td>
                                    <td>825$</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                    <!-- Signature -->
                    <div class="signature">
                        <div class="col-6">
                            <img src="" class="img-fluid" alt="">
                            <p class="text-center m-0"> Customer Signature </p>
                        </div>
                        <div class="col-6">
                            <img src="" class="img-fluid" alt="">
                            <p class="text-center m-0"> Director Signature </p>
                        </div>
                    </div>
            </section>
            <footer>
                <section class="top-content aa">
                    <div class="footer-info">
                    <i>Tiramisu Ltd. Company My-Invoice, Tex-code: 0300521758</i>
                    </div>
                </section>
            </footer>
        </div>
    </div>
    
</template>

<script src="./script.js"></script>
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}
//login
var modal = document.getElementById("myModal");
var btn = document.getElementById("dangnhap");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function dangnhap(){
    const account = Account.list;
    let dnName = document.getElementById('dnName').value;
    let dnPassword = document.getElementById('dnPassword').value;
    if(dnName == account.name && dnPassword == account.pass){
        alert("Đăng nhập thành công.")
        document.getElementById("myModal").style.display = "none";
        
    }else{
        alert("Tài Khoản sai!")
    }
}
//dangky
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("dangky");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
    modal1.style.display = "block";
}
span.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
const Account = {
    storeKey: 'ACCOUNT_DATA',
    account: {
        name: '',
        email: '',
        pass: '',
    },
    load: function(){
        const jsonData = localStorage.getItem(this.storeKey);
        try{
            this.data = JSON.parse(jsonData);
        }catch(e){
            alert('Lỗi')
        }
    },
    add: function(Account){
        this.data = Account;
    },
    save: function(){
        const jsonData = JSON.stringify(this.data);
        localStorage.setItem(this.storeKey, jsonData);
    },
    get list(){
        return this.data;
    }
}

Account.load();
//renderAccount();
function dangky(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let password = document.getElementById('password').value;
    //check name:
    if(name == ""){
        document.getElementById("errorname").innerHTML = "Chưa nhập tên";
    }else if(name){

    }
    //Check email:
    if(email == ""){
        document.getElementById("erroremail").innerHTML = "Chưa nhập email";
    }else{
        document.getElementById("erroremail").innerHTML = "";
    }
    //Check pass:
    if(pass == ""){
        document.getElementById("errorpass").innerHTML = "Chưa nhập password";
    }else{
        document.getElementById("errorpass").innerHTML = "";
    }
    //Check nhập lại pass;
    if(password == ""){
        document.getElementById("errorpassword").innerHTML = "Chưa nhập lại password";
    }else if(password != pass){
        document.getElementById("errorpassword").innerHTML = " Password không đúng."
    }else{
        document.getElementById("errorpassword").innerHTML = "";
    }
    if(name && email && pass && password == pass){
        Account.add({
            name: name,
            pass: pass,
            email: email,
		});
		document.getElementById("myModal1").style.display = "none";
    }
    Account.save();
    //renderAccount();
 }

//Dialog
function Dialog(s){
    return{
        hide(){
        
            document.getElementById("Dialog").style.display = "none"
        },
        show(){
            document.getElementById("result").innerHTML = s
            document.getElementById("Dialog").style.display = "block"
        }
    }
}
// abc

function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function showMenu(){
	var menuList = ['ADIDAS','NIKE','GUCCI','BALENCIAGA'];
	var ul = document.getElementById('navmenu');
	var li='<li><a href="index.html">TRANG CHỦ</a></li>';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="index.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
		ul.innerHTML= li;
	}
}

	
/*PRODUCT*/
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:10042, brand:'adidas',    img:'images/product/10042.jpg', name:'Stan Smith Green', price:2500000},
			{productId:10041, brand:'nike',    img:'images/product/10041.jpg', name:'Air max 1 Just do it', price:5700000},
			{productId:10040, brand:'adidas',    img:'images/product/10040.jpg', name:'Superstar White Gold', price:2100000},
			{productId:10039, brand:'adidas',    img:'images/product/10039.jpg', name:'Stan Smith Leather White', price:3030000},
			{productId:10038, brand:'gucci',    img:'images/product/10038.jpg', name:'Gucci Snake Diamond', price:18455000},
			{productId:10037, brand:'gucci',    img:'images/product/10037.jpg', name:'Gucci Sneaker Dirty', price:15000000},
			{productId:10036, brand:'balenciaga',    img:'images/product/10036.jpg', name:'Balenciaga Speed Trainer Triple Black', price:17050000},
			{productId:10035, brand:'nike',    img:'images/product/10035.jpg', name:'Vapormax X OFF WHITE 2018', price:7500000},
			{productId:10034, brand:'nike',    img:'images/product/10034.jpg', name:'AIR MAX 270 ALL WHITE', price:4319000},
			{productId:10033, brand:'adidas',    img:'images/product/10033.jpg', name:'Human Race China Exclusive Green', price:10375000},
			{productId:10032, brand:'adidas',    img:'images/product/10032.jpg', name:'Alpha Bounce Instinct All Black', price:4300000},
			{productId:10031, brand:'gucci',    img:'images/product/10031.jpg', name:'Gucci Global Sneaker', price:16050000},
			{productId:10030, brand:'gucci',    img:'images/product/10030.jpg', name:'Gucci Bee Black', price:16000000},
			{productId:10029, brand:'balenciaga',    img:'images/product/10029.jpg', name:'Balenciaga Triple S Grey', price:33000000},
			{productId:10028, brand:'balenciaga',    img:'images/product/10028.jpg', name:'Rick Owens SS17 High', price:18050000},
			{productId:10027, brand:'nike',    img:'images/product/10027.jpg', name:'Pegasus 35 Black', price:7350000},
			{productId:10026, brand:'nike',    img:'images/product/10026.jpg', name:'Air Max 97 Silver Bullet', price:8150000},
			{productId:10025, brand:'adidas',    img:'images/product/10025.jpg', name:'Alpha Bounce Beyond Nude/Pink', price:4100000},
			{productId:10024, brand:'adidas',    img:'images/product/10024.jpg', name:'Adidas YUNG1 Navy/Red', price:4590000},
			{productId:10023, brand:'gucci',    img:'images/product/10023.jpg', name:'Gucci Snake Sneaker', price:16000000},
			{productId:10022, brand:'gucci',    img:'images/product/10022.jpg', name:'Gucci Global Silver Sneaker', price:18000000},
			{productId:10021, brand:'adidas',    img:'images/product/10021.jpg', name:'Yeezy 350 v2 ‘ Zebra ‘ Rep', price:10255000},
			{productId:10020, brand:'adidas',    img:'images/product/10020.jpg', name:'Yeezy 350 v2 Beluga 2.0', price:9500000},
			{productId:10019, brand:'nike',    img:'images/product/10019.jpg', name:'Air Max 270 Black Pink', price:6250000},
			{productId:10018, brand:'nike',    img:'images/product/10018.jpg', name:'Air max 1 x Parra', price:15549000},
			{productId:10017, brand:'adidas',    img:'images/product/10017.jpg', name:'Human Race China Exclusive Peace', price:10375000},
			{productId:10016, brand:'adidas',    img:'images/product/10016.jpg', name:'YUNG1 Frieza', price:4130000},
			{productId:10015, brand:'gucci',    img:'images/product/10015.jpg', name:'Gucci Fox Sneaker', price:16000000},
			{productId:10014, brand:'gucci',    img:'images/product/10014.jpg', name:'Gucci Stripe Sneaker', price:15099000},
			{productId:10013, brand:'balenciaga',    img:'images/product/10013.jpg', name:'Rick Owens SS17 Low', price:23100000},
			{productId:10012, brand:'balenciaga',    img:'images/product/10012.jpg', name:'Balenciaga Triple S Black', price:21255000},
			{productId:10011, brand:'nike',    img:'images/product/10011.jpg', name:'Air max 1 Box Print', price:2330000},
			{productId:10010, brand:'nike',    img:'images/product/10010.jpg', name:'Nike Element 87 Black', price:5295000},
			{productId:10009, brand:'adidas',    img:'images/product/10009.jpg', name:'Human Race V3 Solar Black', price:12355000},
			{productId:10008, brand:'adidas',    img:'images/product/10008.jpg', name:'Adidas Alpha Bounce Instinct Grey', price:2799000},
			{productId:10007, brand:'gucci',    img:'images/product/10007.jpg', name:'Gucci LOVED', price:15600000},
			{productId:10006, brand:'gucci',    img:'images/product/10006.jpg', name:'Gucci Flame Sneaker', price:17099000},
			{productId:10005, brand:'balenciaga',    img:'images/product/10005.jpg', name:'Balenciaga Triple S White', price:20395000},
			{productId:10004, brand:'balenciaga',    img:'images/product/10004.jpg', name:'Balenciaga Speed Trainer BB', price:17020000},
			{productId:10003, brand:'nike',    img:'images/product/10003.jpg', name:'Nike M2K John', price:2949000},
			{productId:10002, brand:'nike',    img:'images/product/10002.jpg', name:'Nike Pegasus 35 Grey', price:5350000},
			{productId:10001, brand:'adidas',    img:'images/product/10001.jpg', name:'Adidas Prophere Undefeated', price:6599000},
			{productId:10000, brand:'adidas',    img:'images/product/10000.jpg', name:'Adidas Yeezy 350 v2 ‘ Oreo ‘ Rep', price:15000000},	
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}
function showProduct(){
	var url = document.location.href;
	var temp = url.split("?");
	var s='';
	var productArray = JSON.parse(localStorage.getItem('product'));
	if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){
		if(temp[1]=='' || temp[1]==undefined){
			temp = 'all&0';
		}
		else{
			temp = temp[1];
		}
		var temp2 = temp.split("&");
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		for(var i=vitri;i<productArray.length;i++){
			s+='<div class="card">'+
						'<img src="'+productArray[i].img+'">'+
						'<p>' + productArray[i].name + '</p>'+
						'<p> Price: ' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==12)
				break;
		}
		sotrang=Math.ceil(productArray.length/12);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*12;
			var a ='<a href="index.html?all&'+vitri+'">'+i+'</a>';
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		document.getElementById('page').innerHTML=lienket;
	}
	else{
		temp = temp[1];
		var temp2 = temp.split("&");
		var brand = temp2[0];
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		var arrtempt=[];
		for(var i=0; i<productArray.length;i++){
			if(brand==productArray[i].brand)
				arrtempt.push(productArray[i]);
		}
		for(var i=vitri;i<arrtempt.length;i++){
			s+='<div class="card">'+
						'<img src="'+arrtempt[i].img+'">'+
						'<p>' + arrtempt[i].name + '</p>'+
						'<p> Price: ' + currency(arrtempt[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+arrtempt[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==8)
				break;
		}
		sotrang=Math.ceil(arrtempt.length/8);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8;
			var a ='<a href="index.html?'+brand+'&'+vitri+'">'+i+'</a>';
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		document.getElementById('page').innerHTML=lienket;
	}
	document.getElementById('product').innerHTML=s;
}
function showProductInfo(productid){
	document.getElementById('productInfo').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==productid){
			document.getElementById('productname').innerHTML = productArray[i].name;
			document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
			document.getElementById('imgbig').src=productArray[i].img;
			// document.getElementById('size').value = 36;
			document.getElementById('quantity').value = 1;
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart('+productid+')');
		}
	}
}
function closeProductInfo(){

	document.getElementById('productInfo').style.display = 'none';
}
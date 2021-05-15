
var products = [];
var selectedIndex  = -1;

function addProduct() {
    var productName = document.getElementById('product-name').value;
    var productPrice = document.getElementById('product-price').value;
    var productColor = document.getElementById('product-color').value;

    if (productName.trim().length > 0 && productPrice.trim().length > 0) {

        document.getElementById('product-name').value = "";
        document.getElementById('product-price').value = "";
        document.getElementById('product-color').value = "";

        var newProduct = {
            name: productName,
            price: productPrice,
            color: productColor
        }

        if (selectedIndex >= 0){
            products.splice(selectedIndex, 1, newProduct);
            document.getElementById('add').innerHTML = "Add";
            selectedIndex = -1;
        } else {
            products.push(newProduct);
        }

        drawPage();
        // console.log(products);
    } else {
        alert("ILTIMOS, ma'lumotlarni to'ldiring!!!");
    }
}

function editProduct(index) {
    document.getElementById('product-name').value = products[index].name;
    document.getElementById('product-price').value = products[index].price;
    document.getElementById('product-color').value = products[index].color;

    document.getElementById('add').innerHTML = "Edit";

    selectedIndex = index;
}

function deleteCard(index) {
    products.splice(index, 1);
    drawPage();
}
function drawPage() {
    var content = "";

    for (var i = 0; i < products.length; i++) {
        content +=
            "<div class='col-4 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h4>Name: " + products[i].name + "</h4></div>" +
            "<div class='card-body'>" +
            "<p>Price: <b>" + products[i].price + "</b></p>" +
            "<p>Color: <b style='color: " + products[i].color + "'>" + products[i].color + "</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between'>" +
            "<button type='button' class='btn btn-primary' onclick='editProduct(" + i + ")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteCard(" + i + ")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"

    }

    document.getElementById('content').innerHTML = content;
}

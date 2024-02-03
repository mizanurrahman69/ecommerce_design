var product_amount = 10
var header_cart_products = [{
        images_no: 1,
        name: 'MacBook Pro M2 MNEJ3 2022 LLA ',
        price: `433.00`,
    },
    {
        images_no: 2,
        name: 'Inateck 12.3-13 Inch MacBook Case Sleeve ',
        price: `63.26`,
    },
    {
        images_no: 3,
        name: 'laptop privacy screen for 13inc',
        price: `500.00`,
    },
];
var jumbo_manu_product = [{
        image: './assets/images/product/1.jpg',
        name: 'MacBook Pro M2 MNEJ3 2022 LLA ',
        price: `433.00`,
    },
    {
        image: './assets/images/product/2.jpg',
        name: 'Inateck 12.3-13 Inch MacBook Case Sleeve ',
        price: `63.26`,
    },
    {
        image: './assets/images/product/3.jpg',
        name: 'laptop privacy screen for 13inc',
        price: `500.00`,
    },
    {
        image: './assets/images/product/4.jpg',
        name: 'laptop privacy screen for 13inc',
        price: `500.00`,
    },
];


var product_list = [{
        images_no: 1,
        name: 'Iphone 14 promax 256 gig',
        price: `930.90`,
        del_price: `1200`,
        rating: `4.5`,
    },
    {
        images_no: 2,
        name: 'Blackmagic Design Pocket)',
        price: `2535.00`,
        del_price: `3200`,
        rating: `4.8`,
    },
    {
        images_no: 3,
        name: 'SAMSUNG Galaxy S23 Ultra',
        price: `3535.00`,
        del_price: `4200`,
        rating: `4.7`,
    },
    {
        images_no: 1,
        name: 'Iphone 14 promax 256 gig',
        price: `930.90`,
        del_price: `1000`,
        rating: `4.5`,
    },
    {
        images_no: 3,
        name: 'Blackmagic Design Pocket)',
        price: `2535.00`,
        del_price: `3200`,
        rating: `4.8`,
    },
];
var top_categories = [{
        images_no: 1,
        name: 'Accessories',
    },
    {
        images_no: 2,
        name: 'laptop',
    },
    {
        images_no: 3,
        name: 'smart phone',
    },
    {
        images_no: 4,
        name: 'camera',

    },
    {
        images_no: 4,
        name: 'camera',

    },

];





var product_categories = [{
        icon: './assets/images/icons/mobile.svg',
        name: `Mobile Phones`,
    },
    {
        icon: './assets/images/icons/computer.svg',
        name: `Laptops & Computers`,
    },
    {
        icon: './assets/images/icons/mobile.svg',
        name: `Tablets & E-Reader`,
    },
    {
        icon: './assets/images/icons/Audio.svg',
        name: `Audio`,
    },
    {
        icon: './assets/images/icons/Wearables.svg',
        name: `Wearables`,
    },
    {
        icon: './assets/images/icons/Cameras.svg',
        name: `Cameras`,
    },
    {
        icon: './assets/images/icons/Gaming.svg',
        name: `Gaming`,
    },
    {
        icon: './assets/images/icons/Networking.svg',
        name: `Networking`,
    },
    {
        icon: './assets/images/icons/Accessories.svg',
        name: `Accessories`,
    },
];
var sub_categories = [{
        icon: './assets/images/icons/Smart_Phones.svg',
        name: `Smart Phones`,
    },
    {
        icon: './assets/images/icons/Accessories.svg',
        name: `Accessories`,
    },
];

let search_keywords = [
    "Samsung S9",
    "Tablet",
    "Xiaomi",
    "AirPods Pro",
    "MacBook Pro ",
    "Samsung S9",
    "Tablet",
    "Xiaomi",
    "AirPods Pro",
    "MacBook Pro ",
]

function increment_cart(price_target) {
    event.preventDefault();
    let input = event.currentTarget.previousElementSibling;
    input.value = parseInt(input.value) + 1;

    let price = document.getElementById('price_1');
    price.innerText = parseFloat(price.dataset.price) * input.value
}

function decrement_cart(price_target) {
    event.preventDefault();
    let input = event.currentTarget.nextElementSibling;
    input.value = parseInt(input.value) - 1;

    let price = document.getElementById('price_1');
    price.innerText = parseFloat(price.dataset.price) * input.value
}

function change_product_preview_image(target, image_src){
    document.getElementById(target).src = image_src;
}
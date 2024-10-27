const jsonData = [
  { upc: "1111111111", sku: "123", isle: "12", image: "./images/image1.jpg" },
  { upc: "0987654321", sku: "356", isle: "1", image: "./images/image2.jpg" },
  { upc: "1111111111", sku: "789", isle: "1", image: "./images/image3.jpg" },
]

const imageTag = document.getElementById("productImage")
const searchBar = document.getElementById("searchBar")
const searchBar2 = document.getElementById("searchBar2")
const searchButton = document.getElementById("searchButton")
const backButton = document.getElementById("bb")

const productSection = document.getElementById("productSection")
const isleMap = document.getElementById("map")
const skuText = document.getElementById("skuText")
const upcText = document.getElementById("upcText")

let state = 1 //keep track of state because im too lazy to setup react

const hero1 = document.getElementById("hero")
const hero2 = document.getElementById("hero2")

let numberToSearch = ""
let result = searchBySKU(numberToSearch)

function findProduct() {
  let product
  if (state == 1) {
    product = searchBySKU(searchBar.value)
  } else {
    product = searchBySKU(searchBar2.value)
  }
  if (product) {
    state = 2
    hero1.style.display = "none"
    hero2.style.display = "flex"

    productSection.style.display = "flex"
    isleMap.style.display = "flex"
    imageTag.src = product.image
    upcText.innerHTML = "UPC: " + product.upc
    skuText.innerHTML = "SKU: " + product.sku
    document.getElementById("isleText").innerHTML = "Isle: " + product.isle
  } else {
    alert("Inncorrect SKU or UPC")
  }
}

function searchBySKU(sku) {
  return jsonData.find((item) => item.sku === sku)
}

function searchByUPC(upc) {
  return jsonData.find((item) => item.upc === upc)
}

function goBack() {
  state = 1
  hero1.style.display = "flex"
  hero2.style.display = "none"
  productSection.style.display = "none"
  isleMap.style.display = "none"
  upcText.innerHTML = ""
  skuText.innerHTML = ""
  document.getElementById("isleText").innerHTML = ""
  searchBar.value = ""
  searchBar2.value = ""
  imageTag.src = ""
}

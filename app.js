const jsonData = [
  { sku: "280072399", name: "Purina Equine Senior Horse Feed, 50 lb. Bag", isle: "8", image: "./images/280072399.webp" },
  {
    sku: "138590099",
    name: "Nutrena ProForce Textured Senior Horse Feed, 50 lb. Bag",
    isle: "8",
    image: "./images/138590099.webp",
  },
  { sku: "228138299", name: "Nutrena Triumph 14% Senior Horse Feed, 50 lb. Bag", isle: "8", image: "./images/228138299.webp" },
  {
    sku: "512176299",
    name: "Standlee Premium Western Forage Premium Alfalfa Hay Pellet Horse Feed, 40 lb.",
    isle: "8",
    image: "./images/512176299.webp",
  },
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
    skuText.innerHTML = "SKU: " + product.sku
    document.getElementById("isleText").innerHTML = "Isle: " + product.isle
  } else {
    alert("Inncorrect SKU or UPC")
  }
}

function searchBySKU(sku) {
  return jsonData.find((item) => item.sku === sku)
}

function goBack() {
  state = 1
  hero1.style.display = "flex"
  hero2.style.display = "none"
  productSection.style.display = "none"
  isleMap.style.display = "none"
  skuText.innerHTML = ""
  document.getElementById("isleText").innerHTML = ""
  searchBar.value = ""
  searchBar2.value = ""
  imageTag.src = ""
}

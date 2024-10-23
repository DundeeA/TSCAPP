const jsonData = [
  { upc: "1234567890", sku: "123", image: "./images/image1.jpg" },
  { upc: "0987654321", sku: "356", image: "./images/image2.jpg" },
  { upc: "1111111111", sku: "789", image: "./images/image3.jpg" },
]

const imageTag = document.getElementById("productImage")
const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")
const backButton = document.getElementById("bb")

let numberToSearch = ""
let result = searchBySKU(numberToSearch)

function findProduct() {
  let product = searchBySKU(searchBar.value)
  console.log("looking for sku: " + searchBar.value)

  if (product) {
    imageTag.src = product.image
    bb.style.visibility = "visible"
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
  bb.style.visibility = "hidden"
  searchBar.value = ""
  imageTag.src = ""
}

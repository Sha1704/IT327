class Product {
  constructor() {
    let brandIndex = Math.floor(Math.random() * Product.brandName.length);
    let nameIndex = Math.floor(
      Math.random() * Product.brandName[brandIndex].length,
    );
    this.name = Product.brandName[brandIndex][nameIndex];
    let price = Math.floor(Math.random() * 1000) + 100;
    this.price = price;
  }
  displayInfo() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
  getPrice() {
    return this.price;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }
  getName() {
    return this.name;
  }

  static appleProducts = [
    "Airpods",
    "iPhone",
    "iPad",
    "iMac",
    "Macbook",
    "Apple Watch",
    "AirTag",
  ];
  static samsungProducts = [
    "Galaxy S23",
    "Galaxy Tab S8",
    "Galaxy Book 3",
    "Galaxy Watch5",
    "Galaxy Buds2",
  ];
  static amdProducts = [
    "Ryzen 7",
    "Ryzen 9",
    "Radeon 6800XT",
    "Radeon 6900XT",
    "Radeon 5600XT",
    "Radeon 5700XT",
    "Radeon 5800XT",
    "Radeon 5900XT",
  ];
  static intelProducts = ["i7", "i9", "i5"];
  static nvidiaProducts = [
    "RTX 3060",
    "RTX 3070",
    "RTX 3080",
    "RTX 3090",
    "RTX 4090",
    "RTX 4080",
    "RTX 4070",
    "RTX 4060",
    "RTX 5090",
    "RTX 5080",
  ];
  static brandName = [
    Product.appleProducts,
    Product.samsungProducts,
    Product.amdProducts,
    Product.intelProducts,
    Product.nvidiaProducts,
  ];
}
export default Product;

export function fetchAllProducts() {
  // Todo : We Will Hard Code Server URL Here
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters(filter) {
  // filter = {"category": "smartphones"}

  let queryString = '';
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchAllProducts() {
  // Todo : We Will Hard Code Server URL Here
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({ data })
  }
  );
}

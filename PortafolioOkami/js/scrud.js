// Datos iniciales
let products = [];

// Renderizar la tabla
function renderTable() {
  const tableBody = document.getElementById("crudTableBody");
  tableBody.innerHTML = ""; // Limpiar tabla
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${product.image}" alt="Producto ${index + 1}" /></td>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>
        <button class="crud-button edit-button" onclick="editProduct(${index})">Editar</button>
        <button class="crud-button delete-button" onclick="deleteProduct(${index})">Eliminar</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Agregar o editar productos
document.getElementById("crudForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const imageInput = document.getElementById("productImage");
  const name = document.getElementById("productName").value;
  const description = document.getElementById("productDescription").value;

  // Obtener URL de la imagen subida
  const image = imageInput.files[0]
    ? URL.createObjectURL(imageInput.files[0])
    : "default-image.jpg"; // Imagen por defecto

  // Agregar nuevo producto
  products.push({ image, name, description });
  renderTable();
  this.reset(); // Limpiar formulario
});

// Editar producto
function editProduct(index) {
  const product = products[index];
  document.getElementById("productName").value = product.name;
  document.getElementById("productDescription").value = product.description;
  document.getElementById("formTitle").textContent = "Editar Producto";
  document.getElementById("crudForm").onsubmit = function (event) {
    event.preventDefault();
    product.name = document.getElementById("productName").value;
    product.description = document.getElementById("productDescription").value;
    renderTable();
    this.reset();
    document.getElementById("formTitle").textContent = "Agregar Producto";
  };
}

// Eliminar producto
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

// Inicializar tabla
renderTable();

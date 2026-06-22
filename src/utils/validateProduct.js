export const validateProduct = (product) => {
  if (!product.nombre || product.nombre.trim() === "") return false;
  if (!product.precio || Number(product.precio) <= 0) return false;
  if (!product.img || product.img.trim() === "") return false;
  return true;
};
const IMGBB_API_KEY = "7525b8084cbc050e479e38e5e3dc85eb"; 
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url; // Retorna la URL pública para usar en la app
  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};
import { atom } from 'nanostores';

// Función para obtener el tema inicial desde localStorage
function getInitialTheme() {
  // Solo acceder a localStorage si estamos en el navegador
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem("theme");
    console.log("📦 Tema guardado en localStorage:", savedTheme);
    return savedTheme === "dark" ? true : false;
  }
  return false; // Por defecto, tema light
}

// Crear el store para el tema
export const themeStore = atom(getInitialTheme());

// Función para cambiar el tema
export const toggleTheme = () => {
  // Obtener el tema actual desde el store
  const currentTheme = themeStore.get();

  // Alternar el valor del tema
  const newTheme = !currentTheme;

  // Guardar el nuevo tema en localStorage
  const themeValue = newTheme ? "dark" : "light";
  localStorage.setItem("theme", themeValue);

  // Actualizar el store con el nuevo valor
  themeStore.set(newTheme);

  // Mostrar el valor en consola para depuración
  console.log(`🎨 Nuevo tema guardado: ${themeValue} (isDark: ${newTheme})`);
};

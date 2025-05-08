import { toggleSideBar } from "@/sideBarStore";
import { useEffect, useState } from "react";

const SideMenuItems = ({ href, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px es el breakpoint de md en Tailwind
    };

    // Verificar al montar el componente
    checkIfMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const handleClick = () => {
    if (isMobile) {
      toggleSideBar();
    }
  };

  return (
    <li className="list-none group">
      <a
        onClick={handleClick}
        href={href}
        className="flex gap-4 group-hover:pl-2 transform transition-all group-hover:bg-slate-100 dark:group-hover:bg-gray-800 text-paragraph-light dark:text-paragraph-dark items-center py-2.5 px-5 font-medium"
      >
        {children}
      </a>
    </li>
  );
};

export default SideMenuItems;

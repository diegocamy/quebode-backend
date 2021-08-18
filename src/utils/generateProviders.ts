import { Proveedor } from "../interfaces";

const proveedores = [
  "cuevana3.io",
  "pelisflix.li",
  "pelisgratishd.com",
  "pelisgratis.nu",
  "repelis24.co",
  "repelisplus.io",
  "pelisplushd.net",
  "yts.mx",
];

export const generateProviders = (
  name: string,
  original_name: string
): Proveedor[] => {
  const nameArray = name.split(" ");
  const originalNameArray = original_name.split(" ");
  const providers = proveedores.map((p, i) => {
    if (i === 5) {
      return {
        nombre: p,
        enlace: `https://${p}/buscar/${nameArray.join("%20")}`,
      };
    }

    if (i === 6) {
      return {
        nombre: p,
        enlace: `https://${p}/search?s=${nameArray.join("+")}`,
      };
    }

    if (i === 7) {
      return {
        nombre: p,
        enlace: `https://${p}/browse-movies/${originalNameArray.join(
          "%20"
        )}/all/all/0/latest/0/all`,
      };
    }

    return {
      nombre: p,
      enlace: `https://${p}/?s=${nameArray.join("+")}`,
    };
  });

  return providers;
};

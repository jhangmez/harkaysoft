// @/types/proyectos.ts

export interface Proyecto {
  id: number;
  url: string;
  nombre: string;
  imagen_banner: string;
  imagen_perfil: string;
  caracteristicas: string[];
  descripcion: string;
  link: string;
  esNuevo?: boolean;
}

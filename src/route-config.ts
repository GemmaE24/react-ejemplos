
import Certificaciones from "./Certificaciones/Certificaciones";
import Contacto from "./Contacto/Contacto";
import Cursos from "./Cursos/Cursos";
import Indice from "./Inicio/inicio";
import Proyectos from "./Proyectos/Proyacto";
import Renta from "./Renta/Renta";
import Soporte from "./Soporte/Soporte";
import Ventas from "./Ventas/Ventas"

const rutas = [

    {path: '/Inicio', componente: Indice, exact: true},
    {path: '/Ventas', componente: Ventas, exact: true},
    {path: '/Renta', componente: Renta, exact: true},
    {path: '/Cursos', componente: Cursos, exact: true},
    {path: '/Certificaciones', componente: Certificaciones, exact: true},
    {path: '/Soporte', componente: Soporte, exact: true},
    {path: '/Proyectos', componente: Proyectos, exact: true},
    {path: '/Contacto', componente: Contacto , exact: true},
   
]

export default rutas;
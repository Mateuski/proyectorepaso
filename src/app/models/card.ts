/*
    MODELO = plantilla que representa a un tipo de objeto, compartiendo
    caracteristicas generales y similares

    INSTANCIAS: copia de la CLASE o MODELO del objeto, que tenia definido
    sus propias caracteristicas

    Ej: Persona -> trabajador, estudiante, veterinario
    Ej: Animal -> perro, gato, caballo

    INTERFACES (concepto del lenguaje TYPESCRIPT) =
    MODELO / CLASE (concepto de programacion orientada a objetos)

*/

export interface Card {
    card: string; //alfanumerico, numerico, booleano
    titulo: string;
    descripcion: string;
    imagen: string;
    alt: string;
}

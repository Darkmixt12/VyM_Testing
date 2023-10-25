export interface Trabajador {
	nombre: string;
	edad : number;
	cedula: number;
	telefono: number;
	direccion: Direccion;
	correo: string;
	estado_civil: string
	tel_emergencia: number;
	nom_emergencia: string;
		
}

export interface Direccion {
	provincia: string;
	canton: string;
	distrito: string;

}
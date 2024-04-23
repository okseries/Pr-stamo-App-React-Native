export interface Cliente {
  idCliente: number;
  identificacion: string;
  primerNombre: string;
  segundoNombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  correo: string;
  direccion: string;
  ingresos: number;
  dondeLabora: string;
  deleted: number;
  idSucursal: number;
  createdAt: string;
  updatedAt: string;
}





export const Clientes: Cliente[] = [
    {
      "idCliente": 7,
      "identificacion": "074-0005249-9",
      "primerNombre": "Malfry",
      "segundoNombre": "Natanael",
      "apellidoPaterno": "Pérez",
      "apellidoMaterno": "Rodríguez",
      "telefono": "8298069017",
      "correo": "malfryrd@gmail.com",
      "direccion": "Colinas del Río",
      "ingresos": 3000.00,
      "dondeLabora": "Ars Futuro",
      "deleted": 0,
      "idSucursal": 2,
      "createdAt": "2024-04-16 09:41:28",
      "updatedAt": "2024-04-16 09:41:28"
    },
    {
      "idCliente": 8,
      "identificacion": "075-0005249-9",
      "primerNombre": "Juan",
      "segundoNombre": "Carlos",
      "apellidoPaterno": "Gómez",
      "apellidoMaterno": "",
      "telefono": "8091234567",
      "correo": "juancgomez@gmail.com",
      "direccion": "Los Almendros",
      "ingresos": 2500.00,
      "dondeLabora": "IngeniaTech",
      "deleted": 0,
      "idSucursal": 1,
      "createdAt": "2024-04-16 10:15:42",
      "updatedAt": "2024-04-16 10:15:42"
    },
    {
      "idCliente": 9,
      "identificacion": "076-0005249-9",
      "primerNombre": "María",
      "segundoNombre": "",
      "apellidoPaterno": "Santana",
      "apellidoMaterno": "Martínez",
      "telefono": "8299876543",
      "correo": "mariaisantana@gmail.com",
      "direccion": "Villa Real",
      "ingresos": 4000.00,
      "dondeLabora": "MediCare",
      "deleted": 0,
      "idSucursal": 3,
      "createdAt": "2024-04-16 11:30:15",
      "updatedAt": "2024-04-16 11:30:15"
    },
    {
      "idCliente": 10,
      "identificacion": "077-0005249-9",
      "primerNombre": "Luis",
      "segundoNombre": "",
      "apellidoPaterno": "González",
      "apellidoMaterno": "",
      "telefono": "8096543210",
      "correo": "luisagf@gmail.com",
      "direccion": "El Paraíso",
      "ingresos": 3200.00,
      "dondeLabora": "Construcciones Modernas",
      "deleted": 0,
      "idSucursal": 2,
      "createdAt": "2024-04-16 12:20:55",
      "updatedAt": "2024-04-16 12:20:55"
    },
    {
      "idCliente": 11,
      "identificacion": "078-0005249-9",
      "primerNombre": "Ana",
      "segundoNombre": "Carolina",
      "apellidoPaterno": "Hernández",
      "apellidoMaterno": "",
      "telefono": "8096789012",
      "correo": "anachernandez@gmail.com",
      "direccion": "Los Jardines",
      "ingresos": 2800.00,
      "dondeLabora": "Global Solutions",
      "deleted": 0,
      "idSucursal": 1,
      "createdAt": "2024-04-16 13:45:30",
      "updatedAt": "2024-04-16 13:45:30"
    },
    {
      "idCliente": 12,
      "identificacion": "079-0005249-9",
      "primerNombre": "Pedro",
      "segundoNombre": "José",
      "apellidoPaterno": "Martínez",
      "apellidoMaterno": "Díaz",
      "telefono": "8294567890",
      "correo": "pedrojmartinez@gmail.com",
      "direccion": "El Vergel",
      "ingresos": 3500.00,
      "dondeLabora": "TechZone",
      "deleted": 0,
      "idSucursal": 3,
      "createdAt": "2024-04-16 14:55:20",
      "updatedAt": "2024-04-16 14:55:20"
    },
    {
      "idCliente": 13,
      "identificacion": "080-0005249-9",
      "primerNombre": "Sofía",
      "segundoNombre": "Alejandra",
      "apellidoPaterno": "Ramírez",
      "apellidoMaterno": "Gómez",
      "telefono": "8092345678",
      "correo": "sofiargomez@gmail.com",
      "direccion": "Las Colinas",
      "ingresos": 2900.00,
      "dondeLabora": "SmartSolutions",
      "deleted": 0,
      "idSucursal": 2,
      "createdAt": "2024-04-16 15:10:10",
      "updatedAt": "2024-04-16 15:10:10"
    },
    {
      "idCliente": 14,
      "identificacion": "081-0005249-9",
      "primerNombre": "Javier",
      "segundoNombre": "Andrés",
      "apellidoPaterno": "Fernández",
      "apellidoMaterno": "Santana",
      "telefono": "8098765432",
      "correo": "javierafsantana@gmail.com",
      "direccion": "La Esperanza",
      "ingresos": 3800.00,
      "dondeLabora": "InnovaTech",
      "deleted": 0,
      "idSucursal": 1,
      "createdAt": "2024-04-16 16:25:45",
      "updatedAt": "2024-04-16 16:25:45"
    },
    {
      "idCliente": 15,
      "identificacion": "082-0005249-9",
      "primerNombre": "Carolina",
      "segundoNombre": "Gabriela",
      "apellidoPaterno": "López",
      "apellidoMaterno": "Martínez",
      "telefono": "8293456789",
      "correo": "carolinagmartinez@gmail.com",
      "direccion": "Los Pinos",
      "ingresos": 4100.00,
      "dondeLabora": "BioTech",
      "deleted": 0,
      "idSucursal": 3,
      "createdAt": "2024-04-16 17:40:55",
      "updatedAt": "2024-04-16 17:40:55"
    },
    {
      "idCliente": 16,
      "identificacion": "083-0005249-9",
      "primerNombre": "Andrés",
      "segundoNombre": "Felipe",
      "apellidoPaterno": "Gómez",
      "apellidoMaterno": "Hernández",
      "telefono": "8095678901",
      "correo": "andresfhernandez@gmail.com",
      "direccion": "La Arboleda",
      "ingresos": 3200.00,
      "dondeLabora": "TechWorld",
      "deleted": 0,
      "idSucursal": 2,
      "createdAt": "2024-04-16 18:55:30",
      "updatedAt": "2024-04-16 18:55:30"
    }
  ]
  
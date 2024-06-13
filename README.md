### COCINA
__Objetivo de la Aplicación__
Controlar alérgenos y la trazabilidad de ingredientes de recetas y menús en un comedor colectivo, incluyendo gestión de inventario, creación de recetas y menús personalizados, y acceso a información para usuarios finales (invitados).

__Parámetros de diseño__
- __Base de datos__: La base de datos debe estar integrada dentro del archivo HTML utilizando SQLite para evitar crear un backend con API.

- __Estilo__: Los estilos deben estar descritos en una única página de código compartida entre todos los módulos de la web app. El diseño UX debe ser atractivo y responsive, similar a aplicaciones como Robinhood o Coinbase, priorizando el uso en dispositivos móviles como teléfonos y tabletas. El diseño debe priorizar la sencillez gráfica y la funcionalidad.

- __Nomenclatura__: Se deben usar los nombres de los campos de las tablas al referirse a estas en el código.


__MÓDULOS__

__Almacén__:
- Alta de ingredientes con información del fabricante, foto de factura/etiqueta, cantidad, fecha de caducidad y alérgenos.
- Consulta de stock de ingredientes.
- Recepción y registro de pedidos de ingredientes.
- Gestión de proveedores.

__Administración__:
- Creación de recetas con ingredientes y subrecetas indicando versiones, alérgenos y secuencia de tareas a seguir para su elaboración.
- Agrupación de recetas en menús diarios, semanales y cíclicos.
- Programación de menús en un calendario considerando restricciones dietéticas y eventos especiales.
- Consulta de menús programados y generación de informes.
- Gestión de usuarios y permisos.

__Cocina__:
- Consulta de menús diarios y selección de versión de receta a preparar.
- Posibilidad de sustituir ingredientes si es necesario registrando el motivo del cambio.
- Validación de la preparación de los alimentos según las recetas y alérgenos.
- Registro de mermas y desperdicios.

__Invitados__:
- Consulta del menú semanal mediante código QR o aplicación móvil, incluyendo alérgenos.


__ESQUEMA DE LA BASE DE DATOS__

__Usuarios__:
- UsuarioID (Clave primaria)
- NombreUsuario
- ContraseñaUsuario
- ResponsabilidadUsuario (Almacén, Administración, Cocina, Invitado)

__Artículos__:
- ArticuloID (Clave primaria)
- NombreArticulo
- FabricanteArticulo
- UnidadMedidaArticulo
- CantidadArticulo
- FechaCaducidadArticulo
- FechaCreacionArticulo
- AlergenoID (Clave foránea)

__Alergenos__:
- AlergenoID (Clave primaria)
- NombreAlergeno
- IconoAlergeno

__Alergenos_Articulo__:
- AlergenosArticuloID (Clave primaria)
- ArticuloID (Clave foránea)
- AlergenoID (Clave foránea)

__Subrecetas__:
- SubrecetaID (Clave primaria)
- NombreSubreceta
- Descripción

__Recetas__:
- RecetaID (Clave primaria)
- NombreReceta
- DescripciónReceta
- FechaCreacion
- ValorNutricional

__Ingredientes_Receta__:
- IngredientID (Clave primaria)
- RecetaID (Clave foránea)
- ArtículoID (Clave foránea)
- UnidadMedidaIngredientesReceta
- CantidadIngredienteIngredientesReceta
- FotoFacturaEtiquetaIngredientesReceta

__Pasos_Receta__:
- PasoID (Clave primaria)
- RecetaID (Clave foránea)
- NumeroPaso
- DescripcionPaso
- RiesgosPaso
- MetodosControlPaso
- ImagenPaso (Opcional)

__Menús__:
- MenúID (Clave primaria)
- Fecha
- RecetaID (Clave foránea)
- VersiónReceta
- UsuarioCreacion (Clave foránea)
- FechaCreacionReceta

__Proveedores__:
- ProveedorID (Clave primaria)
- NombreProveedor
- DireccionProveedor

__Pedidos__:
- PedidoID (Clave primaria)
- FechaPedido
- ProveedorID (Clave foránea)
- Estado (Pendiente, Enviado, Recibido)

 __Pedidos_Ingredientes__:
- PedidoID (Clave foránea)
- IngredientID (Clave foránea)
- CantidadSolicitada
- CantidadRecibida

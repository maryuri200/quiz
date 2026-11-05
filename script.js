// 1. DATOS DE ENTRADA
let entrada_nombre = "MaRYuRi pRiEtO";
let entrada_correo ="maryuri7PRIETO@gmail.com";
let entrada_edad =19;
let entrada_codigo_promo = "DESC-2026-X";

// Limpiar y formatear el nombre
let nombre_limpio = entrada_nombre.trim().toLowerCase();

let nombre_formateado = nombre_limpio
.split(" ")
.filter(palabra => palabra !== "")
.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
.join(" ");

// Convertir correo a minúsculas
let correo_limpio = entrada_correo.toLowerCase();

// Validar correo
let correo_valido = correo_limpio.includes("@") && correo_limpio.endsWith(".com");

// Validar código promocional
let codigo_valido = entrada_codigo_promo.startsWith("DESC-");

// Extraer el año del cupón
let año_cupon = parseInt(entrada_codigo_promo.split("-")[1]);


// 3. CONVERSIÓN DE TIPOS DE DATOS
let edad = parseInt(entrada_edad);

// 4. OPERADORES

// Verificar mayoría de edad
let mayor_edad = edad >= 18;

// Calcular año aproximado de nacimiento
let año_nacimiento = 2026 - edad;

// Asignar puntos promocionales
let puntos = (mayor_edad && codigo_valido && año_cupon === 2026)
? 10.5
: 0.0;

//5. MOSTRAR RESULTADOS EN CONSOLA
console.log("==================================================");
console.log("        FICHA DE USUARIO PROCESADA");
console.log("==================================================");

console.log("Nombre Formateado    :", nombre_formateado);
console.log("Correo Validado      :", correo_limpio);
console.log("¿Correo Válido?      :", correo_valido);
console.log("Edad Registrada      :", edad, "(Tipo:", typeof edad + ")");
console.log("¿Mayor de Edad?      :", mayor_edad);
console.log("Año Estimado Nto.    :", año_nacimiento);
console.log("Código Cupón Válido  :", codigo_valido);
console.log("Puntos Asignados     :", puntos);

console.log("==================================================");

// PRECIOS.JS - Fuente unica de precios para todos los cotizadores Neobind
// Para actualizar un precio: cambia el numero aca y se actualiza en todos.
// Ultima actualizacion: 09/10/2026

const PRECIOS = {
financiero: {
comisionUala: 0.0184,
cuotas3: 0.1269,
cuotas12: 0.3907
},
rendimientos: {
cemenpoxM2PorBolsa: 6.5,
cementoBlancoM2PorBolsa: 25
},
consumidorFinal: {
venecita: 21980,
cemenpox: 37000,
cementoBlanco: 44500
},
comercio1: {
distri105: { nombre: "DISTRI 10.5", venecita: 17000, cemenpox: 28000, cementoBlanco: 32000 }
},
comercio2: {
venecita: 18755,
cemenpox: 33880,
cementoBlanco: 38720
},
distribuidorDefault: {
venecita: 21980,
materiales: 8400,
colocacion: 30000
},
paraguay: {
// Cuantos guaranies vale 1 peso argentino. ACTUALIZAR cuando cambie el tipo de cambio.
cotizacionGsPorArs: 3.7646,
// Recargo sobre el precio convertido (fletes y demas). 0.30 = 30%. Solo afecta a los precios por defecto.
recargo: 0.30,
// Se redondea al multiplo de este numero (1000 = al millar de guaranies)
redondeo: 1000
}
};

function precioCuotas(base, tasaFinanciera) {
const f = PRECIOS.financiero.comisionUala + tasaFinanciera;
const exacto = base / (1 - f);
return Math.round(exacto / 50) * 50;
}

// Convierte un precio en pesos argentinos a guaranies con la cotizacion y el recargo de arriba
function precioGs(precioArs) {
const r = PRECIOS.paraguay.redondeo;
return Math.round(precioArs * PRECIOS.paraguay.cotizacionGsPorArs * (1 + PRECIOS.paraguay.recargo) / r) * r;
}

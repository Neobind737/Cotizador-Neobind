// PRECIOS.JS - Fuente unica de precios para todos los cotizadores Neobind
// Para actualizar un precio: cambia el numero aca y se actualiza en todos.
// Ultima actualizacion: 29/10/2026 (nuevas tasas de cuotas de Mercado Pago)

const PRECIOS = {
financiero: {
// Recargo sobre el precio de transferencia para pagar en cuotas con cualquier tarjeta. 0.11 = 11%.
// Referencia (29/10/2026): para cubrir Mercado Pago + IVA + 2% de cobro con tarjeta hacia falta
// 10,5% en 3 cuotas (tasa MP 6,20%) y 34,4% en 12 cuotas (tasa MP 19,50%). Si MP cambia las tasas, revisar.
recargo3: 0.11,
recargo12: 0.35,
// 18 cuotas: dejar en null para que NO aparezca. Para mostrarla, poner el recargo (ej: 0.58).
recargo18: null,
// Promo de la tarjeta de credito Mercado Pago: 3 cuotas sin interes pagando con QR,
// al MISMO precio que por transferencia. Si la promo termina, poner activa: false.
promoTarjetaMP: { activa: true, cuotas: 3, montoMinimo: 150000 }
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

// Precio en cuotas: precio de transferencia + recargo, redondeado a $50.
function precioCuotas(base, recargo) {
return Math.round(base * (1 + recargo) / 50) * 50;
}

// Convierte un precio en pesos argentinos a guaranies con la cotizacion y el recargo de arriba
function precioGs(precioArs) {
const r = PRECIOS.paraguay.redondeo;
return Math.round(precioArs * PRECIOS.paraguay.cotizacionGsPorArs * (1 + PRECIOS.paraguay.recargo) / r) * r;
}

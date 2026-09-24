// PRECIOS.JS - Fuente unica de precios para todos los cotizadores Neobind
// Para actualizar un precio: cambia el numero aca y se actualiza en todos.
// Ultima actualizacion: 24/09/2026

const PRECIOS = {
financiero: {
comisionUala: 0.049,
cuotas3: 0.08,
cuotas12: 0.29
},
rendimientos: {
cemenpoxM2PorBolsa: 6.5,
cementoBlancoM2PorBolsa: 25
},
consumidorFinal: {
venecita: 20980,
cemenpox: 37000,
cementoBlanco: 38000
},
comercio1: {
distri105: { nombre: "DISTRI 10.5", venecita: 16000, cemenpox: 28000, cementoBlanco: 32000 }
},
comercio2: {
venecita: 17545,
cemenpox: 33880,
cementoBlanco: 38720
},
distribuidorDefault: {
venecita: 20980,
materiales: 8400,
colocacion: 30000
}
};

function precioCuotas(base, tasaFinanciera) {
const f = PRECIOS.financiero.comisionUala + tasaFinanciera;
const exacto = base / (1 - f);
return Math.round(exacto / 50) * 50;
}

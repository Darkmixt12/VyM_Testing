export class Factura {
    constructor(
        public _id: String,
        public numPedido: number,
        public facturasId: number,
        public client: String,
        public fechaReg: String,
        public pushMoney: String,
        public nomAlistador: String | null,
        public nomChequeador: String | null,
        public fechaAlistado: String,
        public fechaChequeo: String,
        public numMesa: String,
        public horaChequeo: String,
        public agente: String,
        public push1000: String,
        public push500: String,
        public push100: String,
        public push50: String,
        public push5000: string,

    ){}
}


export class ViagemModel {
    _id: string;
    dataViagem: Date;
    motorista: string;
    cliente: string;
    destinatario: string;
    notaFiscal: string;
    produto: string;
    pesoCarga: number;
    kmInicial: number;
    kmFinal: number;
    quantidadeLitros: number;
    abastecimento: [{
        dataAbast: string,
        cidadeAbast: string,
        litrosAbast: number,
        precoLitro: number
    }]
}

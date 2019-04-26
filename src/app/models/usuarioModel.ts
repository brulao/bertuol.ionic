export class UsuarioModel {
    nome: string;
    email: string;
    senha: string;
    senhaConfirmacao: string;
}

/* nome: { type: String, required: true, trim: true, index: true },
email: { type: String, required: true },
senha: { type: String, required: true },
ativo: { type: Boolean, required: true },
administrador: { type: Boolean, required: true },
 */
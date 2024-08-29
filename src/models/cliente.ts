class Cliente {
    constructor(
        public id: number | null,
        public nome: string,
        public cpf: string, 
        public dataNascimento: Date,
        public email: string
    ) {}
}

export default Cliente;
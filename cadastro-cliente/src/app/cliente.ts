export class Cliente {
    Nome: string = "";
    CPF: string = "";
    CEP: string = "";
    Endereco: string = "";
    Bairro: string = "";
    Cidade: string = "";
    UF: string = "";

    CPFValido(): boolean {
        if (this.CPF == null) {
            return false;
        }
        if (this.CPF.length != 11) {
            return false;
        }
        // tslint:disable-next-line:max-line-length
        if ((this.CPF == '00000000000') || (this.CPF == '11111111111') || (this.CPF == '22222222222')
            || (this.CPF == '33333333333') || (this.CPF == '44444444444') || (this.CPF == '55555555555')
            || (this.CPF == '66666666666') || (this.CPF == '77777777777') || (this.CPF == '88888888888')
            || (this.CPF == '99999999999')) {
            return false;
        }


        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = this.CPF.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (this.CPF != cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }
}
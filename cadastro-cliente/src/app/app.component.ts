import { Component } from '@angular/core';
import { Cliente } from './cliente'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-cliente';
  cliente: Cliente = new Cliente();

  constructor(private http: HttpClient) {
  }
  
  VerificaCEP() {
    this.http.get(`https://viacep.com.br/ws/${this.cliente.CEP}/json/`).toPromise().then(
      data => {
        const dado: any = data;
        this.cliente.Endereco = dado.logradouro;
        this.cliente.Bairro = dado.bairro;
        this.cliente.Cidade = dado.localidade;
        this.cliente.UF = dado.uf;
      }
    );
  }

  salvar() {
    console.log(this.cliente);
  }
}

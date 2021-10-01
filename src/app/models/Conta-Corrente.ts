import { Data } from "@angular/router";

export interface ContaCorrente {
  _id?: number;
  nome: string;
  saldo: DoubleRange;
  ativo: boolean;
  data: Date;

}
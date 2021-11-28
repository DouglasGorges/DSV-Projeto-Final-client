import { Categoria } from './Categoria';
import { ContaCorrente } from './Conta-Corrente';
import { StatusTransacao } from "./StatusTransacao";

export interface FiltroPesquisa {
  contaCorrente?: ContaCorrente;
  listaCategorias?: Categoria[];
  statusTransacao?: StatusTransacao;
  dtVctoInicial?: Date;
  dtVctoFinal?: Date;
  dtPgtoInicial?: Date;
  dtPgtoFinal?: Date;
}
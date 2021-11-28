import { ContaCorrente } from 'src/app/models/Conta-Corrente';
import { Categoria } from './Categoria';

export interface Transacao {
  id?: number;
  descricao: string;
  contaCorrente: ContaCorrente;
  categorias: Categoria[];
  valor?: number;
  dataVencimento: Date;
  dataPagamento: Date;
  criadoEm: Date;
}
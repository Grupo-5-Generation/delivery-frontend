import type Categoria from './Categoria';
import type Usuario from './Usuario';

export default interface Postagem {
  id: number;
  nome: string;
  quantidade: number;
  precoAnterior: number;
  desconto: number;
  precoAtual: number;
  status: boolean;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
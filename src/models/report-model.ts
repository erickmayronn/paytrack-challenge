import { User } from './user-model';

export interface Report {
  quantidade: number;
  inicio_execucao: string;
  fim_execucao: string | null;
  usuarios_adicionados: number;
  atualizados: number;
  usuarios_atualizados: User[];
  ignorados: number;
  usuarios_ignorados: User[];
  errors: Error[];
}

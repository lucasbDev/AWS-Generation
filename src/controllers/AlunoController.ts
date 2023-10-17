import { Request, Response } from 'express';
import { listarAlunos, criar, atualizar, deletar, getAlunoById } from '../model/Aluno';

export async function listar(req: Request, res: Response) {
  const alunos = await listarAlunos();

  res.json(alunos);
}

export async function criarAluno(req: Request, res: Response) {
  const { nome, idade, nota_1, nota_2, nome_professor, numero_sala } = req.body;

  const aluno = await criar({
    nome,
    idade,
    nome_professor,
    nota_1,
    nota_2,
    numero_sala
  });

  res.json(aluno);
}

export async function atualizarAluno(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, idade, nota_1, nota_2, nome_professor, numero_sala } = req.body;

  const aluno = await atualizar(id, {
    nome,
    idade,
    nota_1,
    nota_2,
    nome_professor,
    numero_sala
  });

  if (!aluno) {
    return res.status(404).json({ error: 'aluno não encontrado' });
  }

  res.json(aluno);
}

export async function deletarAluno(req: Request, res: Response) {
  const { id } = req.params;

  await deletar(id);

  res.sendStatus(204);
}

export async function GetAlunoById(req: Request, res: Response) {
  const { id } = req.params;

  const aluno = await getAlunoById(id);

  if (!aluno) {
    return res.status(404).json({ error: 'aluno não encontrado' });
  }

  res.json(aluno);
}







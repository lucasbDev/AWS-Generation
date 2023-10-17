import { Prisma, PrismaClient, Aluno } from '@prisma/client';


const prisma = new PrismaClient();

export async function listarAlunos(): Promise<Aluno[]>{
  const aluno = await prisma.aluno.findMany({});
  return aluno
}

export async function criar(data: Prisma.AlunoCreateInput): Promise<Aluno> {
  const aluno = await prisma.aluno.create({data});
  return aluno;
}

export async function atualizar(
  id: string,
  data: Prisma.AlunoUpdateInput
): Promise<Aluno | null> {
  const aluno = await prisma.aluno.update({ where: { id }, data });
  return aluno;
}

export async function deletar(id: string): Promise<void> {
  await prisma.aluno.delete({ where: { id } });
}

export async function getAlunoById(id: string): Promise<Aluno | null> {
  const aluno = await prisma.aluno.findUnique({
    where: { id },
  });

  return aluno;
}
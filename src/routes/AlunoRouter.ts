import { Router } from 'express';
import { listar, criarAluno, atualizarAluno, deletarAluno, GetAlunoById } from '../controllers/AlunoController';

const router = Router();

router.get('/alunos', listar);
router.get('/alunos/:id', GetAlunoById);
router.post('/alunos', criarAluno);
router.put('/alunos/:id', atualizarAluno);
router.delete('/alunos/:id', deletarAluno);

export default router;
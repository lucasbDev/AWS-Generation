import express from 'express';
import cors from 'cors';
import alunoRoutes from './routes/AlunoRouter';

import * as dotenv from 'dotenv';


dotenv.config(); 

const app = express();

app.use(express.json());

app.use(cors());

app.use(alunoRoutes);

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
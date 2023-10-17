import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'
import alunoRoutes from './routes/AlunoRouter';
import * as dotenv from 'dotenv';



dotenv.config(); 

const app = express();


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(express.json());

app.use(cors());

app.use(alunoRoutes);

app.listen(3000, () => {
  console.log('Servidor executado na porta 3000');
});
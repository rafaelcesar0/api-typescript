import { Router } from 'express';
// import { StatusCodes } from 'http-status-codes';
import { CidadesControler } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Hello DEV!');
});

router.post(
  '/cidades',
  CidadesControler.createBodyValidator,
  CidadesControler.createQueryValidator,
  CidadesControler.create
);

export { router };

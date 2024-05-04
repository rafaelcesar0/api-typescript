import { Router } from 'express';
// import { StatusCodes } from 'http-status-codes';
import { CidadesControler } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Hello DEV!');
});

router.get(
  '/cidades',
  CidadesControler.getAllValidation,
  CidadesControler.getAll
);
router.post(
  '/cidades',
  CidadesControler.createValidation,
  CidadesControler.create
);
router.get(
  '/cidades/:id',
  CidadesControler.getByIdValidation,
  CidadesControler.getById
);
router.put(
  '/cidades/:id',
  CidadesControler.updateByIdValidation,
  CidadesControler.updateById
);
router.delete(
  '/cidades/:id',
  CidadesControler.deleteByIdValidation,
  CidadesControler.deleteById
);

export { router };

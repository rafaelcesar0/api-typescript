import { server } from './server/Server';

const PORT = process.env.PORT || 3000;
server.listen(PORT     , () => {
  console.clear();
  console.log(`Listening on http://localhost:${PORT} ...`);
});

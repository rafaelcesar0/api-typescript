import { server } from './server/Server';

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.clear();
  console.log(`Listening on http://localhost:${port} ...`);
});

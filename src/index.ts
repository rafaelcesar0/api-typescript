import { server } from './server/Server';

server.listen(process.env.PORT || 3333, () => {
  // console.clear();
  console.log(`Listening on http://localhost:${process.env.PORT || 3333}`);
});

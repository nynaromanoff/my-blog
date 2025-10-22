// import { JsonPostRepository } from '@/repositories/json-post-repository';
// import { drizzelDB } from '.';
// import { postsTable } from './schemas';

// (async () => {
//   const jsonPostRepository = new JsonPostRepository();
//   const posts = await jsonPostRepository.findAll();

//   try {
//     await drizzelDB.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
//     await drizzelDB.insert(postsTable).values(posts);

//     console.log();
//     console.log(`${posts.length} posts foram salvos na base de dados.`);
//     console.log();
//   } catch (e) {
//     console.log();
//     console.log('Ocorreu um erro...');
//     console.log();
//     console.log(e);
//     console.log();
//   }
// })();
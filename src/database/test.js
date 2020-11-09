const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela

  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6855874",
    name: "Lar d0s menin0s",
    about:
      "Presta assistencia a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "1111111",
    images: [
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",

      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    ].toString(),
    instructions:
      "venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours: "horario de visitas da s18 até as 8h",
    open_on_weekends: "1",
  });

  //consultar dados da tabela
  const selecterOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selecterOrphanages);

  //    Consultar somente 1 orphanato pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage);

  //deletar dado da tabela
  await db.run("DELETE FROM orphanages WHERE id ='5'");
});

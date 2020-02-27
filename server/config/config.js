// =====================
//   PUERTO
// =====================

process.env.PORT = process.env.PORT || 3000;


// =====================
//   ENTORNO
// =====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

// =====================
//   BD
// =====================

let urlBD;

if( process.env.NODE_ENV === 'dev') {
      urlBD = 'mongodb://localhost:27017/cafe';
}else{
      urlBD = 'mongodb+srv://coffeedb:coffee789@cafe-573gh.mongodb.net/test?retryWrites=true&w=majority';
}

process.env.URLBD = urlBD;
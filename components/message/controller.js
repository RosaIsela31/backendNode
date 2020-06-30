// Este archivo va a contener toda la lógica
// Los parametros que recibe addMessage son (quién la añade, que es lo que añade)
function addMessage(user, message) {
  return new Promise((resolve, reject) => {

    if(!user || !message){
      console.error('No hay usuario o mensaje');
      reject('Los datos son incorrectos')
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }
    console.log(fullMessage);
    resolve(fullMessage);
  })

  
};

module.exports = {
  addMessage,
};
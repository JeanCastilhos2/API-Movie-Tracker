export const createKey = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let chave = "";
    for (let i = 0; i < 25; i++) {
      chave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return chave
  }
  
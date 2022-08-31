import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://livrariadodudu2.herokuapp.com/autores");
    return response.data;
  }

  async buscarAutores(id) {
    const response = await axios.get(`https://livrariadodudu2.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post("https://livrariadodudu2.herokuapp.com/autores", autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livrariadodudu2.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://livrariadodudu2.herokuapp.com/autores/${autor.id}`,
      autor
    );
    return response.data;
  }
}

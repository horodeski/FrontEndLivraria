import axios from "axios";
export default class AutoresApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://livrariadodudu2.herokuapp.com/editoras");
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(`https://livrariadodudu2.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "https://livrariadodudu2.herokuapp.com/editoras",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`https://livrariadodudu2.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://livrariadodudu2.herokuapp.com/editoras/${editora.id}`,
      editora
    );
    return response.data;
  }
}

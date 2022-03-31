import api from "../../api/api";

class PerfilServices {
  static list() {
    return api.get("/aluno");
  }
}
export default PerfilServices;

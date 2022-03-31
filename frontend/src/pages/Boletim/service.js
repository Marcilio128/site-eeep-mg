import api from "../../api/api";

class BoletimServices {
  static list() {
    return api.get("/aluno");
  }
}
export default BoletimServices;

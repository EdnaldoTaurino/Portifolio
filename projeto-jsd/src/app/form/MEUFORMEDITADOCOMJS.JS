import { TextField } from "@mui/material";
import "./Style.css";

import Image from "next/image";

export default function Contato() {
  return (
    <div className="container">
      <div className="form-image">
        <Image
          src="/logo.webp"
          alt="imagem capa"
          width={500}
          height={500}
          priority
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div className="form">
        <form
          className="contact-form"
          action="https://formsubmit.co/c26c09c7f4b1293174e188ba2443d530"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://ednaldotaurino.github.io/nerdburger/form/obrigado.html"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos seu contato, Retornaremos em breve obrigado."
          />
          <div className="form-header">
            <div className="title">
              <h1>Formulário</h1>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="firstname">Nome</label>
              <TextField
                fullWidth
                margin="normal"
                label="Nome"
                variant="outlined"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="Email">Email</label>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                type="email"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="number">Telefone</label>
              <TextField
                fullWidth
                margin="normal"
                label="Telefone"
                variant="outlined"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="mensagem">Digite uma mensagem</label>
              <TextField
                fullWidth
                margin="normal"
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
              />
            </div>

            <div className="options">
              <label>Qual setor deseja enviar este formulário?:</label>
              <select name="assunto" id="assunto" required>
                <option value="Elogios">Elogios</option>
                <option value="Duvida">Duvidas</option>
                <option value="Reclamação">Reclamações</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="checkbox">
              <input type="checkbox" value="Concordo com os termos" required />
              <label htmlFor="termos">Concordo com os termos</label>
            </div>

            <div className="button">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

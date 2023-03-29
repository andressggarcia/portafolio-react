import React from "react";
import "./contacto.css";
import emailjs from "@emailjs/browser";
const Contacto = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_nex8fsw",
        "template_uyohx5q",
        event.target,
        "hlnh-EtuyYPCEhtul"
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container-contacto" id="contact">
      <div className="title-habilidades">
        <h2 className="h2-habilidades__title">Mi</h2>
        <h2 className="h2-habilidades__subtitle">Contacto</h2>
      </div>

      <div className="container-contacto__form">
        <div className="div-container__contacto">
          <div className="div-contacto">
            <i class="fa-solid fa-envelope"></i>
            <p>andressggarcia2@gmail.com</p>
          </div>
          <div className="div-contacto">
            <i class="fa-solid fa-mobile"></i>
            <p>+54-2622-438532</p>
          </div>
          <div className="social-dos">
            <a
              className="circulo-dos"
              href="https://www.linkedin.com/in/emiliogarciagiaquinta/"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="circulo-dos" href="https://github.com/andressggarcia">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="div-form">
          <form className="form-mail" onSubmit={sendEmail}>
            <input placeholder="Nombre" type="text" name="user_name" />

            <input placeholder="Email" type="email" name="user_email" />

            <textarea
              placeholder="Mensaje"
              name="user_message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

import Head from 'next/head';

export default function Obrigado() {
  return (
    <>
      <Head>
        <title>Obrigado pelo contato</title>
        <link rel="shortcut icon" href="../img/Nerd_Burguer_Logo.png" type="image/x-icon" />
      </Head>

      <style jsx>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        img {
          border-radius: 20px;
        }

        h1 {
          font-size: 80px;
        }

        #menu {
          position: absolute;
        }
      `}</style>

      <div>
        <img src="../img/Nerd_Burguer_Logo.png" alt="NerdBurger" width="400px" />
        <h1>Obrigado por entrar em contato, sua mensagem será avaliada e em breve retornamos.</h1>

        <nav id="menu">
          <ul>
            <div className="menuInicio">
              <li><a href="../index.html">Início</a></li>
            </div>

            <div className="menuMenu">
              <li><a href="../menu/menu.html">Cardápio</a></li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}


import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { BannerCarousel } from '../components/BannerCarousel'
import { apiSIGA } from '../services/axios'
import styles from '../styles/Home.module.css'
import toast from "react-hot-toast";


export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
      details: {

      },
      serviceId: process.env.NEXT_PUBLIC_SIGA_SERVICE_ID
    }
    setLoading(true);
    apiSIGA().post("/leads", data)
      .then(response => {
        setLoading(false)
        toast.success("Seus dados foram cadastrados com sucesso.");
        setSuccess(true);
      })
      .catch(err => {
        setLoading(false);
        toast.error("Não foi possível cadastrar seus dados. Tente mais tarde.");
      })
  }
  return (
    <div className={styles.container} >
      <Head>
        <title>STW - Study Travels Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ background: "url('/images/Fundo.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <header className={styles.header}>
          <Image src="/images/logo.png" alt="stw Logo" width={150} height={45} />
          <h1>
            More, trabalhe e estude no país mais escolhido por quem<br />
            decide morar na Europa.
          </h1>
        </header>
        <div className={styles.mainFormVideo}>
          <div className={styles.form}>
            <h2>Agende agora<br />
              um consulta gratuita</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Nome'
                value={name}
                onChange={e => setName(e.target.value)}
                readOnly={success}
              />
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                readOnly={success}
              />

              <input
                type="text"
                placeholder='Telefone     (+55) 00 00000-0000'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                readOnly={success}
              />


              {success === false ? (<button
                type='submit'
                disabled={loading}
              >
                {loading === false ? ("Enviar mensagem") : "Carregando..."}

              </button>) : (
                <button
                  type='submit'
                  disabled={true}
                >
                  Seus dados foram enviados.
                </button>
              )}
            </form>
          </div>

          <iframe className={styles.video} src="https://player.vimeo.com/video/751205972?h=75b80bbe82&autoplay=1&title=0&portrait=0" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen>

          </iframe>
        </div>

      </main>
      {/* <div className={styles.containerdefault}>
        <h2>Veja o que nossos clientes estão falando:</h2>
        <div>
          <BannerCarousel />
        </div>
      </div> */}
      <footer className={styles.footer}>
        <div>
          <div>
            <Image src="/images/logowhite.png" alt="stw Logo" width={150} height={45} />
          </div>
          <div className={styles.icons}>
            {/* <a href="https://www.instagram.com/stw.pt/" target="_blank" rel="noreferrer">
              <Image src="/images/insta.png" alt="stw Logo" width={45} height={45} />
            </a>
            <a>
              <Image src="/images/twitter.png" alt="stw Logo" width={45} height={45} />
            </a>
            <a href="https://www.facebook.com/stw.portuguese/" target="_blank" rel="noreferrer">
              <Image src="/images/face.png" alt="stw Logo" width={45} height={45} />
            </a>
            <a href="https://www.linkedin.com/company/study-travel-work-portuguese/mycompany/" target="_blank" rel="noreferrer">
              <Image src="/images/linkedin.png" alt="stw Logo" width={45} height={45} />
            </a> */}

          </div>
        </div>
      </footer>
    </div>
  )
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Circadian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></Script>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div href="" className={styles.card}>
            <h1 className={styles.title}>Welcome to Circadian</h1>
            <h1 className={styles.description}>
              The Crypto Derived Stock Market
            </h1>
            <InputGroup className="mb-3 textBox">
    <InputGroup.Text id="inputGroup-sizing-default">Sign Up for Our Mailing List</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
    <Button>Sign Up</Button>
  </InputGroup>
            <p>
              Provide a <b>24/7</b>, <b>unregulated</b>, <b>no-delay</b> trading 
              platform where users around the world can avoid the problems of 
              online brokerages and gain greater accessibility to IPOs and 
              customizable ETFs by using crypto.
            </p>
 
          </div>

          <figure>
            <model-viewer
              style={{ width: "450px", height: "400px" }}
              loading="eager"
              auto-rotate-delay="1000"
              camera-orbit="0 80deg 0"
              interaction-prompt="none"
              rotation-per-second="200%"
              camera-controls
              auto-rotate
              environment-image="neutral"
              disable-zoom
              shadow-intensity="0.6"
              src="../untitled.glb"
            ></model-viewer>
          </figure>
          
        </div>
      </main>

    
    </div>
  );
}
/*

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          */

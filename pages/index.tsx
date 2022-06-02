import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import bgImage from "../public/bg.jpg";
import logoImage from "../public/logo.png";
import styles from "../styles/Home.module.css";

interface Person {
  name: string;
  roles: string[];
  link?: string;
}

const ARTISTS: Person[] = [
  {
    name: "Liam Bradbury",
    roles: ["Visual Effects", "User Interface"],
  },
  {
    name: "Migle Ignotaite",
    roles: ["Character Art"],
    link: "https://www.artstation.com/ignamist",
  },
  {
    name: "Niall Crabtree",
    roles: ["Game Design", "Level Design"],
    link: "http://niallcrabtree.com",
  },
  {
    name: "Daniel Scott-Wilson",
    roles: ["Tech Art", "Tech Design", "Lighting"],
    link: "https://www.dscottwilson.net",
  },
];

const PROGRAMMERS: Person[] = [
  {
    name: "Aspen Thompson",
    roles: ["Gameplay Programmer"],
    link: "https://www.imaspen.dev",
  },
  {
    name: "Wes Etherington",
    roles: ["Enemy Programmer"],
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lethal Deal</title>
      </Head>
      <div className={styles.bg}>
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.container}>
        <header>
          <div className={styles.headerLogoContainer}>
            <Image src={logoImage} alt="Lethal Deal" layout="fill" />
          </div>
        </header>
        <main className={styles.column}>
          <section>
            <h1>Art &amp; Design</h1>
          </section>
          {ARTISTS.map((val) => (
            <a
              key={val.name}
              className={styles.entry}
              href={val.link ?? "https://example.com"}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{val.name}</h2>
              <span className={styles.roles}>
                {/* {val.roles.map((role) => (
                  <p key={role}>{role}</p>
                ))} */}
                {val.roles
                  .flatMap((role) => [
                    <p key={role}>{role}</p>,
                    <p key={role + "|"}>|</p>,
                  ])
                  .slice(0, -1)}
              </span>
            </a>
          ))}
          <section>
            <h1>Programming</h1>
          </section>
          {PROGRAMMERS.map((val) => (
            <a
              key={val.name}
              className={styles.entry}
              href={val.link ?? "https://example.com"}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{val.name}</h2>
              <span className={styles.roles}>
                {val.roles
                  .flatMap((role) => [
                    <p key={role}>{role}</p>,
                    <p key={role + "|"}>|</p>,
                  ])
                  .slice(0, -1)}
              </span>
            </a>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;

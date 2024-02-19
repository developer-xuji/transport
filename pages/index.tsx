import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageLogin from "./PageLogin";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <PageLogin />;
};

export default Home

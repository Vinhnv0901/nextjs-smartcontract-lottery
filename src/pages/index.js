import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import ManualHeader from "../../componects/ManualHeader"
import Header from "../../componects/Header"
import LotteryEntrance from "../../componects/LotteryEntrance"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.main} ${inter.className}`}>
                {/* <ManualHeader/> */}

                <Header />
                <LotteryEntrance />
                <h1>Lottery project</h1>
            </main>
        </>
    )
}

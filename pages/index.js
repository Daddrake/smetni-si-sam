import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";

export default function Home() {
	const [bgPrice, setBgPrice] = useState(0);
	const [dePriceLv, setDePriceLv] = useState(0);
	const [kg, setKg] = useState(4);
	const [cena, setCena] = useState(0);
	const [komisionna, setKomisionna] = useState(0);
	const [razlika, setRazlika] = useState(0);
	const onBgChange = (event) => {
		setBgPrice(event.target.value);
		setRazlika(event.target.value - cena);
	};

	const onDeChange = (event) => {
		let cenaLv = event.target.value * 1.95583;
		let komis = cenaLv / 10;
		let total = cenaLv + komis + kg;
		setDePriceLv(cenaLv);
		setKomisionna(komis);
		setRazlika(bgPrice - total);
		setCena(total);
	};

	const onKgChange = (event) => {
		setKg(event.target.value * 4);
	};

	const onSubmit = (event) => {
		setCena(dePriceLv + komisionna + kg);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Сметни си сам</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h3>
					Калкулатор за изчисляване на разлика в цената при поръчка от Германия
				</h3>
				<div>
					<h4>Как да използваме калкулатора?</h4>
					<ol>
						<li>Въведете цената на артикула в България.</li>
						<li>Въведете цената на артикула в Германия.</li>
						<li>Въведете предполагаемото тегло на пакета.</li>
					</ol>
				</div>
				<div className={styles.main.bgprice}>
					<label>Цена в България: </label>
					<br />
					<input
						type="text"
						id="bgprice"
						name="bgprice"
						onChange={onBgChange}
					/>
					BGN
				</div>
				<div className={styles.main.deprice}>
					<label>Цена в Германия: </label>
					<br />
					<input
						type="text"
						id="deprice"
						name="deprice"
						onChange={onDeChange}
					/>
					€
				</div>
				<div className={styles.main.kg}>
					<label>Тегло: </label>
					<br />
					<input
						type="text"
						id="teglo"
						name="teglo"
						onChange={onKgChange}
						placeholder="1"
					/>{" "}
					kg
				</div>
				<p>Цена в Германия в лева: {dePriceLv.toFixed(2)} лв</p>
				<p>Комисионна 10%: {komisionna.toFixed(2)} лв</p>
				<p>Доставка до София 4лв/кг: {kg.toFixed(2)} лв</p>
				<p>Крайна цена от Германия: {cena.toFixed(2)} лв</p>
				<p>
					Разлика: {Math.abs(razlika != bgPrice ? razlika : 0).toFixed(2)} лв
					{razlika != bgPrice
						? razlika > 0
							? " (спестени)"
							: " (по-скъпо)"
						: ""}
				</p>
			</main>
			<footer>
				<b>
					Made by <i>Daddrake</i>
				</b>
			</footer>
		</div>
	);
}

/*{" "}
{*/

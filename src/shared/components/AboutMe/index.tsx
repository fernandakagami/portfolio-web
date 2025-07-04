import { Icon } from "@iconify/react";

import { MyImage } from "../MyImage";

export function AboutMe() {
	return (
		<section className="mx-auto flex h-full w-full flex-col items-center justify-evenly gap-10 px-10 pt-16 md:h-screen md:max-w-5xl md:flex-row md:px-0 md:pt-0">
			<section className="flex w-full flex-col items-start justify-center gap-1">
				<h1 className="mb-4 text-5xl font-bold uppercase md:text-6xl">Fernanda Lima</h1>

				<h3
					className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent"
					style={{ WebkitTextFillColor: "transparent" }}
				>
					Desenvolvedora Frontend
				</h3>

				<div className="mt-12 flex items-center justify-center">
					<p>Sou desenvolvedora frontend, trabalhando principalmente com Vue, React, Next, TypeScript e Tailwind.</p>
				</div>

				<div className="not-sr-only !mt-8 md:sr-only">
					<ul className="mb-10">
						<li className="mb-4 flex flex-row items-center gap-2">
							<a href="https://github.com/fernandakagami" target="_blank">
								<Icon icon="bi:github" width="30" height="30" />
							</a>
							<p>Github</p>
						</li>
						<li className="mb-2 flex flex-row items-center gap-2">
							<a href="https://www.linkedin.com/in/fernanda-lima-94b60b229/" target="_blank">
								<Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
							</a>
							<p>Linkedin</p>
						</li>
					</ul>
				</div>
			</section>
			<MyImage className="sr-only md:not-sr-only" />
		</section>
	);
}

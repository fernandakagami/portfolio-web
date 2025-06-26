export default function FooterMobile() {
	return (
		<footer className="not-sr-only sticky bottom-0 flex w-full flex-col items-center justify-center gap-1 bg-black p-5 text-white md:sr-only">
			<p className="text-xs">©{`${new Date().getFullYear()}`} Fernanda Lima.</p>
			<p className="text-xs">Todos os direitos reservados.</p>
		</footer>
	);
}

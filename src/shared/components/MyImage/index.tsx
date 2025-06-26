import Image from "next/image";

import me from "../../../../public/ghibli.jpg";

interface MyImageProps {
	className?: string;
}

export function MyImage({ className }: MyImageProps) {
	return (
		<section className={`flex items-center justify-center ${className}`}>
			<Image src={me.src} width={500} height={700} alt="Fernanda" className="rounded-full" />
		</section>
	);
}

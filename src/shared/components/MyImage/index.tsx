import Image from "next/image";

import me from "@/assets/images/ghibli.webp";

interface MyImageProps {
	className?: string;
}

export function MyImage({ className }: MyImageProps) {
	return (
		<section className={`mx-auto flex items-center justify-center md:!w-2xl lg:!w-4xl ${className}`}>
			<Image
				src={me.src}
				width={800}
				height={800}
				alt="Fernanda"
				className="rounded-full border-8 border-black p-1.5"
			/>
		</section>
	);
}

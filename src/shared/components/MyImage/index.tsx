import Image from "next/image";

import me from "../../../../public/ghibli.jpg";

interface MyImageProps {
	className?: string;
}

export function MyImage({ className }: MyImageProps) {
	return (
		<section className={`flex items-center justify-center lg:!w-4xl ${className}`}>
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

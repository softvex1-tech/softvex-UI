import Image from 'next/image';

type LogoProps = {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export function Logo({ src = "/assets/logo.png", width = 140, height = 32, alt = "Softvex Logo" }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}

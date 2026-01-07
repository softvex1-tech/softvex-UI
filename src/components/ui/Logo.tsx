import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Softvex Logo" width={32} height={32} />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        softvex
      </span>
    </div>
  );
}

import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Softvex Logo" width={140} height={32} />
    </div>
  );
}

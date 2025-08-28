import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h5 className="font-bold">Welcome to Toards</h5>
      <Image
        alt="avatar"
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  );
}

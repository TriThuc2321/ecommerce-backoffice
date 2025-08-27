import { Button } from '@heroui/button';

export default function Home() {
  return (
    <div className="h-full">
      <div className="m-4 h-full w-80 bg-white">
        <Button color="primary">Click me</Button>
        <Button className="font-bold" color="secondary">
          Click me
        </Button>
      </div>
    </div>
  );
}

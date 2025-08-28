import { Button } from '@heroui/button';

export default function Home() {
  return (
    <div className="h-full">
      <h5>Dashboard</h5>
      <Button>Click me</Button>
      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
      <Button color="success">Click me</Button>
      <Button color="warning">Click me</Button>
      <Button color="danger">Click me</Button>

      <Button color="primary" variant="flat">
        Click me
      </Button>
      <Button color="secondary" variant="bordered">
        Click me
      </Button>
      <Button color="success" variant="solid">
        Click me
      </Button>
      <Button color="warning" variant="ghost">
        Click me
      </Button>
      <Button color="danger" variant="solid">
        Click me
      </Button>
    </div>
  );
}

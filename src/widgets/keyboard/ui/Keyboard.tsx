import { Button } from "../../../components/ui/button";

export const Keyboard = () => {
  return (
    // <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-5 gap-2 p-3">
        <Button>AC</Button>
        <Button>(</Button>
        <Button>)</Button>
        <Button variant="accent">÷</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button variant="accent">×</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button variant="accent">-</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button variant="accent">+</Button>

        <Button className="col-span-2">0</Button>
        <Button>.</Button>
        <Button variant="primary">=</Button>
      </div>
    // </div>
  );
};
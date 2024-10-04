import { Select } from '../../primitives/select';

export const MainSelects = () => {
  return (
    <div className="mt-3 p-1 grid grid-cols-3 gap-4">
      <Select label="Assignment length:" option="3-4 pages" />
      <Select label="Assignment type:" option="Essay" />
      <Select label="Formatting style:" option="APA7" />
    </div>
  );
};

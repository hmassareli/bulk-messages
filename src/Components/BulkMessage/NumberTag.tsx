export const NumberTag = ({ number, key }: { number: string; key: string }) => {
  return (
    <div
      key={key}
      className="flex bg-grayLight px-4 py-2 rounded-lg max-w-[150px]"
    >
      <p>{number}</p>
    </div>
  );
};

import { HashLoader } from "react-spinners";

export const LoadingScreen = function () {
  const override = `
    display: block;
    margin: 0 auto;
  `;

  const props = {
    loading: true,
    size: 30,
    color: "black",
    css: override,
  };

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex justify-start items-center bg-gray-200 opacity-50">
      <HashLoader {...props} />
    </div>
  );
};

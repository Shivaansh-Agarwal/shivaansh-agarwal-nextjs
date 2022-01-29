export const LayoutSection = ({ children, sectionHeading }) => {
  return (
    <section className="flex flex-col items-center sm:justify-start sm:items-start mt-5 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl pb-2 sm:pb-3">{sectionHeading}</h1>
      {children}
    </section>
  );
};

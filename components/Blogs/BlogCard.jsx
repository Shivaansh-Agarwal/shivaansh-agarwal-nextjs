import Image from "next/image";

export function BlogCard({
  id,
  title,
  imageURL,
  blogURL,
  website,
  brief,
  dateAdded,
}) {
  const formattedDateAdded = new Date(dateAdded).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="border bg-white drop-shadow-lg flex flex-col rounded-lg">
      <Image
        src={imageURL}
        height={150}
        width={250}
        alt="BlogCover"
        className="rounded-t-lg"
        onClick={() => {
          window.open(blogURL);
        }}
      />
      <div className="flex flex-col justify-end items-end p-4">
        <div className="flex flex-col gap-2">
          <div className="text-lg text-gray-800 font-semibold">{title}</div>
          <div className="font-light text-gray-500">
            {brief.substring(0, 100) + "..."}
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-4">{formattedDateAdded}</div>
      </div>
    </div>
  );
}

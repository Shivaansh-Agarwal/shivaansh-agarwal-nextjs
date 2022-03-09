import { BlogCard } from "./BlogCard.jsx";

export const BlogsGrid = function ({ blogsData }) {
  const filteredBlogsContent = getFilteredBlogsData(blogsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
      {filteredBlogsContent.map(
        ({
          id,
          title,
          imageURL,
          blogURL,
          dateAdded,
          dateUpdated,
          website,
          brief,
        }) => {
          return (
            <BlogCard
              key={id}
              id={id}
              title={title}
              imageURL={imageURL}
              blogURL={blogURL}
              website={website}
              dateAdded={dateAdded}
              dateUpdated={dateUpdated}
              brief={brief}
            />
          );
        }
      )}
    </div>
  );
};

function getFilteredBlogsData(blogsList) {
  return blogsList.map((blog) => {
    return {
      id: blog._id,
      title: blog.title,
      imageURL: blog.coverImage,
      blogURL: `https://shivaansh.hashnode.dev/${blog.slug}`,
      dateAdded: blog.dateAdded,
      dateUpdated: blog.dateUpdated,
      website: "Hashnode",
      brief: blog.brief,
    };
  });
}

import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/Layout.jsx";
import { BlogsGrid } from "../components/Blogs";

export default function Blogs() {
  const {
    isLoading,
    data: data1,
    isError,
    error,
  } = useQuery("blogs-hashnode1", fetchHashnodeBlogs.bind(this, 0));
  const { data: data2 } = useQuery(
    "blogs-hashnode2",
    fetchHashnodeBlogs.bind(this, 1)
  );

  const blogsPage1 = data1?.data?.data.user.publication.posts;
  const blogsPage2 = data2?.data?.data.user.publication.posts;

  let allBlogs = [];
  if (blogsPage1 && blogsPage2) {
    allBlogs = blogsPage1.concat(blogsPage2);
  }

  return (
    <Layout title="Shivaansh | Blogs">
      {isLoading && <div className="text-lg">Loading...</div>}
      {isError && <div className="text-lg">{error.message}</div>}
      {blogsPage1 && blogsPage2 && <BlogsGrid blogsData={allBlogs} />}
    </Layout>
  );
}

function fetchHashnodeBlogs(pageNo) {
  const query = `{
    user(username: "shivaansh") { 
      publication {
        posts (page: ${pageNo}) {
          _id
          title
          slug
          brief
          coverImage
          dateAdded
          dateUpdated
        }
      }
    }
  }`;
  const URL = "https://api.hashnode.com";
  const payload = JSON.stringify({ query: query });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = axios.post(URL, payload, config);
  return response;
}

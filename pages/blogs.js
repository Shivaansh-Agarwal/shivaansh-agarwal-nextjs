import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/Layout.jsx";
import { BlogsGrid } from "../components/Blogs";

export default function Blogs() {
  const { isLoading, data, isError, error } = useQuery(
    "blogs-hashnode",
    fetchHashnodeBlogs
  );

  return (
    <Layout title="Shivaansh | Blogs">
      {isLoading && <div className="text-lg">Loading...</div>}
      {isError && <div className="text-lg">{error.message}</div>}
      {data && <BlogsGrid blogsData={data} />}
    </Layout>
  );
}

function fetchHashnodeBlogs() {
  const query = `{
    user(username: "shivaansh") { 
      publication {
        posts {
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

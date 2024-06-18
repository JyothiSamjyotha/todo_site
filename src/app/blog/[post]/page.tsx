type props = {
  params: {
    post: string;
  };
};

export default function BlogPost({ params }: props) {
  return <h1>Post:{params.post}</h1>;
}

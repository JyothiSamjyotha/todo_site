type props = {
  params: {
    name: string;
  };
};
export default function GreetingName({ params }: props) {
  return <h1>hi nice to meet you madam {params.name}</h1>;
}

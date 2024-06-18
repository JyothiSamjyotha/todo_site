type props = {
  params: {
    name: string;
  };
};
export default function GreetingName({ params }: props) {
  return <h1>hi nice to meet you {params.name}</h1>;
}

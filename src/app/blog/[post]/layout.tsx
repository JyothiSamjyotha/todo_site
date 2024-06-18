import { Metadata } from "next";

type props = {
  params: {
    post: string;
  };
};

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `post ${params.post}`.split("-").join(" "),
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>{children}</body>
    </>
  );
}

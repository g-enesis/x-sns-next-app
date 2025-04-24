import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Record<string, never>;
};
export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const parentMetadata = await parent;
  const title = "Home";

  return {
    title,
    openGraph: {
      title,
      images: parentMetadata.openGraph?.images?.[0] ?? [],
    },
    twitter: {
      title,
      images: parentMetadata.openGraph?.images?.[0] ?? [],
    },
  };
}

const HomePage = async () => {
  return <div>home.page</div>;
};
export default HomePage;

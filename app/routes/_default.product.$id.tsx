import { useParams } from "@remix-run/react";
import { ProductDetails } from "../components/product/ProductDetails";

type LoaderData = { props: { id: string } };

export const loader = async ({
  params,
}: {
  params: { $id: string };
}): Promise<LoaderData> => {
  const { $id } = params;
  return { props: { id: $id } };
};

export default function Product() {
  const { id } = useParams();

  console.log(id);

  return <ProductDetails />;
}

import React from "react";

import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

function ProductDetail({ params }: Props) {
  return <h1>Detail about proudct {params.productId}</h1>;
}

export default ProductDetail;

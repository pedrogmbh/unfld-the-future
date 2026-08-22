import { ProductPage } from "@/components/site/product-page";
import { getOwnedProduct } from "@/lib/site";

export function OwnedProductPage({ slug }: { slug: string }) {
  const product = getOwnedProduct(slug);
  if (!product) return null;

  return (
    <ProductPage
      kicker={product.kicker}
      title={product.title}
      titleSecond={product.titleSecond}
      lede={product.blurb}
      primary={product.primary}
      primaryTo={product.url ? undefined : "/contact"}
      primaryHref={product.url}
      secondary="All products"
      secondaryTo="/products"
      image={product.image}
      imageAlt={product.name}
      features={product.features}
      quote={product.quote}
    />
  );
}

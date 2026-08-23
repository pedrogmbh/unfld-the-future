import { ProductPage } from "@/components/site/product-page";
import { localizeOwnedProduct } from "@/lib/i18n/localize";
import { useLocale, useMessages } from "@/lib/i18n";

export function OwnedProductPage({ slug }: { slug: string }) {
  const locale = useLocale();
  const { chrome } = useMessages();
  const product = localizeOwnedProduct(slug, locale);
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
      secondary={chrome.common.allProducts}
      secondaryTo="/products"
      image={product.image}
      imageAlt={product.name}
      features={product.features}
      quote={product.quote}
    />
  );
}

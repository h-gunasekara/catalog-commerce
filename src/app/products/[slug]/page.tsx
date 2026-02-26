import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Loggy`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Loggy`,
      description: product.tagline,
      url: `https://catalog-commerce.com/products/${product.slug}`,
    },
  };
}

function Nav() {
  return (
    <nav className="border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Loggy
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#shop" className="hover:text-gray-900 transition-colors">
            Shop
          </Link>
          <Link href="/#about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/#faq" className="hover:text-gray-900 transition-colors">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Loggy</h4>
            <p className="text-sm leading-relaxed">
              Premium shirts crafted with intention. Portland, Oregon.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Shipping &amp; Returns</li>
              <li>Sizing Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} Loggy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Nav />

      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#shop" className="hover:text-gray-900">
            Shirts
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-12 py-8">
          {/* Image placeholder */}
          <div className="space-y-4">
            <div
              className="aspect-square rounded-lg flex items-center justify-center"
              style={{ backgroundColor: product.colors[0].hex }}
            >
              <div className="text-center p-8">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white/30 flex items-center justify-center">
                  <svg
                    className="w-14 h-14 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium">
                  {product.material.split(",")[0]}
                </p>
                <p className="text-white/60 text-xs mt-1">{product.fit} Fit</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.colors.map((c) => (
                <div
                  key={c.name}
                  className="aspect-square rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: c.hex }}
                >
                  <p className="text-xs font-medium text-white/80 drop-shadow">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Loggy Shirts
            </p>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="text-gray-500 mb-4">{product.tagline}</p>
            <p className="text-2xl font-bold mb-6">${product.price}.00</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">Color</p>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={c.name}
                    className={`w-10 h-10 rounded-full border-2 ${
                      i === 0 ? "border-gray-900" : "border-gray-200"
                    } transition-colors`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {product.colors[0].name}
              </p>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s, i) => (
                  <button
                    key={s}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                      i === 2
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-gray-900 text-white py-3.5 rounded-md font-semibold text-sm tracking-wide hover:bg-gray-800 transition-colors mb-8">
              Add to Cart — ${product.price}.00
            </button>

            {/* Description */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Details */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="font-semibold mb-3">Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">Material:</span>{" "}
                  {product.material}
                </li>
                <li>
                  <span className="font-medium text-gray-900">Fit:</span>{" "}
                  {product.fit}
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="font-semibold mb-3">Care Instructions</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {product.care.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Sizing Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 font-semibold">Size</th>
                  <th className="text-left py-3 pr-6 font-semibold">Chest</th>
                  <th className="text-left py-3 pr-6 font-semibold">Length</th>
                  <th className="text-left py-3 font-semibold">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {product.sizing.map((s) => (
                  <tr key={s.size} className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-medium">{s.size}</td>
                    <td className="py-3 pr-6 text-gray-600">{s.chest}</td>
                    <td className="py-3 pr-6 text-gray-600">{s.length}</td>
                    <td className="py-3 text-gray-600">{s.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping & Returns */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Shipping &amp; Returns</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
              <p>
                Free standard shipping on orders over $50 (3–5 business days).
                Expedited shipping available for $12 (1–2 business days).
                International shipping to 30+ countries — rates calculated at
                checkout.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Returns</h3>
              <p>
                30-day hassle-free returns on all orders. Items must be unworn
                with original tags attached. Free return shipping on domestic
                orders. Refunds processed within 5 business days of receiving
                the return.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

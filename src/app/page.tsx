import Link from "next/link";
import { products } from "@/data/products";

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

function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-500 mb-4">
          Premium Shirting Since 2019
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Shirts That Speak
          <br />
          for Themselves
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          From the boardroom to the backyard, Loggy shirts are crafted with
          intention. Premium fabrics, timeless design, built to last.
        </p>
        <Link
          href="/#shop"
          className="inline-block bg-gray-900 text-white px-8 py-3.5 text-sm font-semibold tracking-wide rounded-md hover:bg-gray-800 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    {
      title: "Free Shipping",
      desc: "Complimentary standard shipping on every order over $50. No codes needed.",
      icon: "📦",
    },
    {
      title: "Premium Fabrics",
      desc: "Belgian linen, Japanese Oxford cloth, heavyweight twill — only the good stuff.",
      icon: "✂️",
    },
    {
      title: "Easy Returns",
      desc: "30-day hassle-free returns with free return shipping on all domestic orders.",
      icon: "↩️",
    },
  ];

  return (
    <section className="py-20 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-12">
        {props.map((p) => (
          <div key={p.title} className="text-center">
            <div className="text-3xl mb-4">{p.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div
        className="aspect-[3/4] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: product.colors[0].hex }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        <div className="text-center z-10 p-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/30 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white/80"
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
          <p className="text-white/90 text-sm font-medium">{product.material.split(",")[0]}</p>
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
      <p className="text-sm font-semibold mt-2">${product.price}.00</p>
    </Link>
  );
}

function FeaturedProducts() {
  return (
    <section id="shop" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            The Collection
          </h2>
          <p className="text-gray-600">
            Three essential shirts. Endless possibilities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">About Loggy</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Founded in 2019, Loggy started with a simple belief: a great shirt
          should feel like a second skin. We partner directly with mills in
          Belgium, Japan, and Portugal to source fabrics that get better with
          every wash.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Every Loggy shirt is cut in small batches, inspected by hand, and
          shipped in recycled packaging. No fast fashion. No planned
          obsolescence. Just shirts worth keeping.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What sizes do you offer?",
      a: "We offer sizes XS through XXL across most styles. Our Utility Work Shirt starts at size S. Check each product page for detailed sizing charts with chest, length, and sleeve measurements.",
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day hassle-free return policy. If your shirt doesn't fit right or doesn't meet your expectations, return it for a full refund. We cover return shipping on all domestic orders.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping is free on orders over $50 and takes 3–5 business days. Expedited shipping (1–2 business days) is available for $12. All orders ship from our warehouse in Portland, Oregon.",
    },
    {
      q: "How should I care for my Loggy shirt?",
      a: "Each shirt has specific care instructions on its product page. In general, we recommend cold or warm machine washing, low-heat drying, and ironing as needed. Our linen shirts look best when hung to dry.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes! We ship to over 30 countries. International shipping rates are calculated at checkout and typically take 7–14 business days depending on the destination.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-0 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-gray-900">
                {faq.q}
                <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
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

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ValueProps />
      <FeaturedProducts />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}

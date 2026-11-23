import { useState } from "react";
import {
  IconGift,
  IconNotebook,
  IconPencil,
  IconTruckDelivery,
  IconLeaf,
  IconHeart,
  IconMail,
  IconCheck,
  IconCreditCard,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function meta() {
  return [
    { title: "Folio & Co. — Stationery, Gifts & Paper Goods" },
    {
      name: "description",
      content:
        "Gift cards, small gifts and beautiful paper goods for everyday and every occasion.",
    },
  ];
}

const categories = [
  {
    id: "gift-cards",
    title: "Gift Cards",
    desc: "Digital or printed, in any amount. The easiest thank-you.",
    icon: IconCreditCard,
  },
  {
    id: "gifts",
    title: "Small Gifts",
    desc: "Candles, pens, desk objects and thoughtful little extras.",
    icon: IconGift,
  },
  {
    id: "paper",
    title: "Paper Goods",
    desc: "Notebooks, journals, planners, cards and writing paper.",
    icon: IconNotebook,
  },
];

const products = [
  { img: "https://images.pexels.com/photos/4464481/pexels-photo-4464481.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Linen Hardcover Notebook", cat: "Paper Goods", price: "$18", tone: "bg-blue-50", icon: IconNotebook },
  { img: "https://images.pexels.com/photos/356390/pexels-photo-356390.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Brass Fountain Pen", cat: "Small Gifts", price: "$42", tone: "bg-amber-50", icon: IconPencil },
  { img: "https://images.pexels.com/photos/31884819/pexels-photo-31884819.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Digital Gift Card", cat: "Gift Cards", price: "from $10", tone: "bg-emerald-50", icon: IconCreditCard },
  { img: "https://images.pexels.com/photos/5706225/pexels-photo-5706225.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Weekly Desk Planner", cat: "Paper Goods", price: "$14", tone: "bg-rose-50", icon: IconNotebook },
  { img: "https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Letterpress Card Set", cat: "Paper Goods", price: "$16", tone: "bg-violet-50", icon: IconMail },
  { img: "https://images.pexels.com/photos/35216608/pexels-photo-35216608.jpeg?auto=compress&cs=tinysrgb&w=640", name: "Gift Box: Write & Unwind", cat: "Small Gifts", price: "$36", tone: "bg-sky-50", icon: IconGift },
];

const perks = [
  { icon: IconTruckDelivery, title: "Free shipping over $50", desc: "Fast, plastic-free packaging." },
  { icon: IconLeaf, title: "Responsibly made", desc: "FSC-certified and recycled papers." },
  { icon: IconHeart, title: "Free gift wrapping", desc: "Add a handwritten note at checkout." },
];

export default function HomeRoute() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <IconPencil size={18} />
            </span>
            Folio &amp; Co.
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#shop" className="hover:text-foreground">Shop</a>
            <a href="#featured" className="hover:text-foreground">Featured</a>
            <a href="#about" className="hover:text-foreground">Why Folio</a>
            <a href="#visit" className="hover:text-foreground">Visit</a>
          </nav>
          <Button asChild size="sm">
            <a href="#shop">Shop now</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="border-b bg-gradient-to-b from-accent/60 to-background">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <Badge variant="secondary" className="mb-4">New season collection</Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Beautiful paper, thoughtful gifts.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Folio &amp; Co. is your neighborhood stationery store for gift
                cards, small gifts and paper goods made to be used and kept.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#shop">Browse the shop</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#gift-cards">Send a gift card</a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <img src="https://images.pexels.com/photos/4464481/pexels-photo-4464481.jpeg?auto=compress&cs=tinysrgb&w=640" alt="Linen hardcover notebook" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <p className="text-sm opacity-80">Bestseller</p>
                  <p className="font-semibold">Linen Notebook</p>
                </div>
              </div>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <img src="https://images.pexels.com/photos/35216608/pexels-photo-35216608.jpeg?auto=compress&cs=tinysrgb&w=640" alt="Write and Unwind gift box" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <p className="text-sm opacity-80">Gift</p>
                  <p className="font-semibold">Write &amp; Unwind Box</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Shop by category</h2>
          <p className="mt-2 text-muted-foreground">Everything you need to write, give and celebrate.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <a
                key={c.id}
                id={c.id}
                href="#featured"
                className="group rounded-xl border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="featured" className="border-y bg-secondary/60">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight">Featured favorites</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-xl border bg-card">
                  <div className="h-44 overflow-hidden bg-muted">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{p.cat}</p>
                      <p className="font-medium">{p.name}</p>
                    </div>
                    <span className="font-semibold">{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <p.icon size={20} />
                </span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Get 10% off your first order</h2>
                <p className="mt-2 opacity-90">Join our newsletter for new arrivals and seasonal gift guides.</p>
              </div>
              {subscribed ? (
                <p className="flex items-center gap-2 font-medium">
                  <IconCheck size={20} /> Thanks! Check your inbox for your code.
                </p>
              ) : (
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                >
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="border-0 bg-background text-foreground"
                  />
                  <Button type="submit" variant="secondary">Subscribe</Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Folio &amp; Co. Stationery</p>
          <p>Open daily 10am – 7pm · 123 Maple Street</p>
        </div>
      </footer>
    </div>
  );
}

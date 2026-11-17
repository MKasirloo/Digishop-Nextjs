
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "اعتماد و شفافیت",
    description:
      "تجربه خرید باید روشن و قابل‌اعتماد باشه؛ از بررسی محصول تا تصمیم نهایی برای خرید.",
  },
  {
    icon: Lightbulb,
    title: "انتخاب آگاهانه",
    description:
      "اطلاعات کاربردی و معرفی دقیق محصولات کمک می‌کنه انتخابی متناسب با نیازت داشته باشی.",
  },
  {
    icon: HeartHandshake,
    title: "احترام به مشتری",
    description:
      "تجربه خوب خرید فقط به انتخاب محصول ختم نمی‌شه؛ توجه به نیاز مشتری هم بخشی از ماجراست.",
  },
  {
    icon: Zap,
    title: "سادگی و سرعت",
    description:
      "تلاش می‌کنیم مسیر پیدا کردن محصول موردنظرت ساده، سریع و بدون پیچیدگی باشه.",
  },
];

const steps = [
  {
    number: "1",
    title: "پیدا کردن محصول",
    description: "محصولات مختلف رو بررسی کن و گزینه‌های موردنظرت رو پیدا کن.",
  },
  {
    number: "2",
    title: "مقایسه و انتخاب",
    description: "ویژگی‌ها و مشخصات محصولات رو با هم مقایسه کن.",
  },
  {
    number: "3",
    title: "ثبت سفارش",
    description: "محصول دلخواهت رو انتخاب کن و مراحل سفارش رو تکمیل کن.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="overflow-hidden bg-white text-gray-900">
      <section className="relative isolate overflow-hidden bg-[#10052c] text-white">
        <div className="absolute -right-40 -top-40 size-[450px] rounded-full bg-[#4d00ff]/35 blur-[120px]" />
        <div className="absolute -bottom-48 -left-20 size-100 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <Sparkles size={16} />
              <span>دنیای دیجیتال، انتخاب هوشمندانه</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl">
              تکنولوژی برای زندگی بهتر،
              <span className="block bg-linear-to-l from-violet-300 to-white bg-clip-text text-transparent">
                خریدی ساده‌تر از همیشه
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-9 text-gray-300 sm:text-lg">
              ما در دیجی‌شاپ معتقدیم پیدا کردن محصول مناسب نباید سخت باشه.
              اینجا قراره با خیال راحت محصولات دیجیتال رو بررسی کنی، مقایسه
              کنی و انتخابی مطابق نیازت داشته باشی.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group flex items-center gap-3 rounded-xl bg-[#4d00ff] px-6 py-3.5 font-bold transition hover:bg-[#3d00cc]"
              >
                مشاهده محصولات
                <ArrowLeft
                  size={19}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <a
                href="#our-story"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white/10"
              >
                داستان ما
                <ArrowUpLeft size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="absolute size-72 rounded-full border border-violet-400/20 sm:size-96" />
            <div className="absolute size-60 rounded-full border border-violet-400/20 sm:size-80" />

            <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center rounded-[40px] border border-white/15 bg-gradient-to-br from-white/15 to-white/[0.03] shadow-2xl shadow-violet-950/50 backdrop-blur-xl">
              <div className="absolute right-7 top-7 rounded-2xl border border-white/10 bg-white/10 p-3 text-violet-200">
                <Sparkles size={25} />
              </div>

              <div className="flex size-44 items-center justify-center rounded-[38px] bg-linear-to-br from-violet-500 to-[#4d00ff] shadow-2xl shadow-violet-600/40 sm:size-52">
                <ShoppingBag
                  size={92}
                  strokeWidth={1.3}
                  className="text-white"
                />
              </div>

              <div className="absolute bottom-8 left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#21133e]/90 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex size-10 items-center justify-center rounded-xl bg-green-400/15 text-green-300">
                  <BadgeCheck size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">انتخاب مطمئن</p>
                  <p className="mt-1 text-xs text-gray-400">
                    تجربه‌ای ساده و شفاف
                  </p>
                </div>
              </div>

              <div className="absolute left-5 top-20 rounded-xl border border-white/10 bg-white/10 p-3 text-yellow-300">
                <Zap size={23} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-bold text-[#4d00ff]">
              داستان دیجی‌شاپ
            </span>
            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              یک تجربه متفاوت
              <br />
              برای خرید دنیای دیجیتال
            </h2>
            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#4d00ff]" />
          </div>

          <div className="space-y-5 text-justify text-[15px] leading-9 text-gray-600">
            <p>
              دنیای تکنولوژی هر روز گسترده‌تر می‌شه و انتخاب از بین محصولات
              متنوع، گاهی می‌تونه پیچیده باشه. دیجی‌شاپ با همین نگاه شکل گرفته:
              ایجاد فضایی که پیدا کردن و بررسی محصولات دیجیتال در اون ساده‌تر
              باشه.
            </p>
            <p>
              هدف ما اینه که تجربه‌ای منظم و کاربرپسند فراهم کنیم تا بتونی
              ویژگی‌های محصولات رو ببینی، گزینه‌های مختلف رو مقایسه کنی و با
              آگاهی بیشتری تصمیم بگیری.
            </p>
            <p className="font-semibold text-gray-800">
              دیجی‌شاپ؛ همراه تو در انتخاب دنیای دیجیتال.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold text-[#4d00ff]">
              ارزش‌های ما
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              چیزهایی که بهشون اهمیت می‌دیم
            </h2>
            <p className="mt-5 leading-8 text-gray-500">
              یک تجربه خرید خوب از جزئیات کوچیک ساخته می‌شه؛ این‌ها اصولی هستن
              که در دیجی‌شاپ بهشون توجه می‌کنیم.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-violet-50 text-[#4d00ff] transition group-hover:bg-[#4d00ff] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="mt-7 block text-xs font-bold text-gray-300">
                    ۰{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-sm font-bold text-[#4d00ff]">
              مسیر خرید
            </span>
            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              از جستجو تا انتخاب،
              <br />
              قدم به قدم همراهتیم
            </h2>
            <p className="mt-5 leading-9 text-gray-500">
              سعی کردیم مسیر رسیدن به محصول موردنظرت رو تا جای ممکن ساده و
              قابل‌فهم طراحی کنیم.
            </p>
            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#4d00ff] transition hover:gap-4"
            >
              شروع خرید
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group flex gap-5 rounded-3xl border border-gray-100 p-6 transition hover:border-violet-200 hover:bg-violet-50/40 sm:gap-7 sm:p-8"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-lg font-black text-[#4d00ff] transition group-hover:bg-[#4d00ff] group-hover:text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#17083c] px-7 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-32 size-72 rounded-full bg-violet-500/30 blur-[90px]" />
          <div className="absolute -bottom-40 -left-20 size-72 rounded-full bg-[#4d00ff]/50 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 text-violet-200">
              <Target size={28} />
            </div>

            <h2 className="mt-7 text-2xl font-black sm:text-4xl">
              آماده‌ای انتخاب بعدیت رو پیدا کنی؟
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
              وارد دنیای دیجی‌شاپ شو، محصولات رو بررسی کن و انتخابت رو با
              اطمینان بیشتری انجام بده.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#4d00ff] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/30"
            >
              دیدن محصولات
              <ArrowLeft size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

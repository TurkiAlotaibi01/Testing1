const plans = [
  {
    duration: "3 أيام",
    price: "10 ريال / ليلة",
    total: "30 ر.س",
    featured: false
  },
  {
    duration: "7 أيام",
    price: "5 ريال/ الليلة",
    total: "35 ريال",
    badge: "وفر 50%",
    featured: true
  },
  {
    duration: "30 يوم",
    price: "3 ريال / ليلة",
    total: "90 ر.س",
    featured: false
  }
];

const benefits = [
  {
    icon: "🧠",
    title: "القصص تحفّز نمو عقلهم",
    detail: "القصص قبل النوم تزيد نمو عقل الطفل بـ 31%"
  },
  {
    icon: "😴",
    title: "قصص تحمسهم ينامون بدري",
    detail: "54% من الأطفال صاروا يبون ينامون بدري عشان يسمعون القصص"
  },
  {
    icon: "💜",
    title: "قصص ومواقف يتذكرونها لما يكبرون",
    detail: "أطفالك باكر يبنون قصصك لما يكبرون"
  }
];

export const metadata = {
  title: "اشتركي في قصص النوم",
  description: "اختاري خطة الاشتراك لتجربة قصص النوم المخصصة بصوتك."
};

export default function SubscribePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06101f] px-3 py-3 text-white" dir="rtl">
      <div className="subscription-sky" aria-hidden="true" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-[345px] flex-col">
        <div className="mx-auto w-full max-w-[302px]">
          <div className="review-cloud">
            <p className="text-[0.88rem] font-black text-[#66616b]">سارة آل.</p>
            <div className="mt-1 text-[0.8rem] leading-none text-[#f5c943]" aria-label="5 نجوم">
              ★★★★★
            </div>
            <p className="mx-auto mt-2 max-w-[13.7rem] text-[0.78rem] font-extrabold leading-5 text-[#5147bd]">
              الله يجازيكم خير الجزاء ما تتخيلون قد إيش ريّحتوني و فرّحتوا البنات شكراً لكم جزيل الشكر
            </p>
            <div className="mt-2 text-base leading-none text-[#725be8]">•••</div>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-center">
          <h1 className="text-balance text-[1.45rem] font-black leading-[1.2] text-white">
            قصص كل يوم، طفلك بطل القصة ،
            <span className="relative mx-auto mt-1 block w-fit text-[1.7rem] text-white">
              بصوتك
              <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-[2px] w-20 rounded-full bg-[#8b72ff]" aria-hidden="true" />
            </span>
          </h1>
        </div>

        <div className="mt-5 space-y-2.5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-2 text-right">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center text-[1.18rem]" aria-hidden="true">
                {benefit.icon}
              </span>
              <div className="min-w-0">
                <p className="text-[0.94rem] font-black leading-5 text-white">{benefit.title}</p>
                <p className="mt-0.5 text-[0.62rem] font-semibold leading-4 text-white/48">{benefit.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {plans.map((plan) => (
            <button
              key={plan.duration}
              type="button"
              className={`relative flex min-h-[3.45rem] w-full items-center justify-between rounded-xl px-5 text-right transition ${
                plan.featured
                  ? "border-2 border-[#eeeaff] bg-[#6657ee] shadow-[0_12px_35px_rgba(102,87,238,0.34)]"
                  : "border border-white/5 bg-[#2d2d2d] hover:bg-[#353535]"
              }`}
            >
              {plan.badge && (
                <span className="absolute right-4 top-0 -translate-y-[2px] rounded-b-md bg-white px-3 py-1 text-[0.78rem] font-black text-[#6657ee]">
                  {plan.badge}
                </span>
              )}
              <span className="text-right">
                <span className="block text-[1.28rem] font-black leading-none text-white">{plan.duration}</span>
                <span className="mt-1 block text-[0.85rem] font-bold leading-none text-white/78">{plan.total}</span>
              </span>
              <span className={`${plan.featured ? "text-[1.45rem]" : "text-[1rem]"} font-black leading-none text-white`}>
                {plan.price}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          dir="ltr"
          className="mx-auto mt-5 flex min-h-[3.05rem] w-[70%] items-center justify-center gap-2 rounded-lg bg-black text-xl font-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/25"
        >
          <svg className="h-6 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16.58 12.68c-.03-2.42 1.97-3.59 2.06-3.65-1.16-1.69-2.94-1.92-3.56-1.95-1.5-.16-2.95.89-3.71.89-.78 0-1.96-.87-3.23-.84-1.64.02-3.17.97-4.01 2.45-1.73 3-.44 7.39 1.22 9.81.83 1.18 1.8 2.5 3.08 2.45 1.24-.05 1.7-.79 3.19-.79 1.48 0 1.9.79 3.2.77 1.34-.03 2.18-1.19 2.98-2.38.96-1.35 1.34-2.69 1.36-2.76-.03-.01-2.55-.98-2.58-3.99ZM14.1 5.5c.67-.84 1.13-1.98 1-3.14-.97.04-2.19.67-2.89 1.48-.62.72-1.18 1.91-1.03 3.02 1.1.08 2.22-.55 2.92-1.36Z" />
          </svg>
          Pay
        </button>
      </section>
    </main>
  );
}

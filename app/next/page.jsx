const plans = [
  {
    duration: "3 أيام",
    price: "10 ريال / ليلة",
    total: "30 ريال",
    featured: false
  },
  {
    duration: "7 أيام",
    price: "5 ريال / الليلة",
    total: "35 ريال",
    badge: "وفر 50%",
    featured: true
  },
  {
    duration: "30 يوم",
    price: "3 ريال / ليلة",
    total: "90 ريال",
    featured: false
  }
];

export const metadata = {
  title: "اشتركي في قصص النوم",
  description: "اختاري خطة الاشتراك لتجربة قصص النوم المخصصة بصوتك."
};

export default function SubscribePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06101f] px-4 py-7 text-white" dir="rtl">
      <div className="subscription-sky" aria-hidden="true" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-md flex-col justify-center">
        <div className="mx-auto mb-6 w-full max-w-[19rem]">
          <div className="review-cloud">
            <p className="text-sm font-black text-[#56515f]">سارة آل.</p>
            <div className="mt-1 text-sm leading-none text-[#f4c95d]" aria-label="5 نجوم">
              ★★★★★
            </div>
            <p className="mt-3 text-sm font-extrabold leading-6 text-[#504ac2]">
              الله يجازيكم كل خير، ما تتخيلون قد إيش ريّحتوني وخلتوا البنات ينامون بهدوء آخر الليل
            </p>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <h1 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
            قصص كل يوم، طفلك بطل القصة،
            <span className="block text-[#ffe7a3]">بصوتك</span>
          </h1>
          <p className="mx-auto max-w-sm text-sm font-bold leading-7 text-[#cbd5f5]">
            القصص تتحرّك مع طفلك وتزرع قيم مفيدة بطريقة دافئة قبل النوم.
          </p>
        </div>

        <div className="mt-7 space-y-3">
          {plans.map((plan) => (
            <button
              key={plan.duration}
              type="button"
              className={`relative flex min-h-[4.05rem] w-full items-center justify-between rounded-2xl px-5 text-right transition ${
                plan.featured
                  ? "border-2 border-[#d8d0ff] bg-[#6957f2] shadow-[0_20px_55px_rgba(105,87,242,0.36)]"
                  : "border border-white/10 bg-white/12 hover:bg-white/16"
              }`}
            >
              {plan.badge && (
                <span className="absolute left-4 top-0 -translate-y-1/2 rounded-b-xl rounded-t-sm bg-white px-3 py-1 text-xs font-black text-[#6957f2]">
                  {plan.badge}
                </span>
              )}
              <span className="text-lg font-black text-white">{plan.duration}</span>
              <span className="text-left">
                <span className="block text-lg font-black text-white">{plan.price}</span>
                <span className="block text-xs font-bold text-white/75">{plan.total}</span>
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-black text-lg font-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/25"
        >
          <span className="text-xl" aria-hidden="true"></span>
          Pay
        </button>
      </section>
    </main>
  );
}

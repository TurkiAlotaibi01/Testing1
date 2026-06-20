const story =
  "هذي القصة موجهة [اسم الطفل]. قصة السمكة اللي كانت تسبح في البحر وتسمع كلام أمها وأبوها. في يوم من الأيام، كانت السمكة نيمو تلعب بين الشعب المرجانية، وفجأة شافت قدامها [اسم الطفل]. ابتسمت وقالت: اليوم عندنا مغامرة صغيرة نبي نسويها، بس لازم نسمع كلام أهلنا اول ونرجع قبل ما ينام البحر.";

function StoryText({ childName }) {
  const displayName = childName.trim() || "[اسم الطفل]";
  const parts = story.split("[اسم الطفل]");

  return (
    <p className="text-pretty text-lg font-bold leading-10 text-[#25305e] sm:text-xl sm:leading-[2.35]">
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <mark className="mx-1 inline-flex rounded-full bg-[#fff0b8] px-3 py-1 text-bedtime-navy shadow-[0_8px_22px_rgba(255,214,107,0.2)]">
              {displayName}
            </mark>
          )}
        </span>
      ))}
    </p>
  );
}

export default function StoryPreview({ childName, showAudioPreview }) {
  return (
    <section id="story-preview" className="min-w-0 scroll-mt-6 rounded-[2rem] border border-white/10 bg-[#0b1428]/78 p-4 shadow-[0_26px_90px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-6 lg:p-7">
      <div className="mb-5">
        <p className="text-sm font-extrabold text-[#ffe7a3]">معاينة القصة</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">قصتك جاهزة <span className="text-[#ffe7a3]">بصوتك</span></h2>
      </div>

      <div className="grid min-w-0 gap-5 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
        <div className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-[#f5e7bc]/40 bg-gradient-to-br from-[#fff8e5] via-[#f8fbff] to-[#ece8ff] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_55px_rgba(0,0,0,0.16)] sm:p-7">
          <span className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-bedtime-blue/35" aria-hidden="true" />
          <span className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-bedtime-rose/35" aria-hidden="true" />
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-bedtime-navy text-white shadow-lg" aria-hidden="true">
                ه
              </span>
              <div>
                <h3 className="text-xl font-black text-bedtime-navy">نص القصة</h3>
                <p className="text-sm font-bold text-[#667093]">هنا يظهر الاسم نفسه من التجربة بالأعلى.</p>
              </div>
            </div>
            <StoryText childName={childName} />
          </div>
        </div>

        <div className="flex min-h-64 min-w-0 flex-col justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 text-white sm:p-6">
          {showAudioPreview ? (
            <div className="space-y-5">
              <p className="text-lg font-black">عينة صوتية وهمية للقصة</p>
              <button
                type="button"
                className="flex w-full items-center gap-4 rounded-3xl border border-white/14 bg-white px-4 py-4 text-right text-bedtime-navy shadow-[0_18px_45px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bedtime-navy text-white" aria-hidden="true">
                  ▶
                </span>
                <span className="flex-1">
                  <span className="block text-base font-black">تشغيل العينة</span>
                  <span className="mt-2 block h-3 overflow-hidden rounded-full bg-[#e6e8ff]">
                    <span className="block h-full w-2/5 rounded-full bg-[#6558d8]" />
                  </span>
                </span>
                <span className="text-sm font-black text-[#687098]">0:15</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xl font-black">بعد التسجيل بتظهر هنا عينة القصة.</p>
              <p className="text-sm font-semibold leading-7 text-[#dfe4ff]">
                اضغطي اسمعي التجربة بعد ما تخلصين التسجيل.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

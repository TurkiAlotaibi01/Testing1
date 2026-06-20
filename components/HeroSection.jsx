export default function HeroSection() {
  return (
    <header className="relative z-20 flex min-w-0 flex-col items-center gap-7 rounded-[2rem] bg-[#07101f]/56 px-2 py-4 text-center backdrop-blur-[2px] lg:items-start lg:bg-transparent lg:px-0 lg:py-10 lg:text-right lg:backdrop-blur-0">
      <div className="w-full max-w-3xl min-w-0 space-y-4">
        <h1 className="text-balance break-words text-[2.35rem] font-black leading-[1.2] tracking-normal text-white min-[414px]:text-[2.55rem] sm:text-5xl lg:text-6xl">
          قصص نوم لأطفالك <span className="text-[#ffe7a3]">بصوتك</span>، حتى لو ما كنت حولهم
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-lg font-medium leading-9 text-[#d9ddff] lg:mx-0 sm:text-xl">
          خلّ طفلك <span className="font-extrabold text-white">بطل القصة</span>، واسمعها بصوتك وبأسلوب دافي قبل النوم.
        </p>
      </div>

      <div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <a
          href="/next"
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-8 text-base font-extrabold text-bedtime-navy shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-bedtime-cream focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
        >
          جرّب الحين
        </a>
      </div>
    </header>
  );
}

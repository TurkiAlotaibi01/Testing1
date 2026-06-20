const testimonials = [
  {
    name: "أم تركي",
    text: "اطفالي صاروا يبون ينامون بدري متحمسين يسمعون القصص, انا اختار الشيء الي ابي ازرعه فيهم , والبرنامج يقول القصة بصوتي و بشيء صار لعيالي خلال يومهم"
  },
  {
    name: "ريم",
    text: "ابوي مسافر و سويت قصة لاختي الصغيرة و القصة تتكلم عنها هي وعن اهمية الصلاة بصوت ابوي, شكرا شكرا شكرا ما تعرفون قد ايش يعنيلها"
  },
  {
    name: "محمد",
    text: "انا موظف وارجع الليل وما كان عندي وقت اسوي اشياء زي كذا, ما استوعبت اهميتها الا لما شفتهم حريصين على القصص الله يعطيكم العافية"
  }
];

export default function TestimonialCards() {
  return (
    <section aria-label="آراء أولية" className="relative">
      <div className="mb-5 text-center">
        <p className="text-sm font-black text-[#ffe7a3]">آراء من أولياء الأمور</p>
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">وش قالوا عن التجربة؟</h2>
      </div>
      <div className="testimonial-rail flex w-full max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="min-h-[210px] w-[min(20rem,80vw)] max-w-[80vw] shrink-0 snap-center rounded-[1.5rem] border border-white/80 bg-[#fbfbff] p-5 text-right text-bedtime-navy shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:w-auto sm:max-w-none sm:shrink"
          >
            <p className="text-[0.95rem] font-bold leading-8 text-[#26305e]">"{testimonial.text}"</p>
            <h3 className="mt-5 text-sm font-black text-[#665ccf]">{testimonial.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

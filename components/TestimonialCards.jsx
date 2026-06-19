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
    <section
      aria-label="آراء أولية"
      className="testimonial-rail flex w-full max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 sm:grid sm:max-w-4xl sm:grid-cols-3 sm:overflow-visible sm:pb-0"
    >
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.name}
          className="min-h-[190px] w-[min(19rem,78vw)] max-w-[78vw] shrink-0 snap-center rounded-[1.35rem] border border-[#eef0ff] bg-[#fbfbff] p-4 text-right text-bedtime-navy shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:w-auto sm:max-w-none sm:shrink"
        >
          <p className="text-[0.92rem] font-bold leading-7 text-[#26305e]">"{testimonial.text}"</p>
          <h2 className="mt-4 text-sm font-black text-[#5a62a1]">{testimonial.name}</h2>
        </article>
      ))}
    </section>
  );
}

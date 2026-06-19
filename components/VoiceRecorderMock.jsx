"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MAX_SECONDS = 20;

export default function VoiceRecorderMock({ childName, onChildNameChange, onPreviewRequest }) {
  const [status, setStatus] = useState("idle");
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  const displayName = childName.trim() || "[اسم الطفل]";
  const readSentence = `أنا اليوم بقول قصة لـ ${displayName}، والقصة بيكون فيها أشياء مفيدة وتزرع قيم مفيدة بإذن الله.`;
  const progress = useMemo(() => Math.min((elapsed / MAX_SECONDS) * 100, 100), [elapsed]);

  useEffect(() => {
    return () => window.clearInterval(intervalRef.current);
  }, []);

  function finishRecording(finalElapsed = elapsed) {
    window.clearInterval(intervalRef.current);
    setElapsed(Math.min(finalElapsed, MAX_SECONDS));
    setStatus("finished");
  }

  function startRecording() {
    window.clearInterval(intervalRef.current);
    setStatus("recording");
    setElapsed(0);

    intervalRef.current = window.setInterval(() => {
      setElapsed((current) => {
        const next = current + 1;
        if (next >= MAX_SECONDS) {
          window.clearInterval(intervalRef.current);
          setStatus("finished");
          return MAX_SECONDS;
        }
        return next;
      });
    }, 1000);
  }

  function handlePrimaryAction() {
    if (status === "idle") {
      startRecording();
      return;
    }

    if (status === "recording") {
      finishRecording(elapsed);
      return;
    }

    onPreviewRequest();
  }

  const buttonLabel =
    status === "recording" ? "إيقاف التسجيل" : status === "finished" ? "اسمع التجربة" : "ابدأ التسجيل";

  return (
    <section id="voice-trial" className="flex min-w-0 scroll-mt-6 flex-col rounded-[2rem] border border-white/12 bg-[#10183d]/76 p-2 text-white shadow-soft backdrop-blur-md sm:p-4 lg:p-5">
      <div className="relative flex min-h-full min-w-0 flex-col overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(145deg,rgba(28,37,89,0.96),rgba(35,31,91,0.94)_52%,rgba(20,29,70,0.98))] p-4 sm:p-7">
        <span className="absolute -left-16 top-5 h-36 w-36 rounded-full bg-[#8b7af0]/18 blur-3xl" aria-hidden="true" />
        <span className="absolute bottom-10 right-4 h-24 w-36 rounded-full bg-white/8 blur-2xl" aria-hidden="true" />

        <div className="relative">
          <h2 className="break-words text-3xl font-black leading-tight text-white sm:text-4xl">جرّب بصوتك</h2>
          <p className="mt-3 text-base font-semibold leading-7 text-[#dfe4ff]">
            اقرأ الجملة وسجّل صوتك
          </p>
        </div>

        <label className="relative mt-6 grid gap-2 text-right">
          <span className="text-sm font-extrabold text-[#edf0ff]">اسم الطفل</span>
          <input
            value={childName}
            onChange={(event) => onChildNameChange(event.target.value)}
            placeholder="مثلاً: تركي"
            className="min-h-14 w-full min-w-0 rounded-2xl border border-white/14 bg-white/95 px-5 text-lg font-extrabold text-bedtime-navy outline-none transition placeholder:text-[#7d84a3] focus:border-bedtime-yellow focus:ring-4 focus:ring-bedtime-yellow/20"
          />
        </label>

        <div className="relative mt-6 space-y-2">
          <p className="text-sm font-extrabold text-[#edf0ff]">قل بصوتك:</p>
          <p className="text-pretty break-words text-base font-bold leading-8 text-white sm:text-lg">
            "{readSentence}"
          </p>
        </div>

        <div className="relative mt-7 grid place-items-center">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="group grid h-32 w-32 place-items-center rounded-full bg-white text-bedtime-navy shadow-[0_22px_65px_rgba(255,255,255,0.18)] transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/30 sm:h-36 sm:w-36"
            aria-label={buttonLabel}
          >
            <span className="mic-glyph" aria-hidden="true" />
          </button>
          <p className="mt-4 text-center text-lg font-black text-white" aria-live="polite">
            {buttonLabel}
          </p>
        </div>

        <div className="relative mt-6 space-y-3">
          <div className="flex items-center justify-between gap-3 text-sm font-bold text-[#dfe4ff]">
            <span>
              {status === "recording"
                ? "التسجيل جارٍ"
                : status === "finished"
                  ? "تم التسجيل"
                  : "جاهز للتسجيل"}
            </span>
            <span>{status === "recording" ? `${elapsed}s` : ""}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/14">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

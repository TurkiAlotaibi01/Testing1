"use client";

import { useState } from "react";
import HeroSection from "../components/HeroSection";
import StoryPreview from "../components/StoryPreview";
import VoiceRecorderMock from "../components/VoiceRecorderMock";

export default function Home() {
  const [childName, setChildName] = useState("");
  const [showAudioPreview, setShowAudioPreview] = useState(false);

  function showStoryPreview() {
    setShowAudioPreview(true);
    window.requestAnimationFrame(() => {
      document.getElementById("story-preview")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-bedtime-navy text-white" dir="rtl">
      <div className="night-sky" aria-hidden="true">
        <span className="moon" />
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="cloud cloud-1" />
        <span className="cloud cloud-2" />
        <span className="cloud cloud-3" />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-14 pt-20 sm:px-6 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-6">
        <div id="try-now" className="grid min-h-[calc(100svh-3rem)] min-w-0 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <HeroSection />
          <VoiceRecorderMock
            childName={childName}
            onChildNameChange={setChildName}
            onPreviewRequest={showStoryPreview}
          />
        </div>

        <StoryPreview childName={childName} showAudioPreview={showAudioPreview} />
        <div className="flex justify-center">
          <a
            href="/next"
            className="inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-white px-10 text-lg font-extrabold text-bedtime-navy shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-bedtime-cream focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
          >
            جرّب الحين
          </a>
        </div>
      </section>
    </main>
  );
}

/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { Play, X, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
// Import photographs
import photo1 from "@/assets/highlights/2024/Collage 1.jpeg";
import photo2 from "@/assets/highlights/2024/Collage 2.jpeg";
import photo3 from "@/assets/highlights/2024/Collage 3.jpeg";
import photo4 from "@/assets/highlights/2025/Collage 1.jpeg";
import photo5 from "@/assets/highlights/2025/Collage 2.jpeg";
import photo6 from "@/assets/highlights/2025/Collage 3.jpeg";


// Import videos
import video2025 from "@/assets/highlights/2025/Highlight Video-compressed.mp4";
import video2024 from "@/assets/highlights/2024/Highlight Video-compressed.mp4";

type HighlightPhoto = {
  src: string;
  alt: string;
};

type HighlightEdition = {
  title: string;
  year: string;
  photos: HighlightPhoto[];
  video: string;
  videoTitle: string;
  videoPoster: string;
};

// Organise media by festival edition
const editions: HighlightEdition[] = [
  {
    title: "Chem Connect 5.0",
    year: "2025",

    photos: [
      { src: photo4, alt: "Chem Connect 5.0 memory 1" },
      { src: photo5, alt: "Chem Connect 5.0 memory 2" },
      { src: photo6, alt: "Chem Connect 5.0 memory 3" },
    ],

    video: video2025,
    videoTitle: "Chem Connect 5.0 Highlights",
    videoPoster: photo1,
  },

  {
    title: "Chem Connect 4.0",
    year: "2024",

    photos: [
      { src: photo1, alt: "Chem Connect 4.0 memory 1" },
      { src: photo2, alt: "Chem Connect 4.0 memory 2" },
      { src: photo3, alt: "Chem Connect 4.0 memory 3" },
    ],

    video: video2024,
    videoTitle: "Chem Connect 4.0 Highlights",
    videoPoster: photo1,
  },
];

export function Highlights() {
  const [activePhoto, setActivePhoto] = useState<HighlightPhoto | null>(null);

  const [activeVideo, setActiveVideo] = useState<HighlightEdition | null>(null);

  const closeViewer = () => {
    setActivePhoto(null);
    setActiveVideo(null);
  };

  // Close viewer using Escape key
  useEffect(() => {
    if (!activePhoto && !activeVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto, activeVideo]);

  return (
    <>
      <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          number={5}
          symbol="Hi"
          tone="red"
          eyebrow="memories from the past"
          title="Moments That Made History"
          intro="A look back at the experiments, celebrations and unforgettable memories from our previous editions."
        />

        <div className="space-y-20">
          {editions.map((edition, editionIndex) => (
            <Reveal key={edition.year} delay={editionIndex * 100}>
              <div>
                {/* Edition heading */}
                <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <p className="font-script text-xl text-accent">Looking back at</p>

                    <h3 className="font-display text-3xl uppercase tracking-wide text-primary sm:text-4xl">
                      {edition.title}
                    </h3>
                  </div>

                  <span className="font-mono text-sm tracking-widest text-ink-soft">
                    {edition.year}
                  </span>
                </div>

                {/* Photograph gallery */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                  {edition.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setActivePhoto(photo)}
                      aria-label={`View photograph ${index + 1} from ${edition.title}`}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-paper shadow-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/30">
                        <ArrowUpRight className="h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Featured video */}
                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(edition)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-primary text-left shadow-paper"
                    aria-label={`Play ${edition.videoTitle}`}
                  >
                    <div className="relative aspect-video max-h-[420px]">
                      <img
                        src={edition.videoPoster}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/40 p-5 text-center">
                        <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-1 h-7 w-7 fill-current" />
                        </span>

                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/80">
                          Watch the memories
                        </span>

                        <span className="mt-2 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                          {edition.videoTitle}
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image and video viewer */}
      {(activePhoto || activeVideo) && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto ? "Photograph viewer" : "Video player"}
          onClick={closeViewer}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={closeViewer}
            aria-label="Close viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {activePhoto && (
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          )}

          {activeVideo && (
            <div onClick={(event) => event.stopPropagation()} className="w-full max-w-5xl">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                poster={activeVideo.videoPoster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="max-h-[80vh] w-full rounded-xl bg-black shadow-2xl"
              >
                Your browser does not support video playback.
              </video>

              <p className="mt-3 text-center font-display text-xl uppercase tracking-wide text-white">
                {activeVideo.videoTitle}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

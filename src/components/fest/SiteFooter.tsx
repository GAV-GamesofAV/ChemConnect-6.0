import logo from "@/assets/chemistrecreate_logo.png.asset.json";
import glassware from "@/assets/glassware-row.jpg";
import { club, fest, navLinks, socials } from "@/data/fest";

export function SiteFooter() {
  return (
    <footer className="relative mt-10">
      <img
        src={glassware}
        alt=""
        aria-hidden="true"
        width={1920}
        height={640}
        loading="lazy"
        className="ink-blend relative mx-auto -mb-2 w-full max-w-4xl opacity-90"
      />
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex items-start gap-4">
            <img src={logo.url} alt={`${club.name} logo`} width={72} height={70} loading="lazy" className="h-18 w-18 shrink-0 rounded-full bg-paper object-contain p-0.5" />
            <div>
              <p className="font-display text-2xl uppercase tracking-wide">{club.name}</p>
              <p className="font-script text-xl text-amber">{club.motto}</p>
              <p className="mt-2 text-sm text-primary-foreground/75">{club.clubLabel}</p>
              <p className="text-sm text-primary-foreground/75">{club.school}</p>
              <p className="text-sm text-primary-foreground/75">{club.schoolAddress}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-primary-foreground/85 transition-colors hover:text-amber">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Follow</p>
            {socials.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/85 transition-colors hover:text-amber">{s.label}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm italic text-primary-foreground/70">Social links coming soon.</p>
            )}
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-[0.65rem] uppercase tracking-widest text-primary-foreground/60">
            © {club.name} · {fest.edition}
          </p>
        </div>
      </div>
    </footer>
  );
}

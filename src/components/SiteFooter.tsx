import logoAsset from "@/assets/jubmun-logo-white.png.asset.json";

export function SiteFooter() {
  return (
    <footer id="resources" className="mt-10 border-t border-secondary/25 px-6 py-12 text-center text-secondary/70">
      <img
        src={logoAsset.url}
        alt="JUBMUN emblem"
        loading="lazy"
        className="mx-auto h-16 w-16 object-contain opacity-80 transition-transform duration-500 hover:scale-105"
      />
      <p className="mt-4 text-xs uppercase tracking-[0.2em]">JUBMUN I · November 26 &amp; 27</p>
    </footer>
  );
}

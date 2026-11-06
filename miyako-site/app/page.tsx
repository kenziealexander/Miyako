/* eslint-disable @next/next/no-img-element */

const img = (name: string) => `/images/${name}.svg`;

const range = [
  { n: "01", name: "Rice Cooker", note: "Even heat, soft rice, warm for hours.", seed: "rice" },
  { n: "02", name: "Blender", note: "A heavy base and a motor that handles ice.", seed: "blender" },
  { n: "03", name: "Kipas Angin", note: "Strong airflow with very little noise.", seed: "fan" },
  { n: "04", name: "And more", note: "Kettles, irons and small appliances, same standard.", seed: "kettle" },
];

const principles = [
  { h: "Fewer parts, fewer failures", p: "We keep designs simple. Every part has a job, and anything that does not earn its place is removed." },
  { h: "Tested under real load", p: "Each unit runs before it ships. Cookers heat, blenders spin, fans oscillate. If it hesitates, it does not leave." },
  { h: "Made to be repaired", p: "Pots, jars, lids and blades are sold on their own. A worn part should never mean a new appliance." },
  { h: "Quiet on purpose", p: "Motors are balanced and mounted with dampers, because a good appliance should not be heard over the conversation." },
];

const sheet = [
  { name: "Rice Cooker", rows: [["Capacity", "1.8 L"], ["Inner pot", "Non-stick, removable"], ["Modes", "Cook, keep warm"], ["Warranty", "24 months"]] },
  { name: "Blender", rows: [["Jar", "1.5 L, dishwasher safe"], ["Blades", "Stainless steel"], ["Speeds", "3 plus pulse"], ["Warranty", "24 months"]] },
  { name: "Kipas Angin", rows: [["Height", "Adjustable stand"], ["Speeds", "3"], ["Sweep", "Wide oscillation"], ["Warranty", "24 months"]] },
];

const numbers = [
  ["24", "months", "warranty on every product"],
  ["7", "days", "replacement if faulty on arrival"],
  ["1", "standard", "the same test for every unit"],
];

const faqs = [
  ["Where can I buy Miyako?", "Through authorized retailers and our official online store. Write to us and we will point you to the nearest one."],
  ["What does the warranty cover?", "Manufacturing defects for 24 months. Normal wear on items like gaskets and jars is not covered, but replacements are available."],
  ["Can I buy spare parts?", "Yes. Inner pots, lids, jars and blades are sold separately."],
  ["Do you supply businesses?", "Yes. Restaurants, cafes and offices can write to us for a quote on larger orders."],
];

const css = `
html,body{margin:0;background:#fafaf7}
.mk{--bg:#fafaf7;--ink:#111110;--mute:#6f6e68;--line:#dcdad3;--soft:#efeee8;--accent:#d2461c;
  background:var(--bg);color:var(--ink);font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased}
.mk *{box-sizing:border-box;margin:0;padding:0}
.mk a{color:inherit;text-decoration:none}
.mk img{display:block;width:100%;height:100%;object-fit:cover}
.mk :focus-visible{outline:2px solid var(--accent);outline-offset:3px}
.wrap{max-width:1240px;margin:0 auto;padding:0 32px}
.mono{font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mute)}
.display{font-weight:500;letter-spacing:-0.045em;line-height:.95}
section{padding:120px 0}
h2.display{font-size:clamp(34px,5vw,64px)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 26px;background:var(--ink);color:var(--bg)!important;font-size:15px;border-radius:999px;transition:background .2s}
.btn:hover{background:var(--accent)}
.ulink{font-size:15px;border-bottom:1px solid currentColor;padding-bottom:1px;transition:color .2s}
.ulink:hover{color:var(--accent)}

/* nav */
.nav{display:flex;justify-content:space-between;align-items:center;height:72px;border-bottom:1px solid var(--line)}
.logo{font-weight:600;font-size:20px;letter-spacing:-0.02em}
.nav ul{display:flex;gap:28px;list-style:none;font-size:14px}
.nav ul a{color:var(--mute);transition:color .2s}
.nav ul a:hover{color:var(--ink)}

/* hero */
.hero{padding:0}
.hero h1{font-size:clamp(52px,9.4vw,148px);margin:20px 0 0}
.hero h1 span{display:block}
.hero-meta{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:end;margin-top:48px}
.hero-meta p{font-size:19px;color:var(--mute);max-width:400px}
.hero-cta{display:flex;gap:28px;align-items:center;justify-content:flex-end}
.hero-img{margin-top:64px;aspect-ratio:21/9;background:var(--soft);overflow:hidden}

/* index */
.sec-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:56px;gap:24px}
.idx{border-top:1px solid var(--ink)}
.irow{display:grid;grid-template-columns:72px 1.2fr 1.4fr 160px;gap:24px;align-items:center;padding:28px 0;border-bottom:1px solid var(--line);transition:padding .25s}
.irow:hover{padding-left:12px}
.irow .nm{font-size:clamp(28px,3.6vw,48px);letter-spacing:-0.035em;font-weight:500;line-height:1}
.irow .nt{color:var(--mute);font-size:16px}
.irow .th{aspect-ratio:4/3;overflow:hidden;background:var(--soft)}
.irow .th img{transition:transform .5s}
.irow:hover .th img{transform:scale(1.06)}

/* figure */
.fig{padding:0}
.fig-img{aspect-ratio:16/8;overflow:hidden;background:var(--soft)}
.fig-cap{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;padding-top:20px}

/* principles (sticky split) */
.pr-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:96px}
.pr-left{position:sticky;top:48px;align-self:start}
.pr-left h2{margin-top:16px}
.pr-item{padding:36px 0;border-top:1px solid var(--line)}
.pr-item:first-child{border-top:1px solid var(--ink);padding-top:28px}
.pr-item h3{font-size:26px;letter-spacing:-0.03em;font-weight:500;margin-bottom:10px}
.pr-item p{color:var(--mute);max-width:460px}

/* datasheet */
.ds{background:var(--soft)}
.ds-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--ink)}
.ds-col{padding:32px 32px 8px 0}
.ds-col+.ds-col{padding-left:32px;border-left:1px solid var(--line)}
.ds-col h3{font-size:32px;letter-spacing:-0.04em;font-weight:500;margin-bottom:28px}
.ds-col dl div{display:flex;justify-content:space-between;gap:16px;padding:14px 0;border-top:1px solid var(--line);font-size:15px}
.ds-col dt{color:var(--mute)}
.ds-col dd{text-align:right}

/* mosaic */
.mosaic{display:grid;grid-template-columns:repeat(12,1fr);gap:16px;align-items:end}
.m1{grid-column:span 5;aspect-ratio:4/5}
.m2{grid-column:span 4;aspect-ratio:1/1}
.m3{grid-column:span 3;aspect-ratio:3/4}
.mosaic div{overflow:hidden;background:var(--soft)}

/* numbers */
.nums{padding:0}
.nums-row{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--ink);border-bottom:1px solid var(--line)}
.num{padding:56px 0}
.num+.num{padding-left:32px;border-left:1px solid var(--line)}
.num b{font-size:clamp(72px,10vw,140px);letter-spacing:-0.05em;font-weight:500;line-height:.9}
.num i{font-style:normal;font-size:20px;margin-left:10px}
.num p{margin-top:14px;color:var(--mute)}

/* faq */
.faq-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:96px}
.faq-grid h2{margin-top:16px}
details{border-top:1px solid var(--line);padding:26px 0}
details:first-child{border-top:1px solid var(--ink)}
details:last-child{border-bottom:1px solid var(--line)}
summary{cursor:pointer;font-size:22px;letter-spacing:-0.02em;list-style:none;display:flex;justify-content:space-between;gap:24px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";color:var(--accent);font-size:26px;line-height:1;transition:transform .25s}
details[open] summary::after{transform:rotate(45deg)}
details p{margin-top:14px;color:var(--mute);max-width:560px}

/* contact + footer */
.contact{background:var(--ink);color:var(--bg);padding:120px 0 0}
.contact h2{font-size:clamp(44px,8vw,120px)}
.contact h2 span{display:block}
.contact .row{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap;margin-top:56px}
.contact p.sub{color:#b9b7ae;max-width:380px;font-size:18px}
.contact .btn{background:var(--bg);color:var(--ink)!important}
.contact .btn:hover{background:var(--accent);color:#fff!important}
.foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-top:96px;padding:28px 0 36px;border-top:1px solid #34332f;font-size:14px;color:#b9b7ae}

@media (max-width:860px){
  section{padding:80px 0}
  .nav ul{display:none}
  .hero-meta{grid-template-columns:1fr}
  .hero-cta{justify-content:flex-start}
  .hero-img{aspect-ratio:4/3}
  .irow{grid-template-columns:44px 1fr 96px;gap:16px}
  .irow .nt{display:none}
  .fig-img{aspect-ratio:4/3}
  .fig-cap{grid-template-columns:1fr;gap:8px}
  .pr-grid,.faq-grid{grid-template-columns:1fr;gap:40px}
  .pr-left{position:static}
  .ds-grid,.nums-row{grid-template-columns:1fr}
  .ds-col,.ds-col+.ds-col{padding:28px 0 4px;border-left:0}
  .ds-col+.ds-col{border-top:1px solid var(--line)}
  .num,.num+.num{padding:36px 0;border-left:0}
  .num+.num{border-top:1px solid var(--line)}
  .mosaic{grid-template-columns:1fr 1fr}
  .m1{grid-column:span 2}
  .m2,.m3{grid-column:span 1}
}
@media (prefers-reduced-motion:reduce){.mk *{transition:none!important}}
`;

export default function Page() {
  return (
    <div className="mk">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* 1. Hero: oversized type, then wide image */}
      <header className="hero">
        <div className="wrap">
          <nav className="nav" aria-label="Main">
            <a href="#top" className="logo">Miyako</a>
            <ul>
              <li><a href="#range">Range</a></li>
              <li><a href="#craft">Craft</a></li>
              <li><a href="#specs">Specs</a></li>
              <li><a href="#faq">Questions</a></li>
            </ul>
            <a href="#contact" className="ulink">Contact</a>
          </nav>
          <div id="top" style={{ paddingTop: 72 }}>
            <span className="mono">Home electronics, Indonesia</span>
            <h1 className="display">
              <span>Made to be</span>
              <span>used every day.</span>
            </h1>
            <div className="hero-meta">
              <p>Rice cookers, blenders and fans for homes that cook, cool and clean all day.</p>
              <div className="hero-cta">
                <a href="#range" className="btn">See the range <span aria-hidden="true">&rarr;</span></a>
                <a href="#contact" className="ulink">Where to buy</a>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={img("hero")} alt="Miyako rice cooker, blender, fan and kettle lined up on a counter" width={1600} height={686} />
          </div>
        </div>
      </header>

      {/* 2. Range: index list with thumbnails */}
      <section id="range">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="display">The range</h2>
            <span className="mono">04 product lines</span>
          </div>
          <div className="idx">
            {range.map((r) => (
              <a href="#specs" className="irow" key={r.n}>
                <span className="mono">{r.n}</span>
                <span className="nm">{r.name}</span>
                <span className="nt">{r.note}</span>
                <span className="th">
                  <img src={img(r.seed)} alt={`${r.name} by Miyako`} width={480} height={360} loading="lazy" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Figure: single wide image with caption columns */}
      <section className="fig" aria-label="In the kitchen">
        <div className="wrap">
          <div className="fig-img">
            <img src={img("figure")} alt="A Miyako kettle, rice cooker and blender on a kitchen counter" width={1600} height={800} loading="lazy" />
          </div>
          <div className="fig-cap">
            <span className="mono">Fig. 01</span>
            <span className="mono">Everyday cooking</span>
            <span className="mono">Built for the whole household</span>
          </div>
        </div>
      </section>

      {/* 4. Principles: sticky split */}
      <section id="craft">
        <div className="wrap pr-grid">
          <div className="pr-left">
            <span className="mono">How we build</span>
            <h2 className="display">Simple on purpose.</h2>
          </div>
          <div>
            {principles.map((p) => (
              <div className="pr-item" key={p.h}>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Datasheet: ruled columns */}
      <section className="ds" id="specs">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="display">Specs</h2>
            <span className="mono">The essentials</span>
          </div>
          <div className="ds-grid">
            {sheet.map((s) => (
              <div className="ds-col" key={s.name}>
                <h3>{s.name}</h3>
                <dl>
                  {s.rows.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mosaic: asymmetric image set */}
      <section aria-label="In the home">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="display">In the home</h2>
            <span className="mono">Daily use</span>
          </div>
          <div className="mosaic">
            <div className="m1"><img src={img("m1")} alt="Miyako rice cooker on a counter" width={800} height={1000} loading="lazy" /></div>
            <div className="m2"><img src={img("m2")} alt="Miyako blender filled with a smoothie" width={800} height={800} loading="lazy" /></div>
            <div className="m3"><img src={img("m3")} alt="Miyako stand fan" width={600} height={800} loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* 7. Numbers: big figures strip */}
      <section className="nums" aria-label="Commitments">
        <div className="wrap">
          <div className="nums-row">
            {numbers.map(([v, u, t]) => (
              <div className="num" key={t}>
                <b className="display">{v}</b>
                <i>{u}</i>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ: sticky-free split with accordion */}
      <section id="faq">
        <div className="wrap faq-grid">
          <div>
            <span className="mono">Questions</span>
            <h2 className="display">Before you buy.</h2>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact: dark type-led closing band, with footer */}
      <section className="contact" id="contact">
        <div className="wrap">
          <span className="mono">Get in touch</span>
          <h2 className="display" style={{ marginTop: 16 }}>
            <span>Let&rsquo;s find the</span>
            <span>right one for you.</span>
          </h2>
          <div className="row">
            <p className="sub">Tell us what you need and we will point you to the right Miyako product and the nearest place to buy it.</p>
            <a href="mailto:hello@miyako.example" className="btn">Contact us <span aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="foot">
            <span>Miyako</span>
            <span>Rice cookers, blenders, kipas angin and more.</span>
            <span>&copy; 2026 PT Miyako</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Six-Figure Venue Engine — middle sections: Mechanism (E), Differentiators (F), Proof Gallery

// E. Introducing the New Mechanism — The Ad-Fueled Booking OS
function Mechanism() {
  const engine = [
  { t: "Tested ad creative", b: "Venue-specific ads that stop the scroll and reach couples and planners actively looking." },
  { t: "Quiz funnel", b: "Pre-qualifies every lead by event type, date, guest count, and budget before they reach you." },
  { t: "GHL Booking OS", b: "Pipelines, tags, automations, reminders, calendars — installed for you, owned by you." },
  { t: "Instant AI follow-up", b: "Answers and books leads the second they come in, day or night. Speed-to-lead, automated." },
  { t: "Tour-close process", b: "Scripts and qualification so the qualified tours actually turn into signed contracts." }];

  const weeks = [
  {
    cls: 's-launch', n: "Week 1", wk: "Ads live", ttl: "Launch",
    items: [
    "Ad account, pixel, lead capture wired",
    "$35/day live, first tested campaign running",
    "We do the GHL install for you",
    "First tours usually inside 14 days"]

  },
  {
    cls: 's-market', n: "Week 2", wk: "Catch it all", ttl: "Capture",
    items: [
    "Custom quiz funnel goes live",
    "Speed-to-lead auto-response so nothing leaks",
    "Warm-list reactivation blast for fast wins",
    "Every paid lead tracked from click to source"]

  },
  {
    cls: 's-close', n: "Weeks 3–6", wk: "Tighten", ttl: "Close",
    items: [
    "Tour-close scripts + decision-maker qualification",
    "Pricing + offer refinement",
    "Scale the winning ad sets",
    "Weekly optimization on the engine"]

  },
  {
    cls: 's-scale', n: "Weeks 7–12", wk: "Fill it", ttl: "Fill",
    items: [
    "Drive to 10 qualified, shown tours",
    "Run the Seasonal Calendar Fill Plan",
    "Bi-weekly strategy keeps the plan clear",
    "Hand off to the Booking OS Care Plan"]

  }];

  return (
    <section id="mechanism" style={{ background: 'var(--jet-black)', borderTop: '1px solid var(--line-dark)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The mechanism</div>
          <h2 className="section">The Ad-Fueled Booking OS.</h2>
          <p className="lede">It's simple enough to draw on a napkin. Fuel in → engine → booked tours out. Not "we run your ads," and not "here's some software" — a complete, owned system with one job: convert ad spend into booked tours.</p>
        </div>

        {/* Napkin diagram: Fuel -> Engine -> Tours */}
        <div className="flow">
          <div className="flow-node fuel" data-comment-anchor="b09839cde3-div-61-11">
            <div className="fn-label">The fuel</div>
            <div className="fn-big">$35<span>/day</span></div>
            <div className="fn-sub">~$1,000/mo in <strong>your own</strong> Meta account. Your money, your card.</div>
          </div>
          <div className="flow-arrow" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
          </div>
          <div className="flow-node engine">
            <div className="fn-label" data-comment-anchor="f8b744e0e2-div-70-13">The engine</div>
            <div className="fn-mid">Ad creative · quiz funnel · GHL Booking OS · AI follow-up · tour close</div>
            <div className="fn-sub">Built and run for you. ~90% done-for-you, by design.</div>
          </div>
          <div className="flow-arrow" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
          </div>
          <div className="flow-node output">
            <div className="fn-label">The output</div>
            <div className="fn-big">10<span> tours</span></div>
            <div className="fn-sub">Qualified, shown tours booked straight onto your calendar. You just host them.</div>
          </div>
        </div>

        {/* Read this twice callout */}
        <div className="warn-callout">
          <div className="wc-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
          </div>
          <div>
            <strong style={{ color: '#fff' }}>Read this twice:</strong>{' '}
            the $35/day is paid into <em style={{ color: '#7CD7A8', fontStyle: 'normal' }}>your</em> Meta account — not to us. It's not a fee. It's the fuel that makes the guarantee real. The ad budget isn't a hidden cost buried in the fine print — it's the thing that makes the whole guarantee possible.
          </div>
        </div>

        {/* Quiz funnel — the unique mechanism, highlighted */}
        <div className="qf-feature">
          <div>
            <div className="eyebrow">The unfair advantage</div>
            <h3>Mobile quiz funnels that book the right events on the right days.</h3>
            <p>Traditional “click the ad” traffic sends you whoever clicks. Our mobile-optimized quiz funnels qualify every lead at a <strong style={{ color: '#fff' }}>significantly lower cost-per-lead</strong> than standard ads — then route each booking to protect your most valuable dates.</p>
            <ul className="qf-list">
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 10-10" /></svg><span>Premium events and bigger budgets get steered toward <strong style={{ color: '#fff' }}>Fridays &amp; Saturdays.</strong></span></li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 10-10" /></svg><span>Lower-budget or off-target inquiries fill your <strong style={{ color: '#fff' }}>slow weekdays</strong> — so prime dates stay open for premium bookings.</span></li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 10-10" /></svg><span>Every lead scored by event type, date, guest count, and budget before it ever hits your calendar.</span></li>
            </ul>
          </div>
          <div className="qf-routing">
            <div className="qf-routing-h">Smart calendar routing</div>
            <div className="qf-week">
              {[
              { d: 'Mon', k: 'off' }, { d: 'Tue', k: 'off' }, { d: 'Wed', k: 'off' }, { d: 'Thu', k: 'off' },
              { d: 'Fri', k: 'peak' }, { d: 'Sat', k: 'peak' }, { d: 'Sun', k: 'off' }].
              map((x, i) =>
              <div key={i} className={"qf-day " + x.k}>
                  <span className="dn">{x.d}</span>
                  <span className="pill">{x.k === 'peak' ? 'Premium' : 'Off-peak'}</span>
                </div>
              )}
            </div>
            <div className="qf-legend">
              <span><i className="qf-dot" style={{ background: 'var(--accent-bright)' }}></i> Premium → Fri &amp; Sat</span>
              <span><i className="qf-dot" style={{ background: 'rgba(255,255,255,0.18)' }}></i> Off-peak fills → weekdays</span>
            </div>
          </div>
        </div>

        {/* The engine, line by line */}
        <div className="engine-grid">
          {engine.map((e, i) =>
          <div key={i} className="engine-card">
              <div className="ec-dot"><span>{i + 1}</span></div>
              <div>
                <h4>{e.t}</h4>
                <p>{e.b}</p>
              </div>
            </div>
          )}
        </div>

        {/* Delivery sequence — ads-first */}
        <div className="seq-head">
          <div className="eyebrow">How the 90 days run</div>
          <h3 className="seq-title">Ads-first. No three-month "strategy phase."</h3>
        </div>
        <div className="stages">
          {weeks.map((s, i) =>
          <div key={i} className={"stage " + s.cls}>
              <div className="nb">
                <span>{s.n}</span>
                <span className="wk">{s.wk}</span>
              </div>
              <h3>{s.ttl}</h3>
              <ul>
                {s.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// F. What Makes This Different
function Differentiators() {
  const diffs = [
  {
    ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12l2 2 4-4" /></svg>,
    t: "You touch zero tech",
    b: "We install everything for you — the ad account, the pixel, the funnel, the GHL build, the automations, the follow-up. You approve copy and host tours. ~90% done-for-you, by design."
  },
  {
    ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>,
    t: "Ads live in Week 1",
    b: "First tours usually inside 14 days. No three-month strategy phase — we lead with traffic and stack the rest of the engine behind it, so you see movement fast."
  },
  {
    ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
    t: "You own the engine",
    b: "The ads, funnel, CRM, data, and dashboard are yours and stay yours. Stop working with us someday and you keep the entire machine. An agency hands you clicks; we hand you an asset."
  },
  {
    ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>,
    t: "The guarantee is tied to the input",
    b: "Most programs guarantee a result they don't control the inputs to. We require the input — $35/day in your account — so we can stand fully behind the tours. You bring the fuel; we guarantee the tours."
  },
  {
    ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg>,
    t: "It's a fourth category",
    b: "Not an agency (you'd own nothing). Not a course (no install, no execution). Not software (no strategy, no close). A done-for-you, ad-fueled Booking OS you own — there's nothing else to shop it against."
  }];

  const rows = [
  { label: "Own the system", omg: true, agency: false, course: 'partial', software: true },
  { label: "Done-for-you build + management", omg: true, agency: 'partial', course: false, software: false },
  { label: "Performance guarantee", omg: true, agency: false, course: false, software: false },
  { label: "Ads live in Week 1", omg: true, agency: 'partial', course: false, software: false },
  { label: "You touch zero tech", omg: true, agency: 'partial', course: false, software: false }];

  return (
    <section style={{ background: 'var(--charcoal)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What makes this different</div>
          <h2 className="section">Not an agency. Not a course. Not software.</h2>
        </div>
        <div className="diff-grid five">
          {diffs.map((d, i) =>
          <div key={i} className="diff-card">
              <div className="ico">{d.ico}</div>
              <h4>{d.t}</h4>
              <p>{d.b}</p>
            </div>
          )}
        </div>

        {/* Comparison table */}
        <div className="cmp-wrap">
          <table className="cmp-table">
            <thead>
              <tr>
                <th className="rowlabel"></th>
                <th className="us">OMG</th>
                <th>Agency</th>
                <th>Course</th>
                <th>Software</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) =>
              <tr key={i}>
                  <td className="rowlabel">{r.label}</td>
                  <td className="us"><Mark v={r.omg} /></td>
                  <td><Mark v={r.agency} /></td>
                  <td><Mark v={r.course} /></td>
                  <td><Mark v={r.software} /></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

}

function Mark({ v }) {
  if (v === true) return (
    <span className="mk yes" title="Yes">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 10-10" /></svg>
    </span>);

  if (v === 'partial') return <span className="mk partial" title="Sometimes">~</span>;
  return (
    <span className="mk no" title="No">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
    </span>);

}

function ProofGallery({ show = true }) {
  const cards = [
  {
    src: 'assets/proof-shamarly.jpg',
    nm: 'Shamarly Borgelin · Multi-venue owner, FL',
    ds: '$76,000/month from a single venue space · pinned in the OMG Rentals community'
  },
  {
    src: 'assets/proof-dashboard.jpg',
    nm: 'One client dashboard · 92 days',
    ds: '740 leads · 136 tours · 53 events booked (+700%)'
  },
  {
    src: 'assets/proof-mike.png',
    nm: 'Mike Robinson · Studio 131 Weddings & Events, FL',
    ds: '$35,000 → $75,000 in a single month'
  },
  {
    src: 'assets/proof-melinda-beforeafter.jpg',
    nm: 'Melinda Perez · 14-acre wedding & festival venue',
    ds: 'From $0 and no system to two $20K+ bookings'
  },
  {
    src: 'assets/proof-melinda-stats.jpg',
    nm: '$40,500 from two bookings',
    ds: 'Three months in — Melinda Perez'
  },
  {
    src: 'assets/proof-dylan.jpg',
    nm: 'Dylan Johnson · Founder, OMG Rentals',
    ds: 'Built 2 venues past $35K/mo · 1,500+ owners taught · 4 years building the system'
  }];

  const n = cards.length;
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touch = React.useRef(null);
  const go = React.useCallback((d) => setI((p) => (p + d + n) % n), [n]);

  React.useEffect(() => {
    if (!show || paused) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [show, paused, n]);

  if (!show) return null;

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const c = cards[i];
  return (
    <section id="proof" className="proof-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: '#7CD7A8' }}>Receipts</div>
          <h2 className="section" style={{ color: '#fff' }}>Real venues. Real numbers. Real receipts.</h2>
          <p className="lede">Screenshots from the OMG Rentals community and VIP client dashboards. Same system, different venues, same shape of result.</p>
        </div>

        <div className="proof-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}>
          <div className="pc-coverflow" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {cards.map((card, idx) => {
              let off = idx - i;
              if (off > n / 2) off -= n;else
              if (off < -n / 2) off += n;
              const abs = Math.abs(off);
              const isCenter = off === 0;
              const isPeek = abs === 1;
              const scale = isCenter ? 1 : isPeek ? 0.82 : 0.66;
              const opacity = isCenter ? 1 : isPeek ? 0.45 : 0;
              return (
                <div
                  className={"cf-card" + (isCenter ? " is-center" : "")}
                  key={idx}
                  aria-hidden={!isCenter}
                  onClick={isPeek ? () => setI(idx) : undefined}
                  style={{
                    transform: `translate(calc(-50% + (${off}) * var(--cf-shift, 70%)), -50%) scale(${scale})`,
                    opacity,
                    zIndex: Math.max(0, 30 - abs * 10),
                    pointerEvents: abs <= 1 ? 'auto' : 'none',
                    cursor: isPeek ? 'pointer' : 'default'
                  }}>
                  <div className="pc-img"><img src={card.src} alt={card.nm} loading="lazy" draggable="false" /></div>
                </div>);

            })}
            <button className="pc-arrow prev" onClick={() => go(-1)} aria-label="Previous result">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button className="pc-arrow next" onClick={() => go(1)} aria-label="Next result">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
            <span className="pc-tag">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          </div>

          <div className="pc-meta">
            <div className="pc-cap" key={i}>
              <div className="nm">{c.nm}</div>
              <div className="ds">{c.ds}</div>
            </div>
            <div className="pc-dots">
              {cards.map((_, idx) =>
              <button key={idx} className={"pc-dot" + (idx === i ? " on" : "")} onClick={() => setI(idx)} aria-label={"Go to result " + (idx + 1)}></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Mechanism, Differentiators, ProofGallery, Mark });

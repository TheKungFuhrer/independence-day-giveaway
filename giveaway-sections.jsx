// Independence Day Giveaway — entry page sections.
// Reuses OMG Rentals brand styling from styles.css; only the conversion goal changes:
// ONE action — submit a free giveaway entry. No price, no book-a-call, no nav menu.

// ── Icons (Lucide-style, stroke 1.75–2) ──────────────────────────────────────
function GvArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
    </svg>);
}
function GvCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5 10-10" />
    </svg>);
}
function GvFuel() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
    </svg>);
}
function GvForm() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>);
}

// ── Reusable trust line ───────────────────────────────────────────────────────
function GvTrust() {
  const items = ['Free to enter', 'No purchase necessary', 'Drawing Mon Jul 6, 12 PM EST', 'US venue owners 18+'];
  return (
    <div className="gv-trust">
      {items.map((x, i) =>
        <React.Fragment key={i}>
          {i > 0 && <span className="gv-trust-sep" aria-hidden="true">·</span>}
          <span>{x}</span>
        </React.Fragment>
      )}
    </div>);
}

// ── Reusable countdown to Mon Jul 6 2026, 12 PM Eastern ───────────────────────
function GvCountdown({ size }) {
  const target = React.useMemo(() => new Date('2026-07-06T12:00:00-04:00').getTime(), []);
  const [left, setLeft] = React.useState(() => Math.max(0, target - Date.now()));
  React.useEffect(() => {
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const pad = (x) => String(x).padStart(2, '0');
  const d = Math.floor(left / 86400000);
  const h = Math.floor(left % 86400000 / 3600000);
  const m = Math.floor(left % 3600000 / 60000);
  const s = Math.floor(left % 60000 / 1000);
  const units = [['days', d], ['hrs', h], ['min', m], ['sec', s]];
  const cls = size === 'lg' ? ' gv-clock-lg' : size === 'sm' ? ' gv-clock-sm' : '';
  return (
    <div className={"vc-digits" + cls}>
      {units.map(([label, val], i) =>
        <React.Fragment key={label}>
          {i > 0 && <span className="vc-sep">:</span>}
          <div className="vc-unit"><b>{pad(val)}</b><i>{label}</i></div>
        </React.Fragment>
      )}
    </div>);
}

// ── Header — logo + single CTA, no nav menu ───────────────────────────────────
function GvHeader({ onEnter }) {
  return (
    <header className="site">
      <div className="wrap">
        <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src="assets/OMG-Rentals-Logo-Black.png" alt="OMG Rentals" style={{ height: 30 }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-bright)', paddingLeft: 12, borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
            <span>Independence Day Giveaway</span>
          </span>
        </a>
        <button className="btn btn-primary" onClick={onEnter} style={{ padding: '10px 16px', fontSize: 14 }}>Enter Free <GvArrow /></button>
      </div>
    </header>);
}

// ── 1. Hero ───────────────────────────────────────────────────────────────────
function GvHero({ onEnter }) {
  return (
    <section className="hero">
      <div className="hero-inner gv-rise">
        <div className="hero-copy">
          <div className="eyebrow" style={{ marginBottom: 22 }}>Independence Day Giveaway · America's 250th · One Venue Wins</div>
          <h1>Declare Independence From <em>Empty Dates.</em></h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: 600 }}>
            One independent venue wins the <strong style={{ color: '#fff' }}>$13,997 Booking Engine</strong> — built and run for them, free. The same system behind a venue that hit <strong style={{ color: '#fff' }}>$76K a month.</strong> Enter free before Monday, July 6.
          </p>
          <div className="hero-meta">
            <button className="btn btn-primary btn-lg" onClick={onEnter}>Enter Free — Win the $13,997 Engine <GvArrow /></button>
          </div>
          <div style={{ marginTop: 24 }}><GvTrust /></div>
        </div>

        <div className="hero-visual">
          <div className="gv-prize">
            <div className="eyebrow">The prize</div>
            <div className="pz-amount">$13,997</div>
            <div className="pz-desc">The complete Ad-Fueled Booking Engine — built and run for one venue, free.</div>
            <div className="pz-rows">
              <div className="pz-row"><span className="k">Winners</span><span className="val">1 venue</span></div>
              <div className="pz-row"><span className="k">Entry</span><span className="val">Free</span></div>
              <div className="pz-row"><span className="k">Eligibility</span><span className="val">US venue owners 18+</span></div>
            </div>
            <div className="pz-clock">
              <div className="pz-clock-label">Entries close in</div>
              <GvCountdown size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// ── 2. What You Win — value stack (kept), reframed as the prize ────────────────
const GV_GROUPS = [
  {
    ttl: 'Core engine', tag: '90-day done-for-you', total: '$5,000',
    items: [
      { name: 'Ad-Fueled Booking OS — 90-day DFY build + management', sub: 'Meta/Google campaigns built, launched, and optimized for your top event types', val: '$5,000' }]
  },
  {
    ttl: 'Supporting assets', tag: 'Installed for you', total: '$3,000',
    items: [
      { name: 'Week-1 Ads-Live Launch', sub: 'Ad account, pixel, lead capture wired, $35/day live, first campaign running', val: '$1,500' },
      { name: 'Custom venue-branded Quiz Funnel', sub: 'Pre-qualifies every lead by event type, date, guest count, budget', val: '$500' },
      { name: 'Booking OS installed in GHL', sub: 'Pipelines, tags, automations, reminders, calendars — owned by the winner', val: '$750' },
      { name: 'Attribution Dashboard', sub: 'Every tour tracked from click to source', val: '$250' }]
  },
  {
    ttl: 'Accelerators', tag: 'Fast early wins', total: '$2,250',
    items: [
      { name: 'Warm-List Reactivation Blast', sub: 'Books tours from the existing list while paid traffic ramps', val: '$1,250' },
      { name: '90-Day Booking Calendar Audit + Roadmap', sub: '1-to-1 kickoff that maps the exact path to 10 tours', val: '$1,000' }]
  },
  {
    ttl: 'Accountability', tag: 'Live, 90 days', total: '$2,000',
    items: [
      { name: 'Weekly optimization + bi-weekly strategy calls', sub: 'We keep tuning the engine; the winner always knows the plan', val: '$1,500' },
      { name: 'Priority Support', sub: 'Same-day weekday response for the entire build', val: '$500' }]
  },
  {
    ttl: 'Bonuses', tag: 'Multipliers', total: '$1,747',
    items: [
      { name: 'Tour Close Playbook', sub: 'Scripts + follow-up cadences + decision-maker qualification', val: '$1,200' },
      { name: 'Seasonal Calendar Fill Plan', sub: '4 plug-and-play quarterly promo campaigns', val: '$547' }]
  }];

function GvRow({ name, sub, val }) {
  return (
    <div className="stack-row">
      <div className="name">
        <span className="rcheck"><GvCheck /></span>
        <span className="rtext">{name}{sub && <small>{sub}</small>}</span>
      </div>
      <div className="val">{val}</div>
    </div>);
}

function GvWhatYouWin() {
  return (
    <section style={{ background: 'var(--jet-black)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What you win</div>
          <h2 className="section">One venue wins the entire $13,997 Booking Engine — free.</h2>
          <p className="lede">Here's the engine the winning venue gets, built and run for them. Every line is something we'd normally build into a paid done-for-you program — itemized so you can see exactly what's on the table.</p>
        </div>

        <div className="stack">
          {GV_GROUPS.map((g, gi) =>
            <section className="stack-section" key={gi}>
              <div className="stack-section-head">
                <div className="ttl" style={{ fontSize: '14px' }}>{g.ttl}</div>
                <div className="sub" style={{ fontSize: '14px' }}>{g.tag}</div>
              </div>
              {g.items.map((it, ii) => <GvRow key={ii} name={it.name} sub={it.sub} val={it.val} />)}
              <div className="stack-subtotal"><span>Subtotal</span><span>{g.total}</span></div>
            </section>
          )}

          <div className="stack-total">
            <div>
              <div className="lbl" style={{ fontSize: '15px' }}>Total value — the winner's, free</div>
              <div className="stack-total-sub" style={{ fontSize: '15px' }}>The winning venue pays $0 for the build</div>
            </div>
            <div className="v">$13,997</div>
          </div>
        </div>

        {/* The one condition */}
        <div className="warn-callout" style={{ marginTop: 24 }}>
          <div className="wc-icon"><GvFuel /></div>
          <div>
            <strong style={{ color: '#fff' }}>The one thing the winner covers:</strong>{' '}
            about <strong style={{ color: 'var(--accent-bright)', fontWeight: 700 }}>$35/day in ad spend</strong> (~$1,000/mo), paid into the winner's own Meta account. That's the fuel the engine runs on — it's never paid to OMG. No entry fee, no build fee, no catch.
          </div>
        </div>
      </div>
    </section>);
}

// ── 4. How to Enter ───────────────────────────────────────────────────────────
function GvHowToEnter({ onEnter }) {
  const steps = [
    {
      n: '01', t: 'Fill out the free form',
      b: 'Tell us about your venue. It takes about two minutes — no payment, no call, nothing to buy.'
    },
    {
      n: '02', t: 'You’re qualified on submit',
      b: 'Every US venue owner 18+ who completes the form is entered. We ask about your venue and ad budget so the winner can actually run the engine.'
    },
    {
      n: '03', t: 'We draw one winner Mon Jul 6',
      b: 'One independent venue is drawn at 12 PM EST on Monday, July 6. We reach out the same day to start the build.'
    }];
  return (
    <section style={{ background: 'var(--charcoal)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">How to enter</div>
          <h2 className="section">Three steps. Two minutes. Free.</h2>
        </div>
        <div className="gv-steps">
          {steps.map((s) =>
            <div key={s.n} className="nm-card">
              <div className="idx">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <button className="btn btn-primary btn-lg" onClick={onEnter}>Enter Free — Win the $13,997 Engine <GvArrow /></button>
        </div>
      </div>
    </section>);
}

// ── 5. Entry Form — EMPTY container for the embedded survey ────────────────────
function GvEntryForm() {
  // Load the LeadConnector resizer once the iframe is in the DOM; it auto-sizes
  // the survey (which renders with scrolling="no") via postMessage.
  React.useEffect(() => {
    const SRC = 'https://links.omg-rentals.com/js/form_embed.js';
    if (document.querySelector('script[src="' + SRC + '"]')) return;
    const s = document.createElement('script');
    s.src = SRC; s.async = true;
    document.body.appendChild(s);
  }, []);
  return (
    <section id="entry" style={{ background: 'var(--jet-black)' }}>
      <div className="wrap">
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow">Enter now</div>
          <h2 className="section" style={{ marginInline: 'auto' }}>Enter the Giveaway — Free</h2>
          <p className="lede" style={{ marginInline: 'auto' }}>One entry per venue. Takes about two minutes — no payment, no call, nothing to buy.</p>
        </div>

        {/* Embedded giveaway survey (LeadConnector). Resized by form_embed.js above. */}
        <div className="gv-embed-live" id="entry-embed">
          <iframe
            src="https://links.omg-rentals.com/widget/survey/to6jicyeSjrkI2jV7rHP"
            style={{ border: 'none', width: '100%', display: 'block' }}
            scrolling="no"
            id="to6jicyeSjrkI2jV7rHP"
            title="survey"
          ></iframe>
        </div>
        <p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, lineHeight: 1.5, color: 'var(--cool-grey)' }}>
          No purchase necessary · US venue owners 18+ · <a href="/official-rules" target="_blank" rel="noopener" style={{ color: 'var(--accent-bright)' }}>Official Rules</a>
        </p>
      </div>
    </section>);
}

// ── 6. Urgency banner + countdown ─────────────────────────────────────────────
function GvUrgency({ onEnter }) {
  return (
    <section className="gv-urgency">
      <div className="wrap">
        <div className="gv-urgency-inner">
          <div>
            <div className="eyebrow">Last call</div>
            <h2 className="section" style={{ marginTop: 14 }}>Entries close Monday, July 6 — 12 PM EST.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: '52ch' }}>One winner is drawn at noon Eastern and contacted the same day. Enter before the clock runs out.</p>
            <div className="gv-urgency-actions">
              <button className="btn btn-primary btn-lg" onClick={onEnter}>Enter Free — Win the $13,997 Engine <GvArrow /></button>
            </div>
          </div>
          <div className="gv-urgency-clock">
            <div className="pz-clock-label" style={{ marginBottom: 14 }}>Entries close in</div>
            <GvCountdown size="lg" />
            <div className="gv-urgency-note">Winner announced same day · US venue owners 18+</div>
          </div>
        </div>
      </div>
    </section>);
}

// ── 7. FAQ — giveaway version ─────────────────────────────────────────────────
function GvFaq() {
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: 'What does it cost to enter?',
      a: 'Nothing. Entry is completely free — no purchase, no payment, no card. NO PURCHASE NECESSARY to enter or win, and a purchase will not improve your chances of winning.'
    },
    {
      q: 'Who can enter?',
      a: 'Legal U.S. residents who are 18 or older and own or operate an event venue. One entry per venue. Void where prohibited.'
    },
    {
      q: 'What does the winner actually get?',
      a: 'One independent venue wins the full $13,997 Booking Engine — built and run for them. The complete ad-fueled Booking OS: tested ad creative, the quiz funnel, the GHL build, AI follow-up, the accelerators, and 90 days of support — all done for you. The winning venue pays $0 for the build.'
    },
    {
      q: 'Why do you ask about my ad budget?',
      a: 'Because the engine runs on ad spend. The winner funds about $35/day (~$1,000/mo) in their own Meta account — that’s the fuel that fills the calendar, and it’s never paid to OMG. We ask up front so the winner can actually run what they win. It’s the only cost involved; there’s no entry fee and no build fee.'
    },
    {
      q: 'When’s the drawing?',
      a: 'Monday, July 6, 2026 at 12 PM EST. One winner is selected and notified the same day, and we start the build right away.'
    },
    {
      q: 'Is this an official Independence Day or sporting-event promotion?',
      a: 'No. This giveaway is run by OMG Rentals. It is not affiliated with, sponsored by, or endorsed by any official anniversary commission, any sporting event or league, or Meta Platforms, Inc. Full terms are in the Official Rules.'
    }];

  return (
    <section style={{ background: 'var(--charcoal)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2 className="section">Questions about the giveaway.</h2>
        </div>
        <div className="faq">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={"faq-row" + (isOpen ? " open" : "")}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="q">{it.q}</span>
                  <span className="chev">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && <div className="a">{it.a}</div>}
              </div>);
          })}
        </div>
      </div>
    </section>);
}

// ── Repeated CTA before footer ────────────────────────────────────────────────
function GvFinalCta({ onEnter }) {
  return (
    <section style={{ background: 'var(--jet-black)' }}>
      <div className="wrap">
        <div className="gv-finalcta">
          <div className="eyebrow">One venue wins</div>
          <h2 className="section" style={{ marginInline: 'auto' }}>Declare independence from empty dates.</h2>
          <button className="btn btn-primary btn-lg" onClick={onEnter} style={{ marginTop: 8 }}>Enter Free — Win the $13,997 Engine <GvArrow /></button>
          <GvTrust />
        </div>
      </div>
    </section>);
}

// ── 8. Compliance footer ──────────────────────────────────────────────────────
function GvComplianceFooter() {
  return (
    <footer className="site">
      <div className="wrap" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <img src="assets/OMG-Rentals-Logo-Black.png" alt="OMG Rentals" style={{ height: 30 }} />
            <div style={{ marginTop: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 360, fontSize: 14, lineHeight: 1.55 }}>
              The operating system for modern venues. The Booking Engine is the done-for-you, ad-fueled Booking OS we build and run on top of OMG Rentals.
            </div>
          </div>
          <div className="gv-foot-tags">
            <span>No Purchase Necessary</span>
            <span>US Venue Owners 18+</span>
            <span>Void Where Prohibited</span>
          </div>
        </div>

        <div className="gv-legal">
          <strong style={{ color: 'rgba(255,255,255,0.82)' }}>Official Rules summary.</strong>{' '}
          NO PURCHASE NECESSARY to enter or win. A purchase will not improve your chances of winning. Open to legal U.S. residents 18 years or older who own or operate an event venue. Void where prohibited. The giveaway ends Monday, July 6, 2026 at 12:00 PM EST; one winner will be selected and notified the same day. A free alternate method of entry is available — see the <a href="/official-rules" target="_blank" rel="noopener" style={{ color: 'var(--accent-bright)' }}>Official Rules</a>. The prize is one done-for-you Booking Engine build (a $13,997 value); the winner is responsible for their own advertising spend (approximately $35/day), paid into the winner's own ad account. Sponsor: OMG Rentals. By entering, you agree to the <a href="/official-rules" target="_blank" rel="noopener" style={{ color: 'var(--accent-bright)' }}>Official Rules</a>.
        </div>
        <div className="gv-legal gv-legal-fine">
          © 2026 OMG Rentals · Atlanta, GA · This giveaway is not affiliated with, sponsored by, or endorsed by any official anniversary commission, any sporting event or league, or Meta Platforms, Inc.
        </div>
      </div>
    </footer>);
}

Object.assign(window, {
  GvHeader, GvHero, GvWhatYouWin, GvHowToEnter, GvEntryForm,
  GvUrgency, GvFaq, GvFinalCta, GvComplianceFooter,
  GvCountdown, GvTrust, GvRow
});

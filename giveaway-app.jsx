// Independence Day Giveaway — app composition + Tweaks panel.
// Reuses ProofGallery (from sections-mid.jsx) verbatim; all other sections are giveaway-specific.

const GV_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "showProof": true,
  "accent": "#7CD7A8"
}/*EDITMODE-END*/;

function GiveawayApp() {
  const [t, setTweak] = useTweaks(GV_TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.classList.remove('density-regular', 'density-compact', 'density-comfy');
    document.body.classList.add('density-' + t.density);
  }, [t.density]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent-bright', t.accent);
  }, [t.accent]);

  const onEnter = React.useCallback(() => {
    // ONE action — every CTA scrolls to the embedded entry form.
    document.getElementById('entry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <React.Fragment>
      <GvHeader onEnter={onEnter} />
      <GvHero onEnter={onEnter} />
      <GvWhatYouWin />
      <ProofGallery show={t.showProof} />
      <GvHowToEnter onEnter={onEnter} />
      <GvEntryForm />
      <GvUrgency onEnter={onEnter} />
      <GvFaq />
      <GvFinalCta onEnter={onEnter} />
      <GvComplianceFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Layout">
          <TweakRadio
            label="Density"
            value={t.density}
            options={['compact', 'regular', 'comfy']}
            onChange={(v) => setTweak('density', v)}
          />
          <TweakToggle
            label="Proof gallery"
            value={t.showProof}
            onChange={(v) => setTweak('showProof', v)}
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor
            label="Highlight"
            value={t.accent}
            options={['#7CD7A8', '#2EC27E', '#A8E6C8', '#F4FFF8']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GiveawayApp />);

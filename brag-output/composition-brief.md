# Hyperframes Composition Brief: OpenHiggsfield

## Objective
Create a short launch-style brag video for OpenHiggsfield — an open-source AI studio where AI characters have real social media accounts and can be rented by brands as digital assets.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1280×720
- Duration: 21 seconds

## Source Material
- Project root: `/Users/AngeloKiin/Projects/Open-Higgsfield/`
- Primary files read: `src/openhiggsfield/openhiggsfield.css`, `src/openhiggsfield/creator-data.ts`, `src/openhiggsfield/creators.tsx`, `src/openhiggsfield/topbar.tsx`
- Product name: **OpenHiggsfield**
- Tagline / strongest claim: "AI creator. Real audience. Transferable IP."
- Key UI moment to recreate: The creator marketplace — tab bar with Creators selected (orange pill), 3-column card grid with gradient avatars, status badges, social counts; then the Zara detail modal with social platform cards and orange Rent button
- Copy that must appear verbatim:
  - "Your AI character just built 1.2M TikTok followers."
  - "AI creator."
  - "Real audience."
  - "Transferable IP."
  - "OpenHiggsfield"

## Creative Direction
- Tone preset: `default`
- Creative direction: quiet confidence that the future of the creator economy is already here
- Interpretation: clean pace, no hype, every claim lands calmly. The concept is wild — the tone isn't. No exclamation marks.
- Angle: AI characters with real social presence, treated as IP you can rent or transfer — played completely straight
- Hook: "Your AI character just built 1.2M TikTok followers." — large text, dark background, no other chrome
- Outro / punchline: Three lines landing on strong beats — "AI creator. / Real audience. / Transferable IP." — then "OpenHiggsfield" fades in clean
- Avoid:
  - Generic SaaS language ("streamline", "workflow", "solution")
  - Abstract filler visuals or color washes
  - Any visual redesign departing from the dark studio palette + orange accent

## Visual Identity
- Background: `#0a0a0b` (near-black studio)
- Text: `#edefef` (primary), `#a8aeaf` (subdued)
- Accent: `#ff7000` (electric orange — used for selected tab, Rent button, status badge, glow)
- Accent strong: `#ff9233`
- Display font: Inter (medium 500 / semibold 600 weight for headlines)
- Body font: Inter (regular 400)
- Visual references: dark card surfaces (`#151719`/`#1a1d1f`), hairline borders (`rgba(255,255,255,0.06)`), orange pill for selected tab, gradient avatar placeholders for each creator (Zara: purple→pink hsl(270°→320°); Marcus: blue→teal hsl(190°→220°); Luna: coral→red hsl(340°→20°))

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. **Hook** — 3s — "Your AI character just built 1.2M TikTok followers." Large text, dark, no chrome. Music starts.
2. **Studio reveal** — 3.5s — Tab bar (Image/Video/Assets/Favorites/Creators), cursor clicks Creators (orange pill), marketplace header slides in. Beat-locked at 3.02s.
3. **Creator grid** — 5.5s — Three creator cards arrive one by one: Zara (purple, Available, 1.2M TT), Marcus (blue, Available, 520K TT), Luna (coral, Rented, 1.9M TT). Beat-grid: 7.02s / 8.52s / 10.02s.
4. **Rent modal** — 5s — Zara's detail modal: gradient hero, social counts (284K IG · 1.2M TT · 62K SC), 24 collabs, owner address, three buttons (Rent · $180/day / Collaborate / Transfer). Orange Rent button prominent.
5. **Outro** — 4s — "AI creator." → "Real audience." → "Transferable IP." (beat-locked at 17.02 / 18.02 / 19.02) then "OpenHiggsfield" fades in.

## Audio
- Audio role: warm upbeat bed, SFX motion-matched to UI reveals
- Audio arc: low atmospheric → beat drops at 3s with studio reveal → pulse through card grid → payoff at modal → peak at outro beat cluster → gentle fade
- Music: `assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3`
- Music treatment: start at t=0, volume 0.32, no ramp needed; fade out gently in final 1s
- Music cue guidance: bundled preset available at `cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.json`; strong cues in planning window at 17.02s (1.00), 18.02s (1.00), 19.02s (≈beat), 20.02s (1.00); beat grid starts at 3.02s; use 3 strong cue locks: 3.02s (studio reveal), 17.02s (outro line 1), and 20.02s (logo landing area)
- Audio-reactive treatment: subtle; use music RMS/bass to make the creator card gradient avatars glow softly and the orange accent color breathe in background warmth. No waveform displays.
- Audio-coupled moments:
  - Scene 2 — cursor click on Creators tab: `interface/click_001.ogg`
  - Scene 3 — card 1 slides in at 7.02s: `casino/card-slide-1.ogg`
  - Scene 3 — card 2 slides in at 8.52s: `casino/card-slide-2.ogg`
  - Scene 3 — card 3 slides in at 10.02s: `casino/card-slide-3.ogg`
  - Scene 4 — modal opens at 12.0s: `impact/impactSoft_medium_000.ogg`
  - Scene 5 — "AI creator." at 17.02s: `interface/drop_001.ogg`
  - Scene 5 — "Real audience." at 18.02s: `interface/drop_002.ogg` (or drop_001)
  - Scene 5 — "Transferable IP." at 19.02s: `interface/drop_001.ogg`
  - Scene 5 — "OpenHiggsfield" at ~20.3s: `impact/impactBell_heavy_000.ogg`
- SFX selection guidance: card-slide sounds for card arrivals; impactSoft for modal; drop sounds for sequential text reveal; single bell for logo. All at 0.65-0.78 volume. Do not stack SFX.
- SFX analysis guidance: use bundled sfx-analysis.md for reference
- Exact SFX choice: Hyperframes should choose final timestamps and volume to match actual animation
- Audio files: already copied into `brag-output/composition/assets/`

## Hyperframes Instructions
Load `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. /brag is its own workflow — do not enter the Hyperframes entry-point intent interview. Prefer native Hyperframes conventions.

Requirements:
- Show at least one real UI element from the source project (the tab bar, creator cards, modal)
- All text must be readable — every line holds long enough (see reading-time floor in step-2-plan.md)
- Total duration: 21 seconds
- Include the music bed and SFX as guided above
- Beat-lock Scene 2 reveal to 3.02s and Scene 5 outro lines to 17.02s / 18.02s / 19.02s
- Card grid sequential reveal snaps to beats 7.02s / 8.52s / 10.02s
- Audio-reactive: subtle glow on creator card avatars responding to RMS
- Run `npx hyperframes check` before render — fix all errors

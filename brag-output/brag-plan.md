# Brag Plan: OpenHiggsfield

## What is this app?

OpenHiggsfield is an open-source AI studio for generating images and videos — with a new twist: a marketplace where AI characters have real social media accounts across Instagram, TikTok, and Snapchat, making them rentable, collaborative digital assets that brands can hire like real creators.

## The angle

AI character generation has been table-stakes since Midjourney. But what happens when your AI character has 1.2 million TikTok followers, a real Instagram handle, and can be rented to a brand for $180 a day? That's not a feature. That's a new category. This video plays the concept completely straight — because it doesn't need to be funny. It needs to feel inevitable.

## Hook (first 2-3 seconds)

Text on dark: **"Your AI character just built 1.2M TikTok followers."**

No setup. No context. One sentence that shouldn't be possible — and then we explain why it is.

## Key moments (the middle)

- The studio tab bar — clicking "Creators" and watching the marketplace load, establishing this is a real tool, not a concept
- Three creator cards arriving one by one: Zara (available), Marcus (available), Luna (rented) — gradient avatars, status badges, social counts. The grid reads instantly as a real marketplace
- The Zara detail modal: 284K Instagram · 1.2M TikTok · 62K Snapchat, 24 total collabs, owner address (onchain), three action buttons — **Rent · $180/day / Collaborate / Transfer**

## Outro / punchline

Three lines, arriving sequentially on dark:

**AI creator.** → **Real audience.** → **Transferable IP.**

Then: **OpenHiggsfield** fades in, clean.

The final word is "IP." The implication is clear: this isn't a chatbot — it's property.

## User flow worth showing

Entry → Key action → Result:
1. Studio tab bar (Image / Video / Assets / Favorites / **Creators**) — cursor clicks Creators
2. Creator marketplace loads — 3 cards appear one by one with social stats
3. Click "Rent · $180/day" — full creator modal opens: social platform cards, collabs, owner, 3-button CTA

## Tone
- Preset: `default`
- Creative direction: quiet confidence that the future of the creator economy is already here
- Interpretation: clean pace, no hype language, the product's concept is wild enough — let the facts land calmly. No exclamation marks. Every beat holds long enough to read.

## Format: landscape — 1280×720
## Duration: 21 seconds

## Visual identity (from the project)
- Background: `#0a0a0b`
- Rail / card surface: `#101112` / `#151719`
- Accent: `#ff7000` (electric orange)
- Accent strong: `#ff9233`
- Text: `#edefef`
- Text subdued: `#a8aeaf`
- Display font: Inter (medium/semibold weight)
- Body font: Inter (regular)
- Strongest visual element: the creator card grid — gradient avatar placeholders, orange status badges, social pill counts (IG/TT/SC)

## Share copy (draft)

Built an open-source AI studio where your character has real IG, TikTok, and Snap accounts — and brands can rent them per day. The creator economy just got weird. OpenHiggsfield 🟠

## Audio direction
- Role: warm upbeat bed; the music establishes momentum so the visuals can be calm
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (120 BPM, most energetic — fits default tone)
- Music treatment: start at t=0, volume 0.32, no fade-in needed; let it build through the video; gentle fade-out in final 1.5s
- Music cue guidance: preset available; strong cues cluster from 16-23s — target 17.02s for the outro "AI creator." reveal (beat-locked). Beat grid starts at 3.02s — use that beat for the studio reveal landing.
- Audio-reactive treatment: subtle; use music RMS/bass to add soft glow breathing to the creator card avatars and accent color warmth in the background. No waveform visuals.
- SFX posture: moderate, motion-matched, professional
- Audio-coupled moments:
  - Scene 2 — clicking the Creators tab: `interface/click_001`
  - Scene 3 — each creator card arriving: `casino/card-slide-*` (one per card, staggered)
  - Scene 4 — modal opening: `impact/impactSoft_medium_000` for payoff
  - Scene 5 — "AI creator." "Real audience." "Transferable IP." sequential reveal: `interface/drop_001` per line, then `impact/impactBell_heavy_000` as "OpenHiggsfield" lands
- Restraint rule: music never overwhelms the concept — this is about credibility, not hype

---

## Storyboard

### Scene 1 — Hook — 3s (0-3s)
`#0a0a0b` background. No chrome, no logo.
Large headline, center: **"Your AI character just built 1.2M TikTok followers."**
Text fades in at 0.2s, holds until 2.8s.
Sequential/interaction: none
Audio intent: music bed starts, atmospheric — no beat yet (beats start at 3.02s)
Audio-coupled idea: none (let the claim land in quiet)
Music: warm build-up before the 3.02s beat
Transition mood: hard cut → Scene 2

### Scene 2 — Studio reveal — 3.5s (3-6.5s)
Recreate the OpenHiggsfield tab bar: `Image · Video · Assets · Favorites · Creators` — all in the dark studio chrome. Tabs are small pill buttons, Creators tab highlighted orange. A simulated cursor moves to the Creators tab and clicks it.
Below the tab bar: the creator marketplace header fades in ("AI Creator Marketplace").
Beat-locked: tab click + marketplace reveal at 3.02s (first strong beat in grid).
Sequential/interaction: yes — cursor moves right, lands on Creators, clicks, marketplace slides up
Audio intent: beat lands as the marketplace appears — energy picks up
Audio-coupled idea: `interface/click_001` at cursor click (~3.0s)
Music: beat drops at 3.02s
Transition mood: soft slide → Scene 3

### Scene 3 — Creator grid — 5.5s (6.5-12s)
Three creator cards appear one by one, each sliding up from slightly below.
Card 1 (Zara): purple→pink gradient, "Z", status badge "Available" (green), 284K IG · 1.2M TT · 62K SC, $180/day
Card 2 (Marcus): blue→teal gradient, "M", status badge "Available" (green), 97K IG · 520K TT · 31K SC, $120/day
Card 3 (Luna): coral→red gradient, "L", status badge "Rented" (orange), 412K IG · 1.9M TT · 89K SC, $200/day

Cards arrive at ~7.0s, ~8.5s, ~10.0s (every ~1.5s — readable spacing, snap to beats 7.02, 8.52, 10.02).
Each card holds fully visible before the next arrives. All three stay on screen together for ~1.5s.
Sequential/interaction: yes — 3 cards one by one
Audio intent: each card arrival reinforces the marketplace feeling — three distinct assets
Audio-coupled idea: `casino/card-slide-*` (card-slide-1, card-slide-2, card-slide-3) at each card's entrance
Music: steady beat pulse
Transition mood: clean cut → Scene 4

### Scene 4 — Rent modal — 5s (12-17s)
Show Zara's detail modal filling the screen. Elements:
- Top: gradient hero (purple→pink) with "Z" avatar circle
- Below: "Digital asset · zara-01" (small, subdued)
- Name: **"Zara"** large
- Tagline: "High fashion editorial · luxury brand collaborations"
- Social presence section: three platform cards — **284K** Instagram · **1.2M** TikTok · **62K** Snapchat
- Stats: **24 collabs**, "Available" status
- Owner: `0x4A2f…9c3D` (monospace, subtle)
- Three action buttons: **"Rent · $180/day"** (orange, filled) · **"Collaborate"** · **"Transfer"**

Modal slides in from scale 0.95 → 1.0 with a soft pop. Social cards appear at 12.5s, then stat block at 13.5s, then action buttons at 14.5s. Hold on the full modal with the orange Rent button until 17s.
Sequential/interaction: yes — modal elements reveal sequentially
Audio intent: payoff moment — this is the "oh, it's a real product" beat
Audio-coupled idea: `impact/impactSoft_medium_000` at modal open (~12.0s). Social cards each get a quiet `interface/drop_001` at ~12.5s
Music: building toward the strong cues at 17s
Transition mood: crossfade → Scene 5

### Scene 5 — Outro — 4s (17-21s)
`#0a0a0b` background. Three lines appear sequentially, center, large:

Line 1: **"AI creator."** — at 17.02s (beat-locked, strong cue 1.00)
Line 2: **"Real audience."** — at 18.02s (beat-locked, strong cue 1.00)
Line 3: **"Transferable IP."** — at 19.02s (near beat 19.02)

Brief hold (all three lines visible together). Then at 20.5s:
Lines fade out. **"OpenHiggsfield"** fades in — white, medium weight, slightly larger. Holds to 21s.

Sequential/interaction: yes — 3 lines one by one (not text for one beat each — each holds at least 1s before next arrives)
Audio intent: strong cues at 17.02, 18.02, 19.02 — let the music do the punctuation work
Audio-coupled idea: `interface/drop_001` at each line reveal; `impact/impactBell_heavy_000` as "OpenHiggsfield" lands at ~20.5s
Music: strongest part of the track — let it peak here, then music fades out gently in the final 0.5s
Transition mood: end

**Music cue guidance:**
- Track: vol-1, 120 BPM
- Strong cues in planning window: 17.02s (1.00), 18.02s (1.00), 19.02s (~near beat), 20.02s (1.00)
- Beat-lock: Scene 2 tab click at 3.02s; Scene 5 line 1 at 17.02s, line 2 at 18.02s, line 3 at 19.02s
- Beat-grid for card arrivals: 7.02s, 8.52s, 10.02s (consecutive beats from grid)
- Restraint: the outro carries the beat naturally — SFX should complement, not stack

**Music mood for this video:** upbeat, building, clean corporate energy
**Audio summary:** warm corporate bed at 0.32 volume carries the whole video; card sounds reinforce the marketplace grid; the outro rides the track's strongest beat cluster with drop SFX on each line and a single bell landing on the product name.

"use client";

import { useCallback, useEffect, useState } from "react";

import { fetchCreators, rentCreator } from "../lib/creators-db";
import {
  STATUS_LABELS,
  formatFollowers,
  type Creator,
  type CreatorStatus,
} from "./creator-data";
import { CloseIcon } from "./icons";

/* ---------- avatar ---------- */

function CreatorAvatar({ creator, large = false }: { creator: Creator; large?: boolean }) {
  const gradient = `linear-gradient(135deg, hsl(${creator.hue}, 70%, 50%), hsl(${creator.hue2}, 70%, 40%))`;
  return (
    <div
      className="ohf-creator-avatar-placeholder"
      style={{
        background: gradient,
        fontSize: large ? 40 : 22,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.9)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        width: "100%",
        height: "100%",
      }}
    >
      {creator.name[0]}
    </div>
  );
}

/* ---------- social icon SVGs ---------- */

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11.4" cy="4.6" r="0.8" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10.2 1.8a4.4 4.4 0 0 0 4.2 3.5V8a7 7 0 0 1-4.2-1.4v5.6A4.4 4.4 0 1 1 5.8 7.7V11a1.2 1.2 0 1 0 .8 1.1V1.8z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5C5.7 1.5 4 3 4 5.4v1.3c-.5.1-.9.5-.9.9 0 .5.4.8.9.9-.4 1.5-2 1.7-2 2.1 0 .5 1.8.9 2.5.9.4.7 1 1.5 3.5 1.5s3-.8 3.5-1.5c.7 0 2.5-.4 2.5-.9 0-.4-1.6-.6-2-2.1.5-.1.9-.4.9-.9 0-.4-.4-.8-.9-.9V5.4C12 3 10.3 1.5 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  snapchat: SnapchatIcon,
};

const SOCIAL_NAMES = {
  instagram: "IG",
  tiktok: "TT",
  snapchat: "SC",
};

/* ---------- skeleton ---------- */

function CreatorCardSkeleton() {
  return (
    <article className="ohf-creator-card ohf-creator-card--skeleton" aria-hidden>
      <div className="ohf-creator-avatar" style={{ background: "var(--s3)" }} />
      <div className="ohf-creator-body" style={{ gap: 10 }}>
        <div style={{ height: 16, width: "55%", background: "var(--s3)", borderRadius: 6 }} />
        <div style={{ height: 12, width: "80%", background: "var(--s3)", borderRadius: 6 }} />
        <div style={{ height: 28, width: "100%", background: "var(--s3)", borderRadius: 8 }} />
        <div style={{ height: 36, width: "100%", background: "var(--s3)", borderRadius: 8 }} />
      </div>
    </article>
  );
}

/* ---------- creator card ---------- */

function CreatorCard({
  creator,
  onSelect,
}: {
  creator: Creator;
  onSelect: (c: Creator) => void;
}) {
  const isAvailable = creator.status === "available";

  return (
    <article className="ohf-creator-card">
      <div className="ohf-creator-avatar">
        <CreatorAvatar creator={creator} />
        <span className={`ohf-creator-status ohf-creator-status--${creator.status}`}>
          <span className="ohf-creator-status-dot" aria-hidden />
          {STATUS_LABELS[creator.status]}
        </span>
      </div>

      <div className="ohf-creator-body">
        <div className="ohf-creator-identity">
          <h3 className="ohf-creator-name">{creator.name}</h3>
          <p className="ohf-creator-tagline">{creator.tagline}</p>
        </div>

        <div className="ohf-creator-tags">
          {creator.specialty.map((tag) => (
            <span key={tag} className="ohf-creator-tag">{tag}</span>
          ))}
        </div>

        <div className="ohf-creator-socials">
          {(["instagram", "tiktok", "snapchat"] as const).map((platform) => {
            const SIcon = SOCIAL_ICONS[platform];
            const profile = creator.socials[platform];
            return (
              <a
                key={platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ohf-social-pill"
                aria-label={`${creator.name} on ${platform}: ${formatFollowers(profile.followers)} followers`}
              >
                <span className="ohf-social-icon">
                  <SIcon />
                </span>
                <span className="ohf-social-info">
                  <span className="ohf-social-count">{formatFollowers(profile.followers)}</span>
                  <span className="ohf-social-name">{SOCIAL_NAMES[platform]}</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="ohf-creator-footer">
          <div className="ohf-creator-price">
            <span className="ohf-creator-price-val">${creator.pricePerDay}</span>
            <span className="ohf-creator-price-unit">/day</span>
          </div>
          <div className="ohf-creator-actions">
            <button
              type="button"
              className="ohf-creator-btn ohf-creator-btn--rent"
              disabled={!isAvailable}
              onClick={() => onSelect(creator)}
              aria-label={`Rent ${creator.name} for $${creator.pricePerDay}/day`}
            >
              {isAvailable ? "Rent" : STATUS_LABELS[creator.status]}
            </button>
            <button
              type="button"
              className="ohf-creator-btn ohf-creator-btn--collab"
              onClick={() => onSelect(creator)}
              aria-label={`View ${creator.name} details`}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- detail modal ---------- */

function CreatorModal({
  creator,
  onClose,
  onAction,
}: {
  creator: Creator;
  onClose: () => void;
  onAction: (c: Creator, action: "rent" | "collaborate" | "transfer") => Promise<void>;
}) {
  const [pending, setPending] = useState<"rent" | "collaborate" | "transfer" | null>(null);
  const isAvailable = creator.status === "available";
  const gradient = `linear-gradient(160deg, hsl(${creator.hue}, 60%, 30%), hsl(${creator.hue2}, 50%, 18%))`;

  async function handleAction(action: "rent" | "collaborate" | "transfer") {
    setPending(action);
    try {
      await onAction(creator, action);
      onClose();
    } finally {
      setPending(null);
    }
  }

  return (
    <div
      className="ohf-creator-modal-backdrop"
      role="dialog"
      aria-modal
      aria-label={`${creator.name} profile`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ohf-creator-modal">
        {/* hero */}
        <div className="ohf-creator-modal-hero" style={{ background: gradient }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)" }}>
            <CreatorAvatar creator={creator} large />
          </div>
          <button
            type="button"
            className="ohf-creator-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon size={14} />
          </button>
        </div>

        {/* body */}
        <div className="ohf-creator-modal-body">
          <div className="ohf-creator-modal-top">
            <div>
              <p className="ohf-creator-modal-id">Digital asset · {creator.id}</p>
              <h2 className="ohf-creator-modal-name">{creator.name}</h2>
              <p className="ohf-creator-modal-tagline">{creator.tagline}</p>
            </div>
            <div className="ohf-creator-modal-price">
              <span style={{ fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>${creator.pricePerDay}</span>
              <span style={{ fontSize: 12, color: "var(--tx-2)", marginLeft: 4 }}>/day</span>
            </div>
          </div>

          {/* tags */}
          <div className="ohf-creator-tags" style={{ marginBottom: 20 }}>
            {creator.specialty.map((tag) => (
              <span key={tag} className="ohf-creator-tag">{tag}</span>
            ))}
          </div>

          {/* social accounts */}
          <p className="ohf-creator-section-label">Social presence</p>
          <div className="ohf-creator-modal-socials">
            {(["instagram", "tiktok", "snapchat"] as const).map((platform) => {
              const SIcon = SOCIAL_ICONS[platform];
              const profile = creator.socials[platform];
              return (
                <a
                  key={platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ohf-social-card"
                >
                  <span className="ohf-social-card-icon"><SIcon /></span>
                  <div className="ohf-social-card-info">
                    <span className="ohf-social-card-count">{formatFollowers(profile.followers)}</span>
                    <span className="ohf-social-card-platform">{platform}</span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* stats */}
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1, padding: "12px 14px", background: "var(--s2)", borderRadius: 10, border: "1px solid var(--line-1)" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--tx)" }}>{creator.totalCollabs}</div>
              <div style={{ fontSize: 11, color: "var(--tx-2)", marginTop: 2 }}>Total collabs</div>
            </div>
            <div style={{ flex: 1, padding: "12px 14px", background: "var(--s2)", borderRadius: 10, border: "1px solid var(--line-1)" }}>
              <div className={`ohf-creator-status ohf-creator-status--${creator.status}`} style={{ display: "inline-flex", marginBottom: 2 }}>
                <span className="ohf-creator-status-dot" aria-hidden />
                {STATUS_LABELS[creator.status]}
              </div>
              <div style={{ fontSize: 11, color: "var(--tx-2)", marginTop: 4 }}>Current status</div>
            </div>
          </div>

          {/* owner */}
          <div className="ohf-creator-owner">
            <span className="ohf-creator-owner-label">Owner</span>
            <code className="ohf-creator-owner-addr">{creator.owner}</code>
          </div>

          {/* actions */}
          <div className="ohf-creator-modal-actions">
            <button
              type="button"
              className="ohf-creator-btn ohf-creator-btn--rent"
              disabled={!isAvailable || pending !== null}
              style={{ flex: 1 }}
              onClick={() => handleAction("rent")}
            >
              {pending === "rent" ? "Renting…" : isAvailable ? `Rent · $${creator.pricePerDay}/day` : STATUS_LABELS[creator.status]}
            </button>
            <button
              type="button"
              className="ohf-creator-btn ohf-creator-btn--collab"
              disabled={pending !== null}
              style={{ flex: 1 }}
              onClick={() => handleAction("collaborate")}
            >
              {pending === "collaborate" ? "…" : "Collaborate"}
            </button>
            <button
              type="button"
              className="ohf-creator-btn ohf-creator-btn--transfer"
              disabled={pending !== null}
              style={{ flex: 1 }}
              onClick={() => handleAction("transfer")}
            >
              {pending === "transfer" ? "…" : "Transfer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- filter bar ---------- */

const FILTERS: Array<{ key: CreatorStatus | "all"; label: string }> = [
  { key: "all", label: "All creators" },
  { key: "available", label: "Available" },
  { key: "rented", label: "Rented" },
  { key: "collaborating", label: "Collab active" },
];

/* ---------- main marketplace ---------- */

export function CreatorMarketplace() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<CreatorStatus | "all">("all");
  const [selected, setSelected] = useState<Creator | null>(null);

  useEffect(() => {
    fetchCreators()
      .then(setCreators)
      .catch((e) => setError(String(e?.message ?? e)))
      .finally(() => setLoading(false));
  }, []);

  const visible = filter === "all" ? creators : creators.filter((c) => c.status === filter);

  const openModal = useCallback((c: Creator) => setSelected(c), []);
  const closeModal = useCallback(() => setSelected(null), []);

  async function handleAction(creator: Creator, action: "rent" | "collaborate" | "transfer") {
    await rentCreator(creator.id, action);
    // optimistic update
    const newStatus: CreatorStatus =
      action === "rent" ? "rented" : action === "collaborate" ? "collaborating" : "rented";
    setCreators((prev) =>
      prev.map((c) => (c.id === creator.id ? { ...c, status: newStatus } : c)),
    );
  }

  return (
    <div className="ohf-creators">
      <div className="ohf-creators-header">
        <div>
          <h2 className="ohf-creators-title">AI Creator Marketplace</h2>
          <p className="ohf-creators-sub">
            Digital assets — each with a consistent AI identity and real social presence. Rent for your campaigns, collaborate across creators, or acquire ownership.
          </p>
        </div>
      </div>

      <div className="ohf-creators-filters">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className="ohf-creator-btn ohf-creator-btn--collab"
            data-active={filter === key || undefined}
            style={filter === key ? { background: "var(--accent)", color: "var(--accent-ink)", borderColor: "var(--accent)" } : undefined}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {error && (
        <p style={{ padding: "16px 32px", color: "var(--tx-2)", fontSize: 13 }}>
          Could not load creators: {error}
        </p>
      )}

      <div className="ohf-creator-grid">
        {loading
          ? Array.from({ length: 6 }, (_, i) => <CreatorCardSkeleton key={i} />)
          : visible.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} onSelect={openModal} />
            ))}
      </div>

      {selected && (
        <CreatorModal creator={selected} onClose={closeModal} onAction={handleAction} />
      )}
    </div>
  );
}

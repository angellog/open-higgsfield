import { supabase } from "./supabase";
import type { Creator, CreatorStatus } from "../openhiggsfield/creator-data";
import type { Database } from "./database.types";

type Row = Database["public"]["Tables"]["creators"]["Row"];

function rowToCreator(r: Row): Creator {
  return {
    id: r.id,
    name: r.name,
    tagline: r.tagline,
    specialty: r.specialty,
    hue: r.hue,
    hue2: r.hue2,
    status: r.status,
    pricePerDay: r.price_per_day,
    owner: r.owner,
    totalCollabs: r.total_collabs,
    createdAt: new Date(r.created_at).getTime(),
    socials: {
      instagram: { handle: r.ig_handle, followers: r.ig_followers, url: "https://instagram.com" },
      tiktok: { handle: r.tt_handle, followers: r.tt_followers, url: "https://tiktok.com" },
      snapchat: { handle: r.sc_handle, followers: r.sc_followers, url: "https://snapchat.com" },
    },
  };
}

export async function fetchCreators(): Promise<Creator[]> {
  const { data, error } = await supabase
    .from("creators")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(rowToCreator);
}

export async function rentCreator(
  creatorId: string,
  action: "rent" | "collaborate" | "transfer",
  rentedBy?: string,
): Promise<void> {
  const newStatus: CreatorStatus =
    action === "rent" ? "rented" : action === "collaborate" ? "collaborating" : "rented";

  const { error: rentalError } = await supabase
    .from("rentals")
    .insert({ creator_id: creatorId, action, rented_by: rentedBy ?? null });
  if (rentalError) throw rentalError;

  const { error: statusError } = await supabase
    .from("creators")
    .update({ status: newStatus })
    .eq("id", creatorId);
  if (statusError) throw statusError;
}

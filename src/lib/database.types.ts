export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      creators: {
        Row: {
          id: string;
          name: string;
          tagline: string;
          specialty: string[];
          hue: number;
          hue2: number;
          status: "available" | "rented" | "collaborating";
          price_per_day: number;
          owner: string;
          total_collabs: number;
          created_at: string;
          ig_handle: string;
          ig_followers: number;
          tt_handle: string;
          tt_followers: number;
          sc_handle: string;
          sc_followers: number;
        };
        Insert: {
          id: string;
          name: string;
          tagline?: string;
          specialty?: string[];
          hue?: number;
          hue2?: number;
          status?: "available" | "rented" | "collaborating";
          price_per_day?: number;
          owner?: string;
          total_collabs?: number;
          created_at?: string;
          ig_handle?: string;
          ig_followers?: number;
          tt_handle?: string;
          tt_followers?: number;
          sc_handle?: string;
          sc_followers?: number;
        };
        Update: {
          id?: string;
          name?: string;
          tagline?: string;
          specialty?: string[];
          hue?: number;
          hue2?: number;
          status?: "available" | "rented" | "collaborating";
          price_per_day?: number;
          owner?: string;
          total_collabs?: number;
          created_at?: string;
          ig_handle?: string;
          ig_followers?: number;
          tt_handle?: string;
          tt_followers?: number;
          sc_handle?: string;
          sc_followers?: number;
        };
        Relationships: [];
      };
      rentals: {
        Row: {
          id: string;
          creator_id: string;
          action: "rent" | "collaborate" | "transfer";
          rented_by: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          creator_id: string;
          action: "rent" | "collaborate" | "transfer";
          rented_by?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          creator_id?: string;
          action?: "rent" | "collaborate" | "transfer";
          rented_by?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "rentals_creator_id_fkey";
            columns: ["creator_id"];
            referencedRelation: "creators";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

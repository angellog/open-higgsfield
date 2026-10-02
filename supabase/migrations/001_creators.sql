-- creators table
create table if not exists public.creators (
  id            text primary key,
  name          text not null,
  tagline       text not null default '',
  specialty     text[] not null default '{}',
  hue           int not null default 200,
  hue2          int not null default 240,
  status        text not null default 'available'
                  check (status in ('available', 'rented', 'collaborating')),
  price_per_day int not null default 100,
  owner         text not null default '',
  total_collabs int not null default 0,
  created_at    timestamptz not null default now(),
  ig_handle     text not null default '',
  ig_followers  int not null default 0,
  tt_handle     text not null default '',
  tt_followers  int not null default 0,
  sc_handle     text not null default '',
  sc_followers  int not null default 0
);

alter table public.creators enable row level security;
create policy "public read" on public.creators for select using (true);
create policy "anon update status" on public.creators for update using (true) with check (true);

-- rentals table
create table if not exists public.rentals (
  id          uuid primary key default gen_random_uuid(),
  creator_id  text not null references public.creators(id) on delete cascade,
  action      text not null check (action in ('rent', 'collaborate', 'transfer')),
  rented_by   text,
  notes       text,
  created_at  timestamptz not null default now()
);

alter table public.rentals enable row level security;
create policy "public read" on public.rentals for select using (true);
create policy "anon insert" on public.rentals for insert with check (true);

-- seed creators
insert into public.creators
  (id, name, tagline, specialty, hue, hue2, status, price_per_day, owner, total_collabs, created_at,
   ig_handle, ig_followers, tt_handle, tt_followers, sc_handle, sc_followers)
values
  ('zara-01', 'Zara', 'High fashion editorial · luxury brand collaborations',
   array['Fashion','Editorial','Luxury'], 270, 320, 'available', 180, '0x4A2f…9c3D', 24,
   now() - interval '12 days',
   '@zara.ai.model', 284000, '@zara.ai', 1240000, 'zara.ai.model', 62000),

  ('marcus-02', 'Marcus', 'Athletic performance · gym & outdoor lifestyle',
   array['Fitness','Sports','Lifestyle'], 190, 220, 'available', 120, '0x7B1a…4eF2', 18,
   now() - interval '8 days',
   '@marcus.ugc.fit', 97000, '@marcusfitai', 520000, 'marcusfit.ai', 31000),

  ('luna-03', 'Luna', 'Clean beauty · skincare routines · glow content',
   array['Beauty','Skincare','Wellness'], 340, 20, 'rented', 200, '0x9C5d…8aB1', 41,
   now() - interval '30 days',
   '@luna.beautyai', 412000, '@lunabeauty.ai', 1870000, 'lunabeautyai', 89000),

  ('kai-04', 'Kai', 'Tech reviews · gaming setups · developer lifestyle',
   array['Tech','Gaming','Dev'], 150, 180, 'available', 95, '0x2E3b…7cA9', 9,
   now() - interval '5 days',
   '@kai.techcreator', 54000, '@kaitech.ai', 340000, 'kaitech.ai', 18000),

  ('sofia-05', 'Sofia', 'Travel storytelling · hotel & adventure brand partner',
   array['Travel','Adventure','Hospitality'], 35, 55, 'collaborating', 160, '0x6D8f…2bE4', 33,
   now() - interval '21 days',
   '@sofia.travels.ai', 321000, '@sofiatravels', 890000, 'sofiatravels.ai', 74000),

  ('devon-06', 'Devon', 'Food & culinary creator · restaurant partnerships',
   array['Food','Culinary','FMCG'], 20, 40, 'available', 110, '0x1A4c…5dF7', 15,
   now() - interval '14 days',
   '@devon.foodai', 128000, '@devonfood.ai', 670000, 'devonfoodai', 27000),

  ('mia-07', 'Mia', 'Art direction · creative campaigns · visual brands',
   array['Art','Creative','Branding'], 250, 290, 'available', 140, '0x3F7e…1aC6', 22,
   now() - interval '17 days',
   '@mia.artcreator', 193000, '@miaart.ai', 760000, 'miaart.ai', 41000),

  ('axel-08', 'Axel', 'Music & entertainment · festival culture · streetwear',
   array['Music','Entertainment','Street'], 50, 90, 'rented', 175, '0x8B2d…6eC0', 37,
   now() - interval '45 days',
   '@axel.musicai', 508000, '@axelmusic.ai', 2100000, 'axelmusic.ai', 115000)

on conflict (id) do nothing;

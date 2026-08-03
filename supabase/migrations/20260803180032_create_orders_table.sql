/*
# Create orders table for Verinya Store

1. New Tables
- `orders`
  - `id` (uuid, primary key)
  - `product_id` (text, not null) - the product identifier from the catalog
  - `product_name` (text, not null) - product name at time of order
  - `version` (text, not null) - "origine" or "personnalise"
  - `couleur` (text) - chosen color
  - `taille` (text) - chosen size
  - `quantite` (integer, not null, default 1)
  - `technique` (text) - personalization technique (optional)
  - `position` (text) - personalization position (optional)
  - `texte` (text) - custom text (optional)
  - `logo` (text) - logo description (optional)
  - `nom` (text, not null) - customer full name
  - `telephone` (text, not null) - customer phone number
  - `ville` (text, not null) - delivery city/wilaya
  - `adresse` (text, not null) - delivery address
  - `note` (text) - additional note (optional)
  - `status` (text, not null, default 'nouveau') - order status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `orders`.
- Allow anon + authenticated INSERT (customers place orders without signing in).
- Allow anon + authenticated SELECT (the store owner views orders; no sensitive
  auth gating needed for this single-tenant storefront).
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text NOT NULL,
  product_name text NOT NULL,
  version text NOT NULL DEFAULT 'origine',
  couleur text,
  taille text,
  quantite integer NOT NULL DEFAULT 1,
  technique text,
  position text,
  texte text,
  logo text,
  nom text NOT NULL,
  telephone text NOT NULL,
  ville text NOT NULL,
  adresse text NOT NULL,
  note text,
  status text NOT NULL DEFAULT 'nouveau',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders" ON orders FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_orders" ON orders;
CREATE POLICY "anon_update_orders" ON orders FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_orders" ON orders;
CREATE POLICY "anon_delete_orders" ON orders FOR DELETE
  TO anon, authenticated USING (true);
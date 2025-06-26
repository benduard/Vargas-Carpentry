/*
  # Create contact form table

  1. New Tables
    - `Vargas-Carpentry`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone_number` (text, required)
      - `service` (text, required)
      - `message` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `Vargas-Carpentry` table
    - Add policy for anonymous users to insert contact form submissions
    - Add policy for authenticated users to read submissions
*/

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS "Vargas-Carpentry" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE "Vargas-Carpentry" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for contact form submissions)
CREATE POLICY "Allow contact form submissions"
  ON "Vargas-Carpentry"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to read submissions
CREATE POLICY "Allow authenticated users to read submissions"
  ON "Vargas-Carpentry"
  FOR SELECT
  TO authenticated
  USING (true);
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzpajqtdmbhxzamxtwls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cGFqcXRkbWJoeHphbXh0d2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NjcwMTksImV4cCI6MjAxMjI0MzAxOX0.OsMZ9qa0rqCB-3NUsUz9GA1ntD0-hPFGOiOQbwPlWNY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

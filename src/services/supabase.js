import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwpywmetyvuaegouiijv.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cHl3bWV0eXZ1YWVnb3VpaWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNDAwMDEsImV4cCI6MjAzMTcxNjAwMX0.HeeaAG_e7iXG5lUOhBi3vaQuZOGFbgbzrvvF-ZjaP1U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

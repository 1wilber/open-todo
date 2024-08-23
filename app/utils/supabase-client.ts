import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types/database.types";

const URL = process.env.SUPABASE_URL
const KEY = process.env.SUPABASE_API_KEY

export const supabaseClient = createClient<Database>(URL, KEY)

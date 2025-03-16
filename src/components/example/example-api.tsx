"use server"
import { createClient } from "@/utils/supabase/server"

export const ExampleApi = async () => {
  const supabase = await createClient()
  const { data: instruments } = await supabase.from("instruments").select()

  return <div>{JSON.stringify(instruments)}</div>
}

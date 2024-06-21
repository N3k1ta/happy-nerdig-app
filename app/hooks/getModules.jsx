import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export async function getModuls() {
  const superbase = createServerComponentClient({ cookies })

  const { data, error } = await superbase.from('happy-nerding-modules').select()

  if (error) {
    console.log(error.message)
  }
  return data
}

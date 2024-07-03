import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound } from 'next/navigation'

export async function getModulesType(type_view) {
  const superbase = createServerComponentClient({ cookies })

  const { data, error } = await superbase.from('happy-nerding-modules').select('*').eq('type_view', type_view)

  if (error) {
    console.log(error.message)
    notFound()
  }
  return data
}

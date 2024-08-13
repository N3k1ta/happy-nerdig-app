import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound } from 'next/navigation'

export async function getModule(moduleId) {


  const superbase = createServerComponentClient({ cookies })

  const { data, error } = await superbase
    .from('happy-nerding-modules')
    .select('*')
    .eq('id', moduleId)
    .single()

  if (error) {
    console.log(error.message)
    notFound()

  }
  return data
} 

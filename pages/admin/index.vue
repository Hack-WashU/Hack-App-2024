<script setup lang="ts">
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
serve(async () => {
  console.log(Deno.env.get('SUPABASE_URL'));
  console.log(Deno.env.get('SUPABASE_KEY'));
})
const supabase = useSupabaseClient()
const user = useSupabaseUser()

let {data} = await supabase.from('profiles').select(`role`).eq('id', user.value.id).single()

if (data) {
    if (data.role !== 'admin') {
        await navigateTo('/schedule')
    }
}
</script>
<template>
  <div class="flex justify-center">
    <div class="w-1/2">
        <AdminSetKey class="mt-10"/>
        <AdminGenerateLink class="mt-10"/>
    </div>
  </div>
</template>

<script>
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
serve(async () => {
  console.log(Deno.env.get('SUPABASE_URL'));
  console.log(Deno.env.get('SUPABASE_KEY'));
})
export default {
  mounted() {
    this.$router.push('/schedule');
  }
}
</script>
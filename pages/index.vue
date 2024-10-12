<script>
console.log(Deno.env.get('SUPABASE_URL'))
console.log(Deno.env.get('SUPABASE_KEY'))
export default {
  mounted() {
    this.$router.push('/schedule');
  }
}
</script>
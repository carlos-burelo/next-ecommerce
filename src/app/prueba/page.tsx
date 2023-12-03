export default function Page() {
  async function create(formData: FormData) {
    'use server'
    console.log(formData)
  }

  return (
    <form action={create}>
      <input type='text' name='name' />
      <button type='submit'>Submit</button>
    </form>
  )
}

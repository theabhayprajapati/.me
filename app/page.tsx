import { BlogPosts } from 'app/components/posts'
import './global.css'
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey,
      </h1>
      <p className="mb-4">
        I'm Abhay Prajapati, a Software Engineer I at <a href="https://www.deskera.com" className='lava-lamp-text text'>Deskera</a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

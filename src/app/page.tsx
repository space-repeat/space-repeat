import Image from 'next/image';

export default async function Home() {

  

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='p-8 select-none space-y-8'>
        <h3 className='tracking-tighter'>
          Welcome to,
          <p className='text-4xl md:text-7xl font-light tracking-tighter '>
            space.repeat
          </p>
        </h3>
        <section className='space-y-2 font-extralight'>
          <li className='text-sm sm:text-base md:text-lg opacity-90'>
            A game changing flashcard experience
          </li>
          <li className='text-sm sm:text-base md:text-lg opacity-90'>
            Say goodbye to the hassle of traditional paper flashcards and hello
            to a streamlined, digital solution
          </li>
        </section>

        <section>
          <a
            className='bg-white text-zinc-800  font-bold text-sm px-4 py-2 cursor-alias'
            href='https://github.com/space-repeat/space-repeat'
            target='_blank'
          >
            🤩 Star on Github
          </a>
        </section>
      </div>
    </div>
  );
}

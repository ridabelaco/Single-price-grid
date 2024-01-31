function Grid() {
  return (
    <div className="min-h-screen w-full bg-cover bg-lightGray overflow-hidden flex justify-center items-center p-10 font-karla">
      <div className="grid max-w-sm grid-cols-1 drop-shadow-lg xl:max-w-3xl xl:grid-cols-2">
        <div className=' bg-white p-5 xl:p-10 rounded-t-lg xl:col-span-2'>
          <h3 className='text-xl font-bold text-cyan mb-5'>
            Join our community
          </h3>
          <h4 className='text-base font-bold text-brightYellow mb-4 xl:mb-2'>
            30-day, hassle-free money back guarantee
          </h4>
          <p className='text-sm text-grayishBlue mb-3 xl:mb-0'>
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>
        <div className=' bg-cyan p-5 xl:p-10 xl:rounded-bl-lg'>
          <h3 className='text-lg font-bold text-white mb-4'>
            Monthly Subscription
          </h3>
          <h4 className='text-3xl font-bold text-white flex items-center mb-2'>
            $29 <span className='text-sm text-[hsl(179,72%,55%)]'>&nbsp; &nbsp; per month</span>
          </h4>
          <p className='text-base text-lightGray mb-8'>
            Full access for less than $1 a day
          </p>
          <button className='w-full bg-brightYellow drop-shadow-lg font-bold text-white p-3  mb-4 xl:mb-0 rounded-lg'>
            Sign Up
          </button>
        </div>
        <div className=' bg-[hsl(179,62%,46%)] p-5 xl:p-10 rounded-b-lg xl:rounded-bl-none'>
          <h3 className='text-lg font-bold mb-4 text-white'>
            Why Us
          </h3>
          <ul className="text-sm text-[hsl(204_43%_93%)] mb-2 xl:mb-0">
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li> Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Grid

const NewsLetterBox = () => {

    const onSubmitHandler= (event)=>{
        event.preventDefault()
    }

  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-400">Subscribe now to our Newsletter</p>
        <p className="text-gray-400 mt-3">TEXTTEXTTEXTTEXTTEXTTEXT</p>
        <form onSubmit={onSubmitHandler}className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input type="email" placeholder="Enter your email"className="w-full sm:flex outline-none" required/>
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
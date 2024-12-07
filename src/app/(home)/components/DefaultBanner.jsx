const DefaultBanner = ({title, backgroundImage}) => {

    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <section className='flex flex-col justify-center items-center w-full pt-72 pb-20 px-4 font-ibm' style={jssStyles}>
            <div className='flex justify-start md:justify-center w-full max-w-screen-xl'>
                 <h1 className="text-5xl text-start w-full flex font-bold text-white">{title}</h1>
            </div>
        </section>
    )
}

export default DefaultBanner
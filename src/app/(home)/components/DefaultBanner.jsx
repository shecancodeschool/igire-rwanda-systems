const DefaultBanner = ({title, backgroundImage}) => {

    const jssStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <div className='flex flex-col justify-center items-center w-full pt-52 md:pb-20 font-ibm' style={jssStyles}>
            <div className='flex justify-start md:justify-center w-full max-w-screen-xl'>
                 <h1 className="text-3xl md:text-5xl text-start w-full flex font-bold text-white">{title}</h1>
            </div>
        </div>
    )
}

export default DefaultBanner
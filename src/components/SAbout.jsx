const SAbout =()=>{
    const aboutStyle ={
        color:"rgb(219, 211, 211)",
        display: "flex",
        flexDirection:"column",
        padding:"10px"

    }
    const aboutTitle ={
        display: "flex",
        margin:"5px"
    }
    const iframeStyle ={
        border:"0",
        outline:"0"
    }
    const movieDesc ={
        marginTop:"10px",
        marginBottom:"10px"
    }
    return(
        <div className={"about__movie"} style={aboutStyle}>
            <h2>Arcane</h2>
            <div className={"about__title"} style={aboutTitle}>
                <p>Original title:</p>
                <p>Arcane</p>
                <p>:League of legends</p>
            </div>
            <div style={aboutTitle}>
                <p>TV Series</p>
                <p>2021-2024</p>
                <p>TV-14</p>
                <p>40M</p>
            </div>
            <div>
                <iframe width="100%" height="400" style={iframeStyle}
                        src="https://www.youtube.com/embed/ysqiEC6bLUI?si=4lBt4NbuY3nZEGVr&loop=1">
                </iframe>
            </div>
            <div style={movieDesc}>
                <p>Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two
                    iconic League of Legends champions and the power that will tear them apart.
                </p>
            </div>

        </div>
    )
}
export default SAbout
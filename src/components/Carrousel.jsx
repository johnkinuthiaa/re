import {ArrowBackIos,ArrowForwardIos} from "@mui/icons-material";
import "./carrousel.css"
import {useState} from "react";

const Carrousel =()=>{
    let[imageIndex,setImageIndex] =useState(0)
    const images=[
        "https://m.media-amazon.com/images/M/MV5BMWY0MWE3MmUtMmQ0ZS00Yzc2LTk5ZDEtMzYwYmE3ODA4ZWI5XkEyXkFqcGc@._V1_.jpg",
        "https://i.pinimg.com/474x/c9/20/fa/c920fa82da29b3c37fbc4a7ec797d6a3.jpg",
        "https://i.pinimg.com/736x/c7/fd/3c/c7fd3c232d4b8dbd4139d5fb3bd2073f.jpg",
        "https://i.pinimg.com/474x/44/1f/16/441f16b922b6edb4f5d3cc9e3038f7fa.jpg",
        "https://i.pinimg.com/474x/9d/af/5b/9daf5bd40c763e0046813cc541da8f6e.jpg",
        "https://i.pinimg.com/236x/7e/d3/6e/7ed36ed04bc8254ba9fd57a768fd7a0d.jpg",
        "https://i.pinimg.com/474x/49/b5/b6/49b5b68c5a41a6c4046fc53592f1bbeb.jpg",
        "https://i.pinimg.com/474x/42/90/02/429002f5b11f6f8240e9c5d28ca6b374.jpg",
        "https://i.pinimg.com/236x/82/89/8f/82898fff14900adb19ce49998988e11d.jpg",
        "https://i.pinimg.com/474x/8f/f2/b4/8ff2b4efe1cfc347fde188bb6074cf29.jpg",
        "https://i.pinimg.com/474x/dd/30/ac/dd30ac291107955ac83443a6b13651ba.jpg",
        "https://i.pinimg.com/474x/18/98/a2/1898a2eb63a9addfef821c1b3b36d7ea.jpg",
        "https://i.pinimg.com/236x/a9/94/1e/a9941e616223265f9abdc115ca03ac4b.jpg",
        "https://i.pinimg.com/736x/5b/da/db/5bdadbc120162daa0a601bac62363fcc.jpg",
        "https://i.pinimg.com/236x/3d/b1/c7/3db1c7152c9fbff46681a9b1e4530b20.jpg"

    ]

    function gotToNext() {
        const hasReachedEnd = imageIndex===images.length-1?imageIndex=0:imageIndex+1
        setImageIndex(hasReachedEnd)
    }

    function gotToPrev() {
        const hasReachedStart =imageIndex===0?imageIndex=images.length-1:imageIndex-1
        setImageIndex(hasReachedStart)
    }
    const imageStyles ={
        height:"419px",
        width:"239px",
        borderRadius:"10px"
    }
    const imageStyle ={
        backgroundImage:`url(${images[imageIndex]})`,
        // transform:"translate(10%)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        display:"flex",
        justifyContent:"space-between"

    }

    return (
        <div className={"carrousel"} >
            <div className={"image"} style={imageStyle}>
                <button onClick={()=>{
                    gotToPrev()
                }}>
                    <ArrowBackIos/>
                </button>
                {/*<img src={images[imageIndex]} style={imageStyles}/>*/}
                <button onClick={()=>{
                    gotToNext()
                }}>
                    <ArrowForwardIos/>
                </button>
            </div>

        </div>
    )

}
export default Carrousel
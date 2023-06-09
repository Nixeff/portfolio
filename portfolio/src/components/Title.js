import React, { useState, useEffect} from "react";

const Title = () => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Hi, I'm Theodore!"
    )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
        }, 40)
    }
    }, [index])
    return(
        <h1 id="title">{text}</h1>
    );
}

export default Title;
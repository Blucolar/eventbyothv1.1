const truncateString = (text, maxLength) => {
    if(text.length <= maxLength){
        return text
    }

    const SliceText = text.substring(0, maxLength) + "..."
    return SliceText
}

export default truncateString;

const generateStyleForSliderItem = ({transform, opacity, transition}) => {

    const generateTransform = ({perspective, translate, rotate}) => {

        const p = perspective && `perspective(${perspective}px)`
        const tx = translate && translate.x ? `translateX(${translate.x}px)` : ""
        const tz = translate && translate.z ? `translateZ(${translate.z}px)` : ""
        const ry = rotate && rotate.y ? `rotateY(${rotate.y}deg)` : ""


        return `${p} ${tz} ${tx} ${ry}`
    }

    const generateTransition = ({transform, opacity}) => {
        const tdu = transform && transform.duration +"s"
        const tt = transform && transform.timingFunction
        const tde = transform && transform.delay ? transform.delay +"s" : ""

        const transitionTransform = transform ? `transform ${tdu} ${tt} ${tde}` : ""

        const odu = opacity && opacity.duration +"s"
        const ot = opacity && opacity.timingFunction
        const odd = opacity && opacity.delay ? opacity.delay +"s" : ""

        const transitionOpacity = opacity ? `opacity ${odu} ${ot} ${odd}` : ""

        return `${transitionTransform}${transform && opacity ? "," : ""} ${transitionOpacity}`
    }

    return  {
        transform: transform ? generateTransform(transform) : "",
        opacity: opacity ? opacity : 0,
        transition: transition ? generateTransition(transition) : ""
        }

}

export default generateStyleForSliderItem
import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'


const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src={imageOne} alt="" className="h-full rounded mb-20 shadow border-4 border-blue-200" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Penthouse</h2>
                <p className="mb-2">Silver Spring, MD</p>
                <span>$25000</span>
            </div>
        </div>

<div className="menu-card ">
<img src={imageTwo} alt="" className="h-full rounded mb-20 shadow border-4 border-blue-200 " />
<div className="center-content">
    <h2 className="text-2xl mb-2">Rooftop Penthouse</h2>
    <p className="mb-2">Silver Spring, MD</p>
    <span>$25000</span>
</div>
</div>
</>
    )
}

export default Content

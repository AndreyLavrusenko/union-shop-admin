import './quick-view.scss'
import CardSlider from "../../components/quick-view/card-slider/CardSlider";
import CardInfo from "../../components/quick-view/card-info/CardInfo";

const QuickView = ({loading, productData, productInfo}) => {

    if (loading) return


    return (
        <div className="card">
            <CardSlider image={productData.image} background={productData.backgroundcolor} images={productData.image_arr} title={productData.title}/>
            <CardInfo
                productInfo={productInfo}
                productData={productData}
            />
        </div>

    )
}

export default QuickView
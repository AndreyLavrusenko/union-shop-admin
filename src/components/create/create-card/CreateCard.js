import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import CreateCardImage from "./create-card-image/CreateCardImage";
import CreateCardInput from "./create-card-input/CreateCardInput";

import {adminCreateCardAPI} from "../../../api/api";

import './create-card.scss'


const CreateCard = () => {
    const navigate = useNavigate()

    const formData = new FormData();
    // Главная картинка
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")

    // Нижнии картинки
    const [uploadedFiles, setUploadedFiles] = useState([])
    // Картинки размеров
    const [uploadedFilesSize, setUploadedFilesSize] = useState([])

    const ls = JSON.parse(localStorage.getItem("create-card-admin"))

    // Если текст уже вводился то сразу подставляем значения
    const [productInfo, setProductInfo] = useState({
        category: JSON.parse(localStorage.getItem("newProduct")),
        name: ls?.name ? ls?.name : "",
        description: ls?.description ? ls?.description : "",
        exactCategory: ls?.exactCategory ? ls?.exactCategory : "",
        cardColor: ls?.cardColor ? ls?.cardColor : "#ed6868",
        subtitleColor: ls?.subtitleColor ? ls?.subtitleColor : "#734AEE",
        titleColor: ls?.titleColor ? ls?.titleColor : "#DF3F3F",
        isLogo: false,
        about: ls?.about ? ls?.about : "",
        recommendation: ls?.recommendation ? ls?.recommendation : "",
        sizeGrid: ls?.sizeGrid ? ls?.sizeGrid : "",
    })

    const onChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setProductInfo({...productInfo, [e.target.name]: value})
        localStorage.setItem("create-card-admin", JSON.stringify(productInfo))
    }

    const onSubmit = async (e, productInfo) => {
        e.preventDefault()

        formData.append("productInfo", JSON.stringify(productInfo))
        formData.append("file", file)
        formData.append("categoryProduct", localStorage.getItem("newProduct"))

        for (const file of uploadedFiles) {
            formData.append("filesArr", file);
        }

        for (const file of uploadedFilesSize) {
            formData.append("filesArrSize", file);
        }

        await adminCreateCardAPI.createNewProduct(formData)
            .then(res => {
                if (res.data.resultCode === 0) {
                    navigate('/create-list-product')
                    localStorage.removeItem("newProduct")
                    localStorage.removeItem("create-card-admin")
                    localStorage.setItem("uniqCode", res.data.uniqCode)
                } else {
                    alert("Ошибка при сохранении")
                }
            })
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    // Multiple input сохранение данных в state
    const handleUploadFiles = (files) => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    }

    // Загрузка нижних изображений
    const loadArrImage = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }



    // Multiple input сохранение данных в state
    const handleUploadFilesSize = (files) => {
        const uploaded = [...uploadedFilesSize];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
            }
        })
        if (!limitExceeded) setUploadedFilesSize(uploaded)

    }

    // Загрузка нижних изображений
    const loadArrImageSize = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFilesSize(chosenFiles);
    }


    return (
        <div >
            <form onSubmit={e => onSubmit(e, productInfo)} className="card__product">
                <CreateCardImage uploadedFiles={uploadedFiles} loadArrImage={loadArrImage} preview={preview} loadImage={loadImage}/>
                <CreateCardInput uploadedFilesSize={uploadedFilesSize} loadArrImageSize={loadArrImageSize} onChange={onChange} productInfo={productInfo} />
            </form>
        </div>
    );
};

export default CreateCard;
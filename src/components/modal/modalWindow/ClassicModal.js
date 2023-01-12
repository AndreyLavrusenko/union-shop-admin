import {useState} from "react";

const ClassicModal = ({activeId, deleteProduct}) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="modal__info">
            <h1>Удаление</h1>
            <div className="modal__info-wrapper">
                <h3>Товар незамедлительно будет удален с площадки. <br/>
                    Все детали и материалы, связанные с товаром также будут удалены.</h3>
                <div onClick={() => setIsChecked(prev => !prev)} className="checkbox">
                    <input onChange={() => setIsChecked(prev => !prev)} checked={isChecked} className="custom-checkbox" type="checkbox" id="delete-checkbox" name="delete-checkbox" />
                    <label htmlFor="delete-checkbox">Я понимаю, что товар будет удален, и все детали будут утеряны.</label>
                </div>
                <button onClick={() => deleteProduct(activeId)} disabled={!isChecked}>Удалить товар</button>
            </div>
        </div>
    )
}

export default ClassicModal;
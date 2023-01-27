import React, {useState} from 'react';

const EditOrder = ({orderDetails, changeOrderStatus, saveTrackNumber}) => {
    const [trackNumber, setTrackNumber] = useState(orderDetails[0].trackNumber ? orderDetails[0].trackNumber : "")

    const allStatuses = [
        ['performed', 'Оплачено'],
        ['sent', 'Отправлено'],
        ['delivered', 'Доствлено'],
        ['received', 'Получено']
    ]

    const changeTrackNumber = e => {
        setTrackNumber(e.target.value)
    }



    return (
        <div className="edit__order">
            {allStatuses.map((allStatus, i) => {
                if (orderDetails[0].status === allStatus[0]) {
                    return (
                        <button className="edit__order-active" key={i} value={allStatus[0]}>
                            {allStatus[1]}
                        </button>
                    )
                } else {
                    return (
                        <button onClick={() => changeOrderStatus(orderDetails[0].id, allStatus[0])} key={i} value={allStatus[0]}>
                            {allStatus[1]}
                        </button>
                    )
                }
            })}
            <div>
                <input
                    type="text"
                    placeholder="Трек номер заказа"
                    onBlur={() => saveTrackNumber(orderDetails[0].id, trackNumber)}
                    onChange={changeTrackNumber}
                    value={trackNumber}
                />
            </div>
        </div>
    );
};

export default EditOrder;